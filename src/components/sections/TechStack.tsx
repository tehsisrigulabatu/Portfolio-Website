"use client";

import React from "react";

import { PortfolioData } from "@/components/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const SkillCategory = React.memo(function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#efcedb] p-6 rounded-2xl border border-[#4f2b1f] hover:border-primary/50 transition-colors"
    >
      <h3 className="text-xl font-semibold text-[#4f2b1f] mb-4 border-b border-slate-800 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-[#4f2b1f] text-[#efcedb] text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

export const TechStack = React.memo(function TechStack() {
  return (
    <div className="h-full">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I work with"
        center={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SkillCategory title="Tools" skills={PortfolioData.skills.tools} />
        <SkillCategory title="Language" skills={PortfolioData.skills.language} />
        <SkillCategory title="Framework" skills={PortfolioData.skills.framework} />
      </div>
    </div>
  );
});