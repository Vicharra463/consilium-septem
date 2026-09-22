"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ScaleIcon, ShieldCheckIcon, BookIcon, BriefcaseIcon, TaxIcon, ChevronRightIcon, ArrowRightIcon } from "@/components/ui/Icons";

const ICON_MAP: Record<string, React.ReactNode> = {
  civil: <ScaleIcon size={30} />,
  penal: <ShieldCheckIcon size={30} />,
  constitucional: <BookIcon size={30} />,
  laboral: <BriefcaseIcon size={30} />,
  tributario: <TaxIcon size={30} />,
};

const SERVICES = [
  {
    id: "civil", title: "Derecho Civil",
    desc: "Nuestro equipo de derecho civil brinda asesoramiento completo en todas las ramas del derecho privado. Desde la redacción y negociación de contratos complejos hasta la resolución de conflictos familiares y sucesorios, actuamos con la rigurosidad y sensibilidad que cada caso requiere.",
    highlights: ["Contratos civiles y mercantiles", "Derecho de familia y sucesiones", "Responsabilidad civil y daños", "Mediación y resolución de conflictos", "Propiedad intelectual"],
  },
  {
    id: "penal", title: "Derecho Penal",
    desc: "La defensa penal requiere experiencia, preparación y un conocimiento profundo del sistema de justicia penal. Nuestro equipo cuenta con una amplia trayectoria en la defensa de clientes en procesos penales de alta complejidad.",
    highlights: ["Defensa en procesos penales", "Delitos económicos y corporativos", "Derecho penal internacional", "Acción de tutela y habeas corpus", "Medidas cautelares y sustitutivas"],
  },
  {
    id: "constitucional", title: "Derecho Constitucional",
    desc: "El derecho constitucional es la base de todo el ordenamiento jurídico. Nuestros especialistas tienen una destacada trayectoria en la interposición y seguimiento de acciones de tutela, habeas corpus y acciones de inconstitucionalidad.",
    highlights: ["Acciones de tutela y habeas corpus", "Habeas data y acción popular", "Control de constitucionalidad", "Derechos fundamentales y DDHH", "Contencioso administrativo"],
  },
  {
    id: "laboral", title: "Derecho Laboral",
    desc: "El derecho laboral requiere un equilibrio entre la protección de los derechos de los trabajadores y las necesidades operativas de las empresas. Asesoramos a ambos sectores en la correcta estructuración de relaciones laborales.",
    highlights: ["Contratos y convenios colectivos", "Seguridad social y jubilaciones", "Despido e indemnizaciones", "Seguridad e higiene laboral", "Conflictos sindicales"],
  },
  {
    id: "tributario", title: "Derecho Tributario",
    desc: "El derecho tributario es una de las áreas más dinámicas del ordenamiento jurídico. Nuestro equipo asesora en la optimización de la carga fiscal y en la defensa frente a actuaciones de la administración tributaria.",
    highlights: ["Planificación y optimización fiscal", "Defensa en auditorías tributarias", "Recursos administrativos", "Impuestos internacionales", "Fiscalidad de sociedades"],
  },
];

export default function ServiciosPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  }, []);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "16px", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)" }}
            >
              Nuestros Servicios
            </motion.span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, marginBottom: "20px" }}>
              <span style={{ color: "#F8F9FA" }}>Asesoría Legal </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Integral</span>
            </h1>
            <p style={{ color: "#64748B", fontSize: "16px", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Gama completa de servicios legales respaldados por especialistas de primer nivel.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {SERVICES.map((s, i) => (
            <div key={s.id} id={s.id} style={{ scrollMarginTop: "100px" }}>
              <AnimatedSection delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    borderRadius: "16px", overflow: "hidden",
                    background: "rgba(11, 17, 32, 0.85)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(201, 168, 76, 0.06)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }} />
                  <div style={{ padding: "clamp(24px, 4vw, 40px)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "24px" }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: "14px", flexShrink: 0,
                        background: "rgba(201,168,76,0.06)",
                        border: "1px solid rgba(201,168,76,0.1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {ICON_MAP[s.id]}
                      </div>
                      <div>
                        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#F8F9FA", marginBottom: "8px" }}>{s.title}</h2>
                        <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #C9A84C, transparent)", borderRadius: 1 }} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "32px" }} className="service-grid">
                      <p style={{ color: "#CBD5E1", fontSize: "15px", lineHeight: 1.75 }}>{s.desc}</p>
                      <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "12px", padding: "20px", border: "1px solid rgba(255,255,255,0.04)" }}>
                        <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "16px" }}>Áreas de Actuación</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                          {s.highlights.map((h, j) => (
                            <li key={j} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94A3B8", fontSize: "13px" }}>
                              <ChevronRightIcon size={10} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ marginTop: "64px", padding: "clamp(32px, 5vw, 56px)", borderRadius: "16px", background: "rgba(11, 17, 32, 0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.08)", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#F8F9FA", marginBottom: "12px" }}>¿Necesita Asesoría Legal?</h3>
            <p style={{ color: "#64748B", marginBottom: "28px", fontSize: "15px" }}>Contáctenos para una consulta confidencial sin compromiso.</p>
            <a href="#contacto" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 28px", fontSize: "14px", fontWeight: 600,
              background: "#C9A84C", color: "#0B1120", borderRadius: "10px",
              textDecoration: "none", boxShadow: "0 4px 20px rgba(201,168,76,0.2)",
            }}>
              Solicitar Consulta
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </AnimatedSection>
      </div>
      <style>{`@media (max-width: 768px) { .service-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
