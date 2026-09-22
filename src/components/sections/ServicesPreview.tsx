"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ScaleIcon, ShieldCheckIcon, BookIcon, BriefcaseIcon, TaxIcon, ArrowRightIcon } from "@/components/ui/Icons";

const SERVICES = [
  { id: "civil", title: "Derecho Civil", icon: <ScaleIcon size={28} />, short: "Asesoría integral en contratos, obligaciones, derecho de familia, sucesiones y responsabilidad civil." },
  { id: "penal", title: "Derecho Penal", icon: <ShieldCheckIcon size={28} />, short: "Defensa penal estratégica en todas las etapas del proceso, desde la investigación hasta el juicio oral." },
  { id: "constitucional", title: "Derecho Constitucional", icon: <BookIcon size={28} />, short: "Protección de derechos fundamentales a través de acciones constitucionales y control de constitucionalidad." },
  { id: "laboral", title: "Derecho Laboral", icon: <BriefcaseIcon size={28} />, short: "Asesoría laboral preventiva y contenciosa para empleadores y trabajadores." },
  { id: "tributario", title: "Derecho Tributario", icon: <TaxIcon size={28} />, short: "Planificación fiscal, defensa en auditorías y litigios tributarios ante organismos estatales." },
];

export default function ServicesPreview() {
  return (
    <section style={{ position: "relative", padding: "80px 0" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>
              Áreas de Práctica
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>Nuestros </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Servicios</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "16px", maxWidth: 520, margin: "0 auto" }}>
              Asesoría legal integral respaldada por especialistas de primer nivel.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 0.08}>
              <Link href={`/servicios#${s.id}`} style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    height: "100%", padding: "28px", borderRadius: "12px",
                    background: "rgba(11, 17, 32, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(201, 168, 76, 0.06)",
                    cursor: "pointer",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}
                >
                  <div style={{ width: 52, height: 52, borderRadius: "12px", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#F8F9FA", marginBottom: "8px" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.6 }}>
                    {s.short}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "16px", color: "#C9A84C", fontSize: "12px", fontWeight: 600 }}>
                    Ver más <ArrowRightIcon size={12} />
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
