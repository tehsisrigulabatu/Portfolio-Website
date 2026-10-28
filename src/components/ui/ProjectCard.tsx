"use client";

import React from "react";

import { Project } from "@/components/data/portfolio";
import { motion } from "framer-motion";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

export const ProjectCard = React.memo(function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#ffffff] rounded-2xl overflow-hidden border border-[#4f2b1f] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden flex-shrink-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-[#838f58] text-sm mb-4 line-clamp-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium text-[#838f58] bg-[#f9c6d4] px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 text-sm text-[#838f58] hover:text-primary transition-colors"
            >
              <TbExternalLink size={16} /> Link
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
});