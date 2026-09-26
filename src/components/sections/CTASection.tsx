"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTASection() {
  return (
    <section style={{ position: "relative", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, borderRadius: "50%", background: "rgba(201,168,76,0.03)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 600, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <AnimatedSection>
          <div style={{ width: 48, height: 1, background: "#C9A84C", margin: "0 auto 32px" }} />
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.15 }}>
            <span style={{ color: "#F8F9FA" }}>Su Caso Merece</span>
            <br />
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Atención Premium</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "16px", maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Contáctenos para una consulta confidencial. Evaluaremos su caso y diseñaremos la mejor estrategia legal.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
            <Link href="/contacto" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 28px", fontSize: "14px", fontWeight: 600,
              background: "#C9A84C", color: "#0B1120", borderRadius: "10px",
              textDecoration: "none", boxShadow: "0 4px 20px rgba(201,168,76,0.25)",
            }}>
              Solicitar Consulta
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a href="tel:+5117654321" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 28px", fontSize: "14px", fontWeight: 500,
              background: "transparent", color: "#CBD5E1", borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none",
            }}>
              📞 +51 (01) 765-4321
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px", fontSize: "12px", color: "#64748B" }}>
            {["Consulta Confidencial", "Respuesta en 24h", "Sin Compromiso"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C9A84C" }} />
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
