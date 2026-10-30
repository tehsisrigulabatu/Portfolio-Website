"use client";

import { useEffect, useState } from 'react';
import { PortfolioData } from '@/components/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function ProjectsSection() {

  const [projects, setProjects] = useState(PortfolioData.projects);

  useEffect(() => {
    fetch('http://localhost:8000/projects')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data projects');
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.warn('API projects mati/Vercel, aman pakai data lokal:', err);
      });
  }, []);

  return (
    <section id="projects" className="pt-10 pb-20">
      <div className="container mx-auto px-4 xl:px-24">
        <SectionHeading title="Featured Projects" subtitle="Some things I've built" center={false} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PortfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}