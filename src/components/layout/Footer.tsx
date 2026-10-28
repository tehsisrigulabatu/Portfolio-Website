"use client";
import { useState, useEffect } from "react";
import { PortfolioData } from "@/components/data/portfolio";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-[#efcedb]/25 py-7 border-t border-primary">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-[#4f2b1f] text-sm">
            &copy; 2026 {PortfolioData.name} All rights
            reserved.
          </p>
          <p className="text-[#4f2b1f] text-xs mt-1">
            Built with &#10084; 
          </p>
        </div>

        <SocialIcons variant="footer" />
      </div>
    </footer>
  );
}