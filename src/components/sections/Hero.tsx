"use client";

import React from "react";
import { PortfolioData } from "@/components/data/portfolio";
import { motion } from "framer-motion";
import { TbArrowRight, TbDownload } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const HeroSection = React.memo(function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-start relative pt-24 md:pt-30 pb-16 w-full"
    >
      {/* Background Gradients */}
      <div className="absolute -top-10 -left-10 w-72 h-72 md:w-96 md:h-96 bg-primary rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 md:w-96 md:h-96 bg-secondary rounded-full blur-3xl -z-10 opacity-50" />

      <div className="container mx-auto px-4 xl:px-24 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left w-full flex flex-col items-center lg:items-start mx-auto"
          >
            <p className="text-secondary font-medium mb-4 tracking-wide">
              Hi, I am
            </p>
            <h1 className="typing-effect text-4xl sm:text-5xl md:text-5xl font-bold text-[#48281c] mb-6 bg-gradient-to-r from-[#fb6f92] to-[#ffc2d1] bg-clip-text text-transparent">
              {PortfolioData.name}
            </h1>
            <h2 className="text-2xl md:text-1xl text-[#4f2b1f] mb-6 bg-gradient-to-r from-[#4f2b1f] to-[#838f58] bg-clip-text text-transparent font-semibold">
              {PortfolioData.role}
            </h2>

            <p className="text-lg text-[#4f2b1f] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify lg:text-left">
              {PortfolioData.about}
            </p>

            <div className="flex flex-col items-center lg:items-start gap-8">
              {/* Social Media Icons */}
              <SocialIcons variant="default"/>

              {/* Buttons */}
              <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#projects"
                  onClick={handleScrollToProjects}
                  className="w-42 px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                >
                  Projects <TbArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group perspective-1000">
              {/* Deep Glow Background */}
              <div className="absolute inset-6 bg-gradient-to-tr from-secondary to-secondary rounded-full rotate-6 scale-125 blur-3xl opacity-65 group-hover:opacity-60 transition-all duration-500" />

              {/* Second Layer (Rotated Card) */}
              <div className="absolute inset-6 bg-primary backdrop-blur-sm rounded-full rotate-3 border border-accent group-hover:rotate-6 transition-transform duration-500" />

              {/* Main Image Container with Gradient Border */}
              <div className="relative w-full h-full rounded-full p-[1px] bg-gradient-to-br from-secondary to-secondary -rotate-3 group-hover:rotate-0 transition-transform-color duration-500 shadow-5xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-primary relative">
                  {/* Use a placeholder if image fails or is missing */}
                  <div className="w-full h-full flex items-center justify-center text-primary bg-accent relative">
                    <Image
                      src={PortfolioData.profileImage}
                      alt={PortfolioData.name}
                      fill
                      sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
});