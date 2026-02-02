"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bot, Clock, DollarSign, Users, Shield, Wrench } from "lucide-react";

const faqs = [
  {
    icon: Bot,
    question: "¿Que tipo de procesos puedo automatizar?",
    answer: "Practicamente cualquier tarea repetitiva: gestion de leads, facturacion, reportes, onboarding de empleados, atencion al cliente, sincronizacion de datos entre sistemas, y mucho mas.",
  },
  {
    icon: Clock,
    question: "¿Cuanto tiempo toma implementar una solucion?",
    answer: "Dependiendo de la complejidad, entre 2 a 12 semanas. Proyectos simples como chatbots pueden estar listos en dias. Integraciones mas complejas requieren mas tiempo de planeacion y pruebas.",
  },
  {
    icon: DollarSign,
    question: "¿Cuanto cuesta automatizar mis procesos?",
    answer: "Los costos varian segun el alcance. Ofrecemos soluciones desde proyectos puntuales hasta planes de soporte mensual. Agenda una llamada para una cotizacion personalizada.",
  },
  {
    icon: Users,
    question: "¿La automatizacion reemplazara a mis empleados?",
    answer: "No, la automatizacion esta disenada para potenciar y empoderar a tu equipo al encargarse de tareas repetitivas, permitiendoles trabajar de manera mas estrategica y creativa.",
  },
  {
    icon: Shield,
    question: "¿Mis datos estaran seguros?",
    answer: "Absolutamente. Implementamos las mejores practicas de seguridad, encriptacion de datos y cumplimos con regulaciones de privacidad. Trabajamos con proveedores de nube certificados.",
  },
  {
    icon: Wrench,
    question: "¿Que pasa si algo deja de funcionar?",
    answer: "Ofrecemos soporte continuo y monitoreo. Si algo falla, nuestro equipo lo detecta y resuelve rapidamente. Tambien capacitamos a tu equipo para resolver problemas comunes.",
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
