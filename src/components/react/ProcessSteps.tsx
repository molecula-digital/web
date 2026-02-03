"use client";

import { motion, useReducedMotion } from "framer-motion";
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
      "Entendemos tu negocio, identificamos oportunidades y definimos objetivos claros.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Propuesta",
    description:
      "Alcance, inversión y calendario. Todo definido antes de empezar.",
  },
  {
    number: "03",
    icon: Map,
    title: "Diseño",
    description:
      "Arquitectura técnica y roadmap validado contigo antes de escribir código.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Construcción",
    description:
      "Desarrollo ágil con demos semanales. Siempre sabes en qué vamos.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Entrega",
    description:
      "Pruebas exhaustivas, capacitación y documentación incluida.",
  },
  {
    number: "06",
    icon: HandGrab,
    title: "Soporte continuo",
    description: "Monitoreo, actualizaciones y respuesta rápida cuando lo necesites.",
  },
];

export function ProcessSteps() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.number}
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
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="space-y-3"
    >
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{
            opacity: 0,
            x: -40,
            y: 20,
            scale: 0.95,
          }}
          variants={{
            hidden: {
              opacity: 0,
              x: -40,
              y: 20,
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                delay: index * 0.08,
              },
            },
          }}
          whileHover={{
            x: 8,
            scale: 1.02,
            transition: { type: "spring", stiffness: 400, damping: 20 },
          }}
          whileTap={{ scale: 0.98 }}
          className="flex items-start gap-4 bg-white border border-primary-200 rounded-xl p-4 hover:border-md-green hover:shadow-lg transition-colors group cursor-default"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            variants={{
              hidden: { scale: 0, rotate: -180 },
              visible: {
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  delay: index * 0.08 + 0.1,
                },
              },
            }}
            className="flex-shrink-0 w-12 h-12 bg-cream-alt rounded-lg flex items-center justify-center group-hover:bg-md-green transition-colors"
          >
            <step.icon
              className="w-5 h-5 text-primary-800 group-hover:text-white transition-colors"
              strokeWidth={1.5}
            />
          </motion.div>
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      delay: index * 0.08 + 0.15,
                    },
                  },
                }}
                className="text-md-green font-mono text-sm font-bold"
              >
                {step.number}
              </motion.span>
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
