import { useCountUp } from '../hooks/useAnimations';

const stats = [
  { value: 40, suffix: '+', label: 'Advocates' },
  { value: 10, suffix: '+', label: 'Paralegals' },
  { value: 1000, suffix: '+', label: 'Matters Handled' },
  { value: 25, suffix: '+', label: 'Practice Areas' },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center p-6">
      <span className="font-display text-4xl lg:text-5xl font-bold text-gold">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="block font-body text-sm text-white/50 mt-2 tracking-wider uppercase">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-8 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201,163,91,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,163,91,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
