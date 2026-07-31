import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useCallback } from "react";
import { foods, type Food, type FoodCategory } from "~/data/foods";

/* ───────────────────────────────────────────────────────────
   Filter configuration
   Each filter has a label and a predicate that selects which
   foods are eligible when the filter is active.
   "toate" (all) has no predicate — everything passes.
─────────────────────────────────────────────────────────── */

type FilterKey = "toate" | "vegetarian" | "sub30" | "desert";

interface FilterDef {
  key: FilterKey;
  label: string;
  predicate: ((f: Food) => boolean) | null;
}

const FILTERS: FilterDef[] = [
  { key: "toate", label: "Toate", predicate: null },
  { key: "vegetarian", label: "Vegetarian", predicate: (f) => f.isVegetarian },
  { key: "sub30", label: "Sub 30 min", predicate: (f) => f.prepTime < 30 },
  { key: "desert", label: "Desert", predicate: (f) => f.category === "Desert" },
];

/* ───────────────────────────────────────────────────────────
   Route definition — no server loader needed; food data is
   imported statically from the local data module.
─────────────────────────────────────────────────────────── */

export const Route = createFileRoute("/")({
  component: Home,
});

/* ───────────────────────────────────────────────────────────
   Main component
─────────────────────────────────────────────────────────── */

