import React, { useEffect, useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { APP_CONSTANTS } from "@/constants";

type Skill = { name: string; percent: number };

const TeamColorClass = APP_CONSTANTS.SKILLS_SETTINGS?.TEAM_COLOR_CLASS ?? "bg-amber-600";

function useCountUp(target: number, trigger: boolean, duration = 700, delay = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) {
      setValue(0);
      return;
    }

    // Start the animated count after the provided delay
    timerRef.current = window.setTimeout(() => {
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(Math.round(t * target));
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = null;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [target, trigger, duration, delay]);

  return value;
}

function SkillBar({ name, percent, animate, index }: Skill & { animate: boolean; index: number }) {
  const stagger = APP_CONSTANTS.SKILLS_SETTINGS?.STAGGER_MS ?? 80;
  const duration = APP_CONSTANTS.SKILLS_SETTINGS?.DURATION_MS ?? 700;
  const delay = index * stagger; // stagger per item from constants
  const displayed = useCountUp(percent, animate, duration, animate ? delay : 0);

  return (
    <div
      className="mb-3 transform transition-all duration-500 ease-out motion-safe:duration-500"
      style={{ transform: animate ? "translateY(0)" : "translateY(6px)", opacity: animate ? 1 : 0, transitionDelay: animate ? `${delay}ms` : "0ms" }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{displayed}%</div>
      </div>

      <div
        className="w-full h-3 bg-muted rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label={`${name} proficiency`}
      >
        <div
          className={`h-full ${TeamColorClass} rounded-full transition-all duration-700 ease-out motion-safe:duration-700`}
          style={{ width: animate ? `${percent}%` : "0%", transitionDelay: animate ? `${delay}ms` : "0ms" }}
        />
      </div>
    </div>
  );
}

const Skills: React.FC = () => {
  const categories = APP_CONSTANTS.SKILLS.CATEGORIES;
  const defaultKey = categories[0]?.key ?? "languages";
  const [mounted, setMounted] = useState(false);
  const [activeKey, setActiveKey] = useState<string>(defaultKey);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollButtons();
    const onResize = () => updateScrollButtons();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [categories]);

  useEffect(() => {
    // initial mount animation
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // re-trigger animation on tab change
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 50);
    updateScrollButtons();
    return () => clearTimeout(t);
  }, [activeKey]);

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <Tabs defaultValue={defaultKey} onValueChange={(v) => setActiveKey(v)}>
        {/* Tab row only scrolls horizontally on small screens; content below remains fixed */}
        <div className="relative">
          {/* left fade overlay (inline style to avoid Tailwind lint issues) */}
          <div
            style={{
              pointerEvents: "none",
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 32,
              transition: "opacity 200ms",
              opacity: 0.6,
              background: "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />

          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
            <button
              type="button"
              aria-hidden
              className={`inline-flex items-center justify-center rounded-full p-1 bg-white/80 dark:bg-black/60 shadow-sm ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => {
                if (!tabsRef.current) return;
                tabsRef.current.scrollBy({ left: -Math.round(tabsRef.current.clientWidth * 0.6), behavior: "smooth" });
              }}
            >
              <ChevronLeft className="h-4 w-4 text-amber-600" />
            </button>
          </div>
            <TabsList
              ref={tabsRef}
              className="flex gap-2 overflow-x-auto overflow-y-hidden snap-x snap-mandatory py-1"
              style={{ WebkitOverflowScrolling: "touch" }}
              onScroll={() => updateScrollButtons()}
            >
              {categories.map((c) => (
                <TabsTrigger key={c.key} value={c.key} className="flex-none snap-start whitespace-nowrap px-3 py-1 rounded-md mx-1 data-[state=active]:font-semibold data-[state=active]:text-amber-600">
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>

          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 32,
              pointerEvents: "none",
              transition: "opacity 200ms",
              opacity: 0.6,
              background: "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
          />

          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
            <button
              type="button"
              aria-hidden
              className={`inline-flex items-center justify-center rounded-full p-1 bg-white/80 dark:bg-black/60 shadow-sm ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => {
                if (!tabsRef.current) return;
                tabsRef.current.scrollBy({ left: Math.round(tabsRef.current.clientWidth * 0.6), behavior: "smooth" });
              }}
            >
              <ChevronRight className="h-4 w-4 text-amber-600" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          {categories.map((c) => (
            <TabsContent key={c.key} value={c.key}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {c.items.map((s, idx) => (
                  <SkillBar key={s.name} name={s.name} percent={s.percent} animate={mounted && activeKey === c.key} index={idx} />
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export default Skills;