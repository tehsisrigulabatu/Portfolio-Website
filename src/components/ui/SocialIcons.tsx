import React from "react";
import { PortfolioData } from "@/components/data/portfolio";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandX,
  TbBrandInstagram,
  TbBrandMedium,
  TbMail,
} from "react-icons/tb";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Github: TbBrandGithub,
  Linkedin: TbBrandLinkedin,
  Twitter: TbBrandX,
  X: TbBrandX,
  Instagram: TbBrandInstagram,
  Medium: TbBrandMedium,
  Mail: TbMail,
};

interface SocialIconsProps {
  variant?: "default" | "footer";
  className?: string;
}

export function SocialIcons({
  variant = "default",
  className = "",
}: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {PortfolioData.social.map((link) => {
        // Fallback to Mail if icon not found
        const Icon = iconMap[link.icon] || iconMap[link.platform] || TbMail;

        if (variant === "footer") {
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4f2b1f] hover:text-secondary transition-colors"
              aria-label={link.platform}
            >
              <Icon size={22} />
            </a>
          );
        }

        // Default variant (Hero)
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#838b58] flex items-center justify-center text-[#838b58] hover:text-primary hover:border-primary transition-all"
            aria-label={link.platform}
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}