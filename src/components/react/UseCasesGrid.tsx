"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
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
import { MobileCollapsible } from "./MobileCollapsible";

const useCases = [
  { icon: GitBranch, label: "Workflows" },
  { icon: Sparkles, label: "Personalización" },
  { icon: BarChart3, label: "Insights" },
  { icon: FileText, label: "Reportes" },
  { icon: Briefcase, label: "Portafolios" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Receipt, label: "Facturación" },
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
  { icon: Search, label: "Búsqueda" },
  { icon: Bell, label: "Notificaciones" },
  { icon: Clock, label: "Seguimiento" },
  { icon: Globe, label: "Traducción" },
  { icon: Smartphone, label: "Apps móviles" },
  { icon: CreditCard, label: "Pagos" },
  { icon: Truck, label: "Logística" },
  { icon: HeartPulse, label: "Bienestar" },
  { icon: GraduationCap, label: "Capacitación" },
  { icon: Building2, label: "Operaciones" },
];

// Seeded random for consistent values between renders
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function UseCasesGrid() {
  const prefersReducedMotion = useReducedMotion();

  // Generate random values once per mount, consistent across renders
  const itemAnimations = useMemo(
    () =>
      useCases.map((_, i) => {
        const seed = i + 1;
        return {
          initialX: (seededRandom(seed) - 0.5) * 60,
          initialY: (seededRandom(seed * 2) - 0.5) * 40 + 20,
          delay: seededRandom(seed * 3) * 0.15,
          initialRotate: (seededRandom(seed * 4) - 0.5) * 12,
        };
      }),
    []
  );

  const renderPill = (
    useCase: (typeof useCases)[0],
    index: number,
    animated: boolean
  ) => {
    const baseClasses =
      "flex items-center gap-2 px-4 py-2.5 bg-white border border-primary-200 rounded-full hover:border-md-green hover:shadow-md transition-all cursor-default";

    if (!animated || prefersReducedMotion) {
      return (
        <div key={useCase.label} className={baseClasses}>
          <useCase.icon className="w-4 h-4 text-md-green" strokeWidth={2} />
          <span className="text-sm font-medium text-primary-700">
            {useCase.label}
          </span>
        </div>
      );
    }

    const anim = itemAnimations[index];
    return (
      <motion.div
        key={useCase.label}
        initial={{
          opacity: 0,
          scale: 0.3,
          x: anim.initialX,
          y: anim.initialY,
          rotate: anim.initialRotate,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: anim.delay,
          },
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.08,
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} transition-colors`}
      >
        <useCase.icon className="w-4 h-4 text-md-green" strokeWidth={2} />
        <span className="text-sm font-medium text-primary-700">
          {useCase.label}
        </span>
      </motion.div>
    );
  };

  return (
    <MobileCollapsible
      mobileLimit={9}
      mobileClassName="flex flex-wrap justify-center gap-2"
      desktopClassName="flex flex-wrap justify-center gap-3"
    >
      {useCases.map((useCase, i) => renderPill(useCase, i, true))}
    </MobileCollapsible>
  );
}
