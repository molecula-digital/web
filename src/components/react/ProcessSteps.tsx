"use client";

import { motion } from "framer-motion";
import { Phone, FileText, Map, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Llamada inicial",
    description: "Entendemos tus objetivos y definimos el alcance.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta",
    description: "Alcance, inversión y calendario definidos.",
  },
  {
    number: "03",
    icon: Map,
    title: "Diseño",
    description: "Arquitectura y roadmap, validados contigo.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Construcción",
    description: "Desarrollo ágil con demos semanales.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Entrega",
    description: "Pruebas, capacitación y lanzamiento.",
  },
];

export function ProcessSteps() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative"
    >
      {/* Horizontal line - desktop (spans between node centers) */}
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        style={{ originX: 0 }}
        className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-md-green/30"
      />

      {/* Desktop: horizontal layout */}
      <div className="hidden md:grid md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delay: index * 0.1,
                },
              },
            }}
            className="relative flex flex-col items-center text-center group cursor-default"
          >
            <motion.div
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: index * 0.1 + 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.15 }}
              className="w-12 h-12 rounded-full bg-cream border-2 border-md-green flex items-center justify-center z-10 mb-4 group-hover:bg-md-green transition-colors"
            >
              <step.icon
                className="w-5 h-5 text-md-green group-hover:text-white transition-colors"
                strokeWidth={1.5}
              />
            </motion.div>
            <span className="text-md-green font-mono text-xs font-bold">
              {step.number}
            </span>
            <h3 className="font-display text-base font-semibold text-primary-800 mt-1 group-hover:text-md-green transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: 2-column grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delay: index * 0.05,
                },
              },
            }}
            className="bg-white border border-primary-200 rounded-xl p-4 text-center hover:border-md-green hover:shadow-md transition-all"
          >
            <motion.div
              variants={{
                hidden: { scale: 0, rotate: -180 },
                visible: {
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    delay: index * 0.05 + 0.1,
                  },
                },
              }}
              className="w-10 h-10 rounded-full bg-cream-alt border-2 border-md-green flex items-center justify-center mx-auto mb-2"
            >
              <step.icon className="w-4 h-4 text-md-green" strokeWidth={1.5} />
            </motion.div>
            <span className="text-md-green font-mono text-xs font-bold">
              {step.number}
            </span>
            <h3 className="font-display text-sm font-semibold text-primary-800 mt-1">
              {step.title}
            </h3>
            <p className="text-gray-600 text-xs mt-1">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
