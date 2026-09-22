"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TEAM = [
  { name: "Dr. Carlos Mendoza", slug: "dr-carlos-mendoza", role: "Socio Fundador", specialty: "Derecho Civil y Contractual", short: "Fundador con más de 25 años de trayectoria.", initial: "M" },
  { name: "Dra. Ana Villareal", slug: "dr-ana-villareal", role: "Socia Directora", specialty: "Derecho Penal", short: "Especialista en casos de alta complejidad.", initial: "V" },
  { name: "Dr. Ricardo Torres", slug: "dr-ricardo-torres", role: "Socio", specialty: "Derecho Constitucional", short: "Experto en tutela y derechos fundamentales.", initial: "T" },
];

export default function TeamPreview() {
  return (
    <section style={{ position: "relative", padding: "80px 0", background: "rgba(15, 22, 41, 0.5)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>Nuestro Consejo</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>Los </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Siete Expertos</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "15px", maxWidth: 480, margin: "0 auto" }}>Profesionales distinguidos, cada uno líder en su campo.</p>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {TEAM.map((m, i) => (
            <AnimatedSection key={m.slug} delay={i * 0.1}>
              <Link href={`/equipo/${m.slug}`} style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{
                  borderRadius: "16px", overflow: "hidden", background: "rgba(11,17,32,0.85)", backdropFilter: "blur(20px)",
                  border: "1px solid rgba(201,168,76,0.06)", transition: "border-color 0.3s", cursor: "pointer",
                }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}>
                  <div style={{ height: "200px", background: "linear-gradient(135deg, #1E293B, #1A1F2E)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)" }} />
                    <div style={{ position: "absolute", bottom: -10, left: -10, width: 60, height: 60, borderRadius: "12px", border: "1px solid rgba(201,168,76,0.06)", transform: "rotate(15deg)" }} />
                    <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                      <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(201,168,76,0.08)", border: "1.5px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "26px", color: "#C9A84C" }}>{m.initial}</span>
                      </div>
                      <span style={{ fontSize: "11px", color: "#64748B" }}>{m.specialty}</span>
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#F8F9FA", marginBottom: "4px" }}>{m.name}</h3>
                    <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 500, marginBottom: "10px" }}>{m.role}</p>
                    <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.6 }}>{m.short}</p>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div style={{ textAlign: "center" }}>
            <Link href="/equipo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", fontSize: "13px", fontWeight: 600, background: "transparent", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
              Conocer a Todo el Equipo <ArrowRightIcon size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
