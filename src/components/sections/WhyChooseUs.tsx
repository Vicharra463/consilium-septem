"use client";

import { ScaleIcon, ShieldCheckIcon, BookIcon, TrophyIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";

const REASONS = [
  { num: "01", icon: <ScaleIcon size={24} />, title: "Experiencia Combinada", desc: "Más de 50 años de experiencia conjunta en las áreas más complejas del derecho." },
  { num: "02", icon: <ShieldCheckIcon size={24} />, title: "Enfoque Estratégico", desc: "No solo resolvemos problemas, anticipamos escenarios con visión a largo plazo." },
  { num: "03", icon: <BookIcon size={24} />, title: "Confidencialidad Absoluta", desc: "Su caso se maneja con la máxima discreción y profesionalismo." },
  { num: "04", icon: <TrophyIcon size={24} />, title: "Resultados Comprobados", desc: "Una tasa de éxito que nos respalda en cada caso que asumimos." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ position: "relative", padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>¿Por Qué Nosotros?</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700 }}>
              <span style={{ color: "#F8F9FA" }}>La Diferencia </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Consilium Septem</span>
            </h2>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {REASONS.map((r, i) => (
            <AnimatedSection key={r.num} delay={i * 0.08}>
              <div style={{ padding: "28px", borderRadius: "14px", background: "rgba(11,17,32,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.06)", height: "100%", transition: "border-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "12px", flexShrink: 0, background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {r.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "17px", fontWeight: 600, color: "#F8F9FA", marginBottom: "6px" }}>{r.title}</h3>
                    <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.6 }}>{r.desc}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
