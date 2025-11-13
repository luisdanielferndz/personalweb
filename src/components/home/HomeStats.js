import React from "react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Trabajados y asesorados", value: "+500 clientes" },
  { id: 2, name: "En procesos de ventas", value: "+$142 mil" },
  { id: 3, name: "De trabajo y servicios", value: "3 años" },
];

const HomeStats = React.memo(() => {
  return (
    <section
      className="bg-fondoDev py-24 sm:py-32 font-luxury overflow-x-hidden"
      aria-labelledby="home-stats-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 id="home-stats-heading" className="sr-only">
          Estadísticas de impacto profesional
        </h2>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <dt className="text-base font-medium text-gray-400">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl sm:text-5xl font-semibold tracking-tight text-white break-words">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
});

HomeStats.displayName = "HomeStats";
export default HomeStats;
