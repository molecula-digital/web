"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bot, Clock, DollarSign, Users, Shield, Wrench, Rocket, Code } from "lucide-react";
import { faqs } from "../../data/faqs";

const icons = [Bot, Clock, DollarSign, Users, Shield, Wrench, Rocket, Code];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => {
        const Icon = icons[index];
        return (
          <div
            key={index}
            className="bg-white border border-primary-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-cream-alt transition-colors"
            >
              {Icon && <Icon className="w-5 h-5 text-md-green flex-shrink-0" strokeWidth={1.5} />}
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
        );
      })}
    </div>
  );
}
