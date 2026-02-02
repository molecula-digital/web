"use client";

import { motion } from "framer-motion";
import {
  Phone,
  FileText,
  Map,
  Hammer,
  CheckCircle,
  HandGrab,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Llamada inicial",
    description:
      "Conversamos sobre tus necesidades, problemas y objetivos. Entendemos tu negocio a fondo.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Presupuesto y propuesta",
    description:
      "Te presentamos una propuesta clara con alcance, tiempos y costos definidos.",
  },
  {
    number: "03",
    icon: Map,
    title: "Plan de trabajo",
    description:
      "Diseñamos la arquitectura y el roadmap del proyecto junto contigo.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Implementación",
    description:
      "Construimos tu solución con metodologías ágiles y comunicación constante.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Pruebas y entrega",
    description:
      "Validamos todo funcione perfecto y te entregamos con capacitación incluida.",
  },
  {
    number: "06",
    icon: HandGrab,
    title: "Soporte",
    description: "¿Algo dejó de funcionar? Nos encargamos de levantarlo",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ProcessSteps() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-3"
    >
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          variants={itemVariants}
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
          className="flex items-start gap-4 bg-white border border-primary-200 rounded-xl p-4 hover:border-md-green hover:shadow-lg transition-all group"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-cream-alt rounded-lg flex items-center justify-center group-hover:bg-md-green transition-colors">
            <step.icon
              className="w-5 h-5 text-primary-800 group-hover:text-white transition-colors"
              strokeWidth={1.5}
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-md-green font-mono text-sm font-bold">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-semibold text-primary-800">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
