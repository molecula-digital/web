"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Sparkles,
  BarChart3,
  FileText,
  Briefcase,
  ShoppingCart,
  Receipt,
  Users,
  PenTool,
  ClipboardList,
  Cog,
  Mail,
  Calendar,
  Database,
  Shield,
  Zap,
  MessageSquare,
  Target,
  TrendingUp,
  Layers,
  Search,
  Bell,
  Clock,
  Globe,
  Smartphone,
  CreditCard,
  Truck,
  HeartPulse,
  GraduationCap,
  Building2,
} from "lucide-react";

const useCases = [
  { icon: GitBranch, label: "Workflows" },
  { icon: Sparkles, label: "Personalizacion" },
  { icon: BarChart3, label: "Insights" },
  { icon: FileText, label: "Reportes" },
  { icon: Briefcase, label: "Portafolios" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Receipt, label: "Facturacion" },
  { icon: Users, label: "Recursos Humanos" },
  { icon: PenTool, label: "Copywriting" },
  { icon: ClipboardList, label: "Formularios" },
  { icon: Cog, label: "Procesos" },
  { icon: Mail, label: "Email marketing" },
  { icon: Calendar, label: "Agendamiento" },
  { icon: Database, label: "Data entry" },
  { icon: Shield, label: "Compliance" },
  { icon: Zap, label: "Integraciones" },
  { icon: MessageSquare, label: "Chatbots" },
  { icon: Target, label: "Lead scoring" },
  { icon: TrendingUp, label: "Forecasting" },
  { icon: Layers, label: "Inventarios" },
  { icon: Search, label: "Busqueda" },
  { icon: Bell, label: "Notificaciones" },
  { icon: Clock, label: "Seguimiento" },
  { icon: Globe, label: "Traduccion" },
  { icon: Smartphone, label: "Apps moviles" },
  { icon: CreditCard, label: "Pagos" },
  { icon: Truck, label: "Logistica" },
  { icon: HeartPulse, label: "Bienestar" },
  { icon: GraduationCap, label: "Capacitacion" },
  { icon: Building2, label: "Operaciones" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function UseCasesGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-wrap justify-center gap-3"
    >
      {useCases.map((useCase) => (
        <motion.div
          key={useCase.label}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-primary-200 rounded-full hover:border-md-green hover:shadow-md transition-all cursor-default"
        >
          <useCase.icon className="w-4 h-4 text-md-green" strokeWidth={2} />
          <span className="text-sm font-medium text-primary-700">{useCase.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
