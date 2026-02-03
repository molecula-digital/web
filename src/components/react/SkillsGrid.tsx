"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Cog,
  Users,
  BarChart3,
  Wallet,
  GitBranch,
} from "lucide-react";
import { MobileCollapsible } from "./MobileCollapsible";

const skills = [
  {
    icon: MessageSquare,
    title: "Chatbots",
    description:
      "Atiende clientes 24/7 y reduce hasta 60% las consultas repetitivas",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Cog,
    title: "Automatización de procesos",
    description: "Elimina horas de trabajo manual cada semana",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: GitBranch,
    title: "Workflows",
    description:
      "Conecta tus herramientas favoritas en un solo flujo automatizado",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Users,
    title: "Automatización de RH",
    description: "De 2 semanas a 2 días: contratación y onboarding acelerado",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: BarChart3,
    title: "Automatización de CRM",
    description:
      "Nunca pierdas un lead: seguimiento automático y alertas inteligentes",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Wallet,
    title: "Automatización financiera",
    description: "Facturación, conciliación y reportes sin intervención manual",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function SkillsGrid() {
  return (
    <MobileCollapsible
      mobileLimit={3}
      mobileClassName="grid grid-cols-1 gap-3"
      desktopClassName="grid grid-cols-3 gap-3"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className={`bg-white border border-primary-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-lg transition-colors ${skill.className}`}
        >
          <skill.icon
            className="w-6 h-6 text-md-green mb-3"
            strokeWidth={1.5}
          />
          <h3 className="font-display text-lg font-semibold text-primary-800 mb-1">
            {skill.title}
          </h3>
          <p className="text-gray-600 text-sm">{skill.description}</p>
        </motion.div>
      ))}
    </MobileCollapsible>
  );
}
