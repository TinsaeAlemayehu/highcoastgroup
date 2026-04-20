import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { label: 'Projects Completed', value: 500, suffix: '+' },
  { label: 'Happy Clients', value: 200, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold text-navy">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-16 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 uppercase tracking-tighter text-[10px] font-bold mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