function Home() {
  // ── State ─────────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState<FilterKey>("toate");
  const [phase, setPhase] = useState<"idle" | "spinning" | "result">("idle");
  const [spinDisplay, setSpinDisplay] = useState<string>("");
  const [result, setResult] = useState<Food | null>(null);
  const [cardVisible, setCardVisible] = useState(false);

  // Ref to track running animation (so we can guard against double-clicks)
  const spinningRef = useRef(false);

  // ── Derived data ──────────────────────────────────────
  const getFilteredFoods = useCallback((): Food[] => {
    const filter = FILTERS.find((f) => f.key === activeFilter);
    if (!filter || !filter.predicate) return foods;
    return foods.filter(filter.predicate);
  }, [activeFilter]);

  const filteredFoods = getFilteredFoods();

  // ── Spin handler (slot-machine animation) ─────────────
  const handleSpin = useCallback(() => {
    if (spinningRef.current) return;
    spinningRef.current = true;

    const pool = getFilteredFoods();
    if (pool.length === 0) return;

    // Pick the winner upfront
    const chosen = pool[Math.floor(Math.random() * pool.length)];
    setResult(chosen);
    setCardVisible(false);
    setPhase("spinning");

    /* ── Slot-machine ticker ────────────────────────────
       Cycles through random food names with a gradually
       increasing delay, simulating a physical reel slowing
       down before landing on the winner. */
    let tick = 0;
    const maxTicks = 16;

    const scheduleNextTick = () => {
      tick++;
      const randomName = pool[Math.floor(Math.random() * pool.length)].name;
      setSpinDisplay(randomName);

      if (tick >= maxTicks) {
        setSpinDisplay(chosen.name);
        setTimeout(() => {
          setPhase("result");
          requestAnimationFrame(() => {
            setCardVisible(true);
          });
          spinningRef.current = false;
        }, 450);
        return;
      }

      // Delay grows: fast start → slow finish
      const delay = 70 + (tick / maxTicks) * 280;
      setTimeout(scheduleNextTick, delay);
    };

    scheduleNextTick();
  }, [getFilteredFoods]);

  // ── Change filter — resets the UI ─────────────────────
  const handleFilterChange = (key: FilterKey) => {
    if (spinningRef.current) return;
    setActiveFilter(key);
    setPhase("idle");
    setResult(null);
    setCardVisible(false);
    setSpinDisplay("");
  };

  // ── Category badge colour mapping ─────────────────────
  const categoryBadge = (cat: FoodCategory) => {
    const map: Record<FoodCategory, string> = {
      "Fast-food": "bg-orange-100 text-orange-800",
      "Sănătos": "bg-green-100 text-green-800",
      "Desert": "bg-pink-100 text-pink-800",
      "Tradițional Românesc": "bg-amber-100 text-amber-800",
      "Italian": "bg-red-100 text-red-800",
      "Asiatic": "bg-yellow-100 text-yellow-800",
      "Mic Dejun": "bg-sky-100 text-sky-800",
    };
    return map[cat] ?? "bg-gray-100 text-gray-800";
  };

  // ── Render ────────────────────────────────────────────
  return (
    <main className="flex min-h-dvh flex-col items-center px-4 py-8 sm:py-14">
      {/* ── Title ────────────────────────────────────── */}
      <h1 className="mb-1 text-4xl font-extrabold tracking-tight text-amber-50 sm:text-5xl">
        🍽️ Ce mănânc azi?
      </h1>
      <p className="mb-8 text-base text-amber-200/70">
        Roata norocului culinar — lasă destinul să decidă!
      </p>

      {/* ── Filter bar ───────────────────────────────── */}
      <nav className="mb-10 flex flex-wrap items-center justify-center gap-2" aria-label="Filtre">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => handleFilterChange(f.key)}
            disabled={spinningRef.current}
            className={
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 " +
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 " +
              (activeFilter === f.key
                ? "bg-amber-500 text-amber-950 shadow-lg shadow-amber-500/30 scale-105"
                : "bg-amber-900/50 text-amber-200 hover:bg-amber-800/60")
            }
          >
            {f.label}
          </button>
        ))}
      </nav>

      {/* ── Slot-machine display ─────────────────────── */}
      <div className="mb-8 h-16 flex items-center justify-center">
        {phase === "spinning" && (
          <p className="animate-[pulse_0.15s_ease-in-out] text-2xl font-bold text-amber-300 sm:text-3xl">
            {spinDisplay}
          </p>
        )}
        {phase === "idle" && !result && (
          <p className="text-lg text-amber-200/50">
            Apasă butonul pentru inspirație culinară!
          </p>
        )}
      </div>

      {/* ── The big button ───────────────────────────── */}
      <button
        onClick={handleSpin}
        disabled={spinningRef.current || filteredFoods.length === 0}
        className={
          "group relative mb-10 inline-flex items-center gap-3 rounded-2xl px-10 py-5 " +
          "text-xl font-bold text-white shadow-2xl transition-all duration-300 " +
          "focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 " +
          "bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_100%] " +
          "hover:bg-right hover:scale-105 hover:shadow-orange-500/40 active:scale-95 " +
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        }
      >
        <span className="text-2xl">🎲</span>
        {phase === "spinning" ? "Se alege..." : "Mâncare Random"}
      </button>

      {/* ── Result card ──────────────────────────────── */}
      {phase === "result" && result && (
        <article
          className={
            "w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl shadow-amber-900/30 " +
            "transition-all duration-500 ease-out " +
            (cardVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
          }
        >
          {/* Food image */}
          <div className="relative h-52 overflow-hidden bg-amber-100 sm:h-60">
            <img
              src={`https://picsum.photos/seed/${result.imageSeed}/400/300`}
              alt={result.name}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <span className={"absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow " + categoryBadge(result.category)}>
              {result.category}
            </span>
            {result.isVegetarian && (
              <span className="absolute right-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow">
                🌱 Vegetarian
              </span>
            )}
          </div>

          {/* Card body */}
          <div className="px-5 py-5 sm:px-6">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">{result.name}</h2>
            <p className="mb-4 leading-relaxed text-gray-600">{result.description}</p>

            <div className="mb-5 flex items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5">⏱️ {result.prepTime} minute</span>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">Ingrediente</h3>
              <ul className="flex flex-wrap gap-1.5">
                {result.ingredients.map((ing) => (
                  <li key={ing} className="rounded-full bg-amber-50 px-3 py-1 text-sm text-amber-800">{ing}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Try-again footer */}
          <div className="border-t border-gray-100 px-5 py-4 text-center sm:px-6">
            <button onClick={handleSpin} className="text-sm font-medium text-orange-500 transition-colors hover:text-orange-600">
              🔄 Nu-mi place — vreau altceva!
            </button>
          </div>
        </article>
      )}

      {/* ── Empty state ──────────────────────────────── */}
      {filteredFoods.length === 0 && (
        <p className="mt-6 text-amber-200/60">
          Niciun preparat nu corespunde filtrului selectat. Încearcă alt filtru!
