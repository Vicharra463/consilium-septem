"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheckIcon, MenuIcon, CloseIcon, ChevronRightIcon } from "@/components/ui/Icons";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          padding: isScrolled ? "10px 0" : "18px 0",
          background: isScrolled ? "rgba(11, 17, 32, 0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(24px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(201, 168, 76, 0.08)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <nav style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <ShieldCheckIcon size={34} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 700, color: "#F8F9FA" }}>Consilium</span>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 700, color: "#C9A84C" }}>Septem</span>
            </div>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }} className="hidden lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href === "#contacto" && pathname === "/");
              return (
                <Link key={item.href} href={item.href} style={{
                  padding: "8px 16px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.03em",
                  color: isActive ? "#C9A84C" : "#94A3B8",
                  textDecoration: "none", transition: "color 0.3s", position: "relative",
                }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#F8F9FA"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#94A3B8"; }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div layoutId="nav-ind" style={{ position: "absolute", bottom: 0, left: 16, right: 16, height: 2, background: "#C9A84C", borderRadius: 1 }} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                  )}
                </Link>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#contacto" className="hidden md:inline-flex" style={{
              padding: "10px 22px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const,
              color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", background: "rgba(201,168,76,0.06)",
              textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "all 0.3s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
            >Contactar <ChevronRightIcon size={12} /></a>

            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden" style={{
              display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40,
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, cursor: "pointer",
            }}>
              {isMobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: "fixed", inset: 0, zIndex: 40 }}>
            <div onClick={() => setIsMobileOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(11,17,32,0.8)", backdropFilter: "blur(4px)" }} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 280, background: "rgba(11,17,32,0.98)", backdropFilter: "blur(24px)", padding: "90px 28px 28px", borderLeft: "1px solid rgba(201,168,76,0.1)" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (item.href === "#contacto" && pathname === "/");
                  return (
                    <Link key={item.href} href={item.href} style={{
                      padding: "14px 12px", fontSize: "16px", fontWeight: 500,
                      color: isActive ? "#C9A84C" : "#CBD5E1",
                      textDecoration: "none", borderRadius: 8,
                      background: isActive ? "rgba(201,168,76,0.08)" : "transparent",
                    }}>{item.label}</Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
