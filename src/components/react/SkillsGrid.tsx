"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Cog,
  Users,
  BarChart3,
  Wallet,
  GitBranch
} from "lucide-react";

const skills = [
  {
    icon: MessageSquare,
    title: "Chatbots",
    description: "Asistentes virtuales inteligentes que atienden a tus clientes 24/7",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Cog,
    title: "Automatizaciones de procesos",
    description: "Optimiza tus operaciones eliminando tareas repetitivas",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    icon: Users,
    title: "Automatización de RH",
    description: "Agiliza contrataciones, onboarding y gestión de talento",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: BarChart3,
    title: "Automatización de CRM",
    description: "Potencia tus ventas con seguimiento automático de leads",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Wallet,
    title: "Automatización financiera",
    description: "Control de gastos, facturación y reportes sin esfuerzo",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: GitBranch,
    title: "Workflows",
    description: "Flujos de trabajo personalizados que conectan todas tus herramientas",
    className: "md:col-span-2 md:row-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function SkillsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-3"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          variants={itemVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className={`bg-white border border-primary-200 rounded-xl p-5 hover:border-primary-400 hover:shadow-lg transition-colors ${skill.className}`}
        >
          <skill.icon className="w-6 h-6 text-md-green mb-3" strokeWidth={1.5} />
          <h3 className="font-display text-lg font-semibold text-primary-800 mb-1">
            {skill.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
