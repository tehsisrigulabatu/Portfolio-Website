"use client";

import React from "react";

import { PortfolioData } from "@/components/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { SiAlwaysdata } from "react-icons/si";
import { TbSpeedboatFilled } from "react-icons/tb";

export const ExperienceSection = React.memo(function ExperienceSection() {
  return (
    <div className="h-full">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey"
        center={false}
      />

      <div className="relative border-l-2 border-[#4f2b1f] ml-4 pl-8 space-y-8">
        {PortfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[45px] top-0 h-6 w-6 bg-secondary [clip-path:path('M12_21.35l-1.45-1.32C5.4_15.36_2_12.28_2_8.5_2_5.42_4.42_3_7.5_3c1.74_0_3.41.81_4.5_2.09C13.09_3.81_14.76_3_16.5_3_19.58_3_22_5.42_22_8.5c0_3.78-3.4_6.86-8.55_11.54L12_21.35z')]" /> 

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-[#fb6f92]">{exp.role}</h3>
              <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 text-[#fb6f92]">
                {exp.company === "Barunastra ITS Research Team" ? (
                    <TbSpeedboatFilled size={18}/>
                ) : (
                    <SiAlwaysdata size={18}/>
                )}
              <span className="font-medium">{exp.company}</span>
            </div>

            <ul className="list-disc list-outside ml-4 space-y-2 text-[#4f2b1f]">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
});