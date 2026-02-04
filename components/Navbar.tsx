"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   Type Definitions
   ============================================ */
interface NavLink {
  href: string;
  label: string;
}

/* ============================================
   Navbar Component
   ============================================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname: string = usePathname();

  const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/prodotti", label: "Prodotti" },
    { href: "/contatti", label: "Contatti" },
  ];

  /* ============================================
     Close menu on outside click
     ============================================ */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /* ============================================
     Check if link is active
     ============================================ */
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ============================================
              Logo
              ============================================ */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl font-bold text-primary transition-transform group-hover:scale-105">
              NCR
            </div>
          </Link>

          {/* ============================================
              Desktop Navigation Menu
              ============================================ */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors group ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* ============================================
              Mobile Menu Toggle Button
              ============================================ */}
          <button
            onClick={(): void => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================
          Mobile Navigation Menu with Animation
          ============================================ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link: NavLink, index: number) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={(): void => setIsOpen(false)}
                    className={`block py-4 text-center text-xl transition-all ${
                      isActive(link.href)
                        ? "bg-surface text-primary font-semibold"
                        : "text-text hover:bg-surface hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
