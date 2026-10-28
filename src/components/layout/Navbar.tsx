"use client";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { TbMenu2, TbX } from 'react-icons/tb';


const navLinks = [
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const sectionId = link.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = targetId === "experience" ? 75 : 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // element.scrollIntoView({ behavior: "smooth" });
      // Prevent hash from appearing in URL
      window.history.replaceState(null, "", window.location.pathname);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-[#efcedb] backdrop-blur-md border-[#838f58] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Melodia
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  isActive
                    ? "text-[#838f58]"
                    : "text-[#4f2b1f] hover:text-primary"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-secondary hover:[#4f2b1f]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#efcedb] backdrop-blur-lg border-b border-[#4f2b1f]"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-[#4f2b1f] hover:text-secondary"
                  )}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
}