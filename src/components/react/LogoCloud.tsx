"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "n8n", color: "#EA4B71" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Gemini", color: "#8E75B2" },
  { name: "WhatsApp", color: "#0bac56" },
  { name: "Slack", color: "#4A154B" },
  { name: "Notion", color: "#000000" },
  { name: "Airtable", color: "#18BFFF" },
  { name: "Google Sheets", color: "#34A853" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Gmail", color: "#EA4335" },
  { name: "Mailchimp", color: "#FFE01B" },
  { name: "AWS", color: "#FF9900" },
  { name: "Google Cloud", color: "#4285F4" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export function LogoCloud() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4"
    >
      {logos.map((logo) => (
        <motion.div
          key={logo.name}
          variants={itemVariants}
          className="flex items-center justify-center px-4 py-2 bg-white/50 rounded-lg border border-primary-100 hover:border-primary-200 transition-colors"
        >
          <div
            className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
            style={{ backgroundColor: logo.color }}
          />
          <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
            {logo.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
