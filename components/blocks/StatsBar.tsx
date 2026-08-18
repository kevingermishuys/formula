import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { stats } from "@/content/site";

export function StatsBar() {
  return (
    <section className="border-y border-ink/5 bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4 md:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05} className="text-center">
            <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              {stat.value !== null ? (
                <CountUp value={stat.value} suffix={stat.suffix} />
              ) : (
                stat.display
              )}
            </p>
            <p className="label mt-1 text-ink-soft">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
