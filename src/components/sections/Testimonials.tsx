"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TESTIMONIALS = [
  {
    name: "María Fernández",
    role: "Empresaria, Sector Comercial",
    text: "Consilium Septem no solo resolvió mi caso mercantil, sino que anticipó riesgos que yo ni siquiera había considerado. Su visión estratégica transformó una amenaza en una oportunidad de negocio. El trato personal es excepcional.",
    rating: 5,
  },
  {
    name: "Roberto Campos",
    role: "Director de RRHH, Empresa Industrial",
    text: "Llevamos 3 años trabajando con su área laboral. Cada consulta, cada convenio, cada conflicto ha sido manejado con una profesionalidad impecable. Son parte fundamental de nuestro equipo directivo.",
    rating: 5,
  },
  {
    name: "Laura Gutiérrez",
    role: "Particular, Derecho de Familia",
    text: "En un momento muy difícil de mi vida, encontré en la Dra. Villareal no solo una abogada brillante, sino alguien que realmente se importó por mi situación. El resultado fue mejor de lo que esperaba.",
    rating: 5,
  },
  {
    name: "Carlos Medina",
    role: "CEO, Startup Tecnológica",
    text: "Para una empresa en crecimiento, tener asesoría tributaria de primer nivel es crítico. El Dr. Contreras nos ha permitido crecer con seguridad fiscal. Su conocimiento del sector tech es notable.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section style={{ position: "relative", padding: "96px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>Testimonios</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>Lo Que Dicen </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Nuestros Clientes</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Testimonial card */}
        <div style={{ position: "relative", minHeight: "280px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: "clamp(28px, 5vw, 48px)",
                borderRadius: "16px",
                background: "rgba(11, 17, 32, 0.85)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,168,76,0.08)",
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div style={{ position: "absolute", top: "20px", left: "28px", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "72px", color: "rgba(201,168,76,0.1)", lineHeight: 1 }}>"</div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(16px, 2.5vw, 20px)", color: "#CBD5E1", lineHeight: 1.7, marginBottom: "28px", fontStyle: "italic" }}>
                {TESTIMONIALS[current].text}
              </p>

              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "16px", fontWeight: 600, color: "#F8F9FA", marginBottom: "4px" }}>{TESTIMONIALS[current].name}</div>
                <div style={{ fontSize: "13px", color: "#C9A84C" }}>{TESTIMONIALS[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 28 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer",
              background: i === current ? "#C9A84C" : "rgba(201,168,76,0.2)",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
