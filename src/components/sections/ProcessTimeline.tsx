"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ScaleIcon, BookIcon, ShieldCheckIcon, TrophyIcon } from "@/components/ui/Icons";

const STEPS = [
  {
    num: "01",
    icon: <ScaleIcon size={28} />,
    title: "Consulta Inicial",
    desc: "Nos reunimos para entender su caso a fondo. Escuchamos, analizamos y evaluamos cada detalle antes de emitir una opinión profesional.",
    duration: "1-2 días",
  },
  {
    num: "02",
    icon: <BookIcon size={28} />,
    title: "Análisis Profundo",
    desc: "Nuestro equipo estudia la documentación, precedentes legales y estrategias aplicables. Cada caso recibe atención meticulosa.",
    duration: "3-5 días",
  },
  {
    num: "03",
    icon: <ShieldCheckIcon size={28} />,
    title: "Estrategia Legal",
    desc: "Diseñamos un plan de acción claro y efectivo. Le explicamos cada paso, cada riesgo y cada alternativa disponible.",
    duration: "1 semana",
  },
  {
    num: "04",
    icon: <TrophyIcon size={28} />,
    title: "Resolución",
    desc: "Ejecutamos la estrategia con la máxima dedicación. Negociamos, litigamos y defendemos sus intereses hasta obtener el mejor resultado.",
    duration: "Según el caso",
  },
];

export default function ProcessTimeline() {
  return (
    <section style={{ position: "relative", padding: "96px 0", background: "rgba(15, 22, 41, 0.4)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent)" }} />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>Nuestro Proceso</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>De la Consulta al </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Resultado</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "15px", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
              Un proceso claro, transparente y orientado a resultados.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: "28px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))" }} className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  {/* Step number */}
                  <div style={{ position: "relative", zIndex: 1, flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "rgba(11,17,32,0.9)", border: "1.5px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, padding: "4px 0" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em" }}>PASO {step.num}</span>
                      <span style={{ fontSize: "11px", color: "#64748B" }}>{step.duration}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "20px", fontWeight: 600, color: "#F8F9FA", marginBottom: "8px" }}>{step.title}</h3>
                    <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.7, maxWidth: 500 }}>{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .timeline-line { left: 27px !important; } }`}</style>
    </section>
  );
}
