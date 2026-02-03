"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bot, Clock, DollarSign, Users, Shield, Wrench, Rocket, Code } from "lucide-react";

const faqs = [
  {
    icon: Bot,
    question: "¿Qué tipo de procesos puedo automatizar?",
    answer: "Prácticamente cualquier tarea repetitiva: gestión de leads, facturación, reportes, onboarding de empleados, atención al cliente, sincronización de datos entre sistemas, y mucho más.",
  },
  {
    icon: Clock,
    question: "¿Cuánto tiempo toma implementar una solución?",
    answer: "Dependiendo de la complejidad, entre 2 a 12 semanas. Proyectos simples como chatbots pueden estar listos en días. Integraciones más complejas requieren más tiempo de planeación y pruebas.",
  },
  {
    icon: DollarSign,
    question: "¿Cuánto cuesta automatizar mis procesos?",
    answer: "Los costos varían según el alcance. Ofrecemos soluciones desde proyectos puntuales hasta planes de soporte mensual. Agenda una llamada para una cotización personalizada.",
  },
  {
    icon: Users,
    question: "¿La automatización reemplazará a mis empleados?",
    answer: "No, la automatización está diseñada para potenciar a tu equipo al encargarse de tareas repetitivas, permitiéndoles trabajar de manera más estratégica y creativa.",
  },
  {
    icon: Shield,
    question: "¿Mis datos estarán seguros?",
    answer: "Absolutamente. Implementamos las mejores prácticas de seguridad, encriptación de datos y cumplimos con regulaciones de privacidad. Trabajamos con proveedores de nube certificados.",
  },
  {
    icon: Wrench,
    question: "¿Qué pasa si algo deja de funcionar?",
    answer: "Ofrecemos soporte continuo y monitoreo. Si algo falla, nuestro equipo lo detecta y resuelve rápidamente. También capacitamos a tu equipo para resolver problemas comunes.",
  },
  {
    icon: Rocket,
    question: "¿Trabajan con startups o solo empresas establecidas?",
    answer: "Trabajamos con ambos. Para startups ofrecemos MVPs y soluciones escalables. Para empresas establecidas, integramos IA en sistemas existentes sin interrumpir operaciones.",
  },
  {
    icon: Code,
    question: "¿Qué pasa si ya tengo un equipo técnico?",
    answer: "Podemos colaborar con tu equipo, capacitarlos en herramientas de IA, o encargarnos del proyecto completo. Nos adaptamos a lo que funcione mejor para ti.",
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
