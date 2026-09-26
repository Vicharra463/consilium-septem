"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon } from "@/components/ui/Icons";
import CourtroomScene from "@/components/3d/CourtroomScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0.3 }, { y: -30, opacity: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "center center", scrub: 1.2 } });
    }
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, { y: 35, opacity: 0 }, { y: -15, opacity: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "center center", scrub: 1.8 } });
    }
    if (badgeRef.current) {
      gsap.fromTo(badgeRef.current, { y: 25, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "60% center", scrub: 1 } });
    }
    if (statsRef.current) {
      gsap.fromTo(statsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "20% bottom", end: "center center", scrub: 2 } });
    }
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <section ref={sectionRef} style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Very subtle overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(11, 17, 32, 0.25)" }} />
      </div>

      {/* Gold glow */}
      <div style={{ position: "absolute", top: "50%", left: "35%", transform: "translate(-50%, -50%)", width: "400px", height: "300px", borderRadius: "50%", background: "rgba(201,168,76,0.04)", filter: "blur(80px)", zIndex: 1, pointerEvents: "none" }} />

      {/* Main content — two columns */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "100px 24px 60px", display: "flex", alignItems: "center", gap: "40px" }} className="hero-grid">

        {/* LEFT — 3D Courtroom */}
        <div style={{ flex: "1 1 50%", height: "480px", position: "relative" }} className="hero-3d">
          <CourtroomScene />
        </div>

        {/* RIGHT — Text */}
        <div style={{ flex: "1 1 50%", maxWidth: "500px" }} className="hero-text">
          <div ref={badgeRef}>
            <motion.div variants={reveal} initial="hidden" animate="visible" custom={0}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 20px", borderRadius: "999px", background: "rgba(11, 17, 32, 0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(201, 168, 76, 0.12)", marginBottom: "28px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A84C", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C" }}>Desde 2024 — Siete Expertos, Una Visión</span>
            </motion.div>
          </div>

          <h1 ref={titleRef} style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 700, lineHeight: 1.05, marginBottom: "20px" }}>
            <span style={{ color: "#F8F9FA" }}>El Consejo de</span><br />
            <span style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8D48B 40%, #C9A84C 60%, #A68A3E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Excelencia Legal</span>
          </h1>

          <p ref={subtitleRef} style={{ fontSize: "clamp(14px, 1.6vw, 16px)", color: "#CBD5E1", lineHeight: 1.75, marginBottom: "32px" }}>
            Siete profesionales distinguidos unidos bajo un mismo compromiso: defender sus derechos con la rigurosidad, experiencia y dedicación que su caso merece.
          </p>

          <motion.div variants={reveal} initial="hidden" animate="visible" custom={3}
            style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
            <a href="/servicios" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", fontSize: "13px", fontWeight: 600, background: "#C9A84C", color: "#0B1120", borderRadius: "10px", textDecoration: "none", boxShadow: "0 4px 20px rgba(201,168,76,0.25)" }}>
              Nuestros Servicios <ArrowRightIcon size={15} />
            </a>
            <a href="/equipo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", fontSize: "13px", fontWeight: 600, background: "transparent", color: "#C9A84C", borderRadius: "10px", border: "1px solid rgba(201, 168, 76, 0.35)", textDecoration: "none" }}>
              Conocer al Equipo
            </a>
          </motion.div>

          <div ref={statsRef} style={{ display: "flex", gap: "36px" }}>
            {[
              { value: "7", label: "Expertos" },
              { value: "50+", label: "Años de Experiencia" },
              { value: "500+", label: "Casos Ganados" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#C9A84C", marginBottom: "2px" }}>{stat.value}</div>
                <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#64748B" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
        style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 22, height: 36, borderRadius: 11, border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 7 }}>
          <div style={{ width: 2.5, height: 7, borderRadius: 2, background: "#C9A84C" }} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 900px) {
          .hero-grid { flex-direction: column !important; }
          .hero-3d { min-height: 320px !important; order: -1; }
          .hero-text { max-width: 100% !important; text-align: center; }
        }
      `}</style>
    </section>
  );
}
