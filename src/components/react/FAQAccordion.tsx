"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bot, Clock, DollarSign, Users, Shield, Wrench, Rocket, Code } from "lucide-react";

const faqs = [
  {
    icon: Bot,
    question: "¿Qué tipo de procesos puedo automatizar?",
    answer: "Cualquier tarea repetitiva: gestión de leads, facturación, reportes, onboarding, atención al cliente, sincronización de datos y más.",
  },
  {
    icon: Clock,
    question: "¿Cuánto tiempo toma implementar una solución?",
    answer: "Entre 2 y 12 semanas, según la complejidad. Un chatbot puede estar listo en días. Integraciones más complejas necesitan más planeación y pruebas.",
  },
  {
    icon: DollarSign,
    question: "¿Cuánto cuesta?",
    answer: "Depende del alcance. Trabajamos desde proyectos puntuales hasta planes de soporte mensual. Agenda una llamada y te damos una cotización personalizada.",
  },
  {
    icon: Users,
    question: "¿Esto reemplaza a mi equipo?",
    answer: "No. Tu equipo se libera de tareas repetitivas para enfocarse en trabajo estratégico y creativo. Hacen más, no menos.",
  },
  {
    icon: Shield,
    question: "¿Mis datos estarán seguros?",
    answer: "Sí. Encriptación, mejores prácticas de seguridad y proveedores de nube certificados. Tus datos están protegidos.",
  },
  {
    icon: Wrench,
    question: "¿Qué pasa si algo deja de funcionar?",
    answer: "Soporte continuo y monitoreo activo. Si algo falla, lo detectamos y resolvemos. También capacitamos a tu equipo para resolver problemas comunes.",
  },
  {
    icon: Rocket,
    question: "¿Trabajan con startups?",
    answer: "Con ambos. Para startups: MVPs y soluciones que escalan. Para empresas establecidas: integración en sistemas existentes sin interrumpir operaciones.",
  },
  {
    icon: Code,
    question: "¿Qué pasa si ya tengo un equipo técnico?",
    answer: "Colaboramos con tu equipo, lo capacitamos en IA, o nos encargamos del proyecto completo. Lo que funcione mejor para ti.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-primary-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center gap-3 p-4 text-left hover:bg-cream-alt transition-colors"
          >
            <faq.icon className="w-5 h-5 text-md-green flex-shrink-0" strokeWidth={1.5} />
            <span className="flex-grow font-medium text-primary-800">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 pb-4 pl-12 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
