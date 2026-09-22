"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TEAM = [
  { name: "Dr. Carlos Mendoza", slug: "dr-carlos-mendoza", role: "Socio Fundador", specialty: "Derecho Civil y Contractual", short: "Fundador con más de 25 años de trayectoria.", initial: "M" },
  { name: "Dra. Ana Villareal", slug: "dr-ana-villareal", role: "Socia Directora", specialty: "Derecho Penal", short: "Especialista en casos de alta complejidad.", initial: "V" },
  { name: "Dr. Ricardo Torres", slug: "dr-ricardo-torres", role: "Socio", specialty: "Derecho Constitucional", short: "Experto en tutela y derechos fundamentales.", initial: "T" },
  { name: "Dra. María Estrada", slug: "dr-maria-estrada", role: "Socia", specialty: "Derecho Laboral", short: "Referente en derecho laboral.", initial: "E" },
  { name: "Dr. Javier Contreras", slug: "dr-javier-contreras", role: "Socio", specialty: "Derecho Tributario", short: "Especialista en planificación fiscal.", initial: "C" },
  { name: "Dra. Lucía Herrera", slug: "dr-lucia-herrera", role: "Socia Asociada", specialty: "Derecho Civil y Familia", short: "Especialista en derecho de familia.", initial: "H" },
  { name: "Dr. Diego Salazar", slug: "dr-diego-salazar", role: "Socio Asociado", specialty: "Derecho Laboral", short: "Experto en compliance laboral.", initial: "S" },
];

export default function EquipoPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "16px", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)" }}>Nuestro Consejo</motion.span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, marginBottom: "20px" }}>
              <span style={{ color: "#F8F9FA" }}>Los </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Siete Expertos</span>
            </h1>
            <p style={{ color: "#64748B", fontSize: "16px", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>Profesionales distinguidos, cada uno líder en su área.</p>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {TEAM.map((m, i) => (
            <AnimatedSection key={m.slug} delay={i * 0.06}>
              <Link href={`/equipo/${m.slug}`} style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{
                  borderRadius: "16px", overflow: "hidden", background: "rgba(11,17,32,0.85)", backdropFilter: "blur(20px)",
                  border: "1px solid rgba(201,168,76,0.06)", transition: "border-color 0.3s", cursor: "pointer",
                }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}>
                  <div style={{ height: "180px", background: "linear-gradient(135deg, #1E293B, #1A1F2E)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: -15, right: -15, width: 60, height: 60, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)" }} />
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(201,168,76,0.08)", border: "1.5px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
                      <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "24px", color: "#C9A84C" }}>{m.initial}</span>
                    </div>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "17px", fontWeight: 600, color: "#F8F9FA", marginBottom: "2px" }}>{m.name}</h3>
                    <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 500, marginBottom: "8px" }}>{m.role}</p>
                    <span style={{ display: "inline-block", fontSize: "10px", padding: "3px 10px", borderRadius: 999, background: "rgba(201,168,76,0.06)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.12)", marginBottom: "10px" }}>{m.specialty}</span>
                    <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.5 }}>{m.short}</p>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
