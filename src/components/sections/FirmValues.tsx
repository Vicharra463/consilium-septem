"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { ScaleIcon, ShieldCheckIcon, BookIcon, BriefcaseIcon, TrophyIcon, GradIcon } from "@/components/ui/Icons";

const VALUES = [
  { icon: <ScaleIcon size={22} />, title: "Justicia", desc: "Creemos en la justicia como pilar fundamental de una sociedad digna." },
  { icon: <ShieldCheckIcon size={22} />, title: "Integridad", desc: "Actuamos con honestidad absoluta en cada relación profesional." },
  { icon: <BookIcon size={22} />, title: "Excelencia", desc: "Buscamos la máxima calidad en cada asesoría, cada escrito, cada estrategia." },
  { icon: <BriefcaseIcon size={22} />, title: "Compromiso", desc: "Su caso es nuestra causa. Nos involucramos con dedicación total." },
  { icon: <TrophyIcon size={22} />, title: "Resultados", desc: "Medimos nuestro éxito por los resultados que obtenemos para usted." },
  { icon: <GradIcon size={22} />, title: "Innovación", desc: "Aplicamos nuevas metodologías y tecnología al servicio del derecho." },
];

export default function FirmValues() {
  return (
    <section style={{ position: "relative", padding: "80px 0", background: "rgba(15, 22, 41, 0.4)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>Nuestros Valores</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>Lo Que Nos </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Define</span>
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {VALUES.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.06}>
              <div style={{
                padding: "28px", borderRadius: "14px",
                background: "rgba(11, 17, 32, 0.85)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,168,76,0.06)",
                display: "flex", alignItems: "flex-start", gap: "16px",
                transition: "border-color 0.3s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}>
                <div style={{ width: 44, height: 44, borderRadius: "10px", flexShrink: 0, background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "16px", fontWeight: 600, color: "#F8F9FA", marginBottom: "6px" }}>{v.title}</h3>
                  <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
