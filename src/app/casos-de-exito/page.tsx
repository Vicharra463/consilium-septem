import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CalendarIcon } from "@/components/ui/Icons";
import CaseCard from "@/components/ui/CaseCard";
import { successCases } from "@/lib/success-cases";

export const metadata: Metadata = {
  title: "Casos de Éxito — Consilium Septem",
  description:
    "Resoluciones obtenidas por Consilium Septem: antinomia normativa, jerarquía normativa y defensa de startups frente a sanciones administrativas.",
};

export default function CasosDeExitoPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "16px", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)" }}>
              Resultados
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, marginBottom: "20px" }}>
              <span style={{ color: "#F8F9FA" }}>Casos de </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Éxito</span>
            </h1>
            <p style={{ color: "#64748B", fontSize: "16px", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Resoluciones obtenidas por el bufete, documentadas con su estrategia jurídica y su resultado.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {successCases.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.08}>
              <CaseCard c={c} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: "center", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <p style={{ color: "#64748B", fontSize: "15px", marginBottom: "20px" }}>
              ¿Tu caso presenta un conflicto normativo similar? Analímoslo.
            </p>
            <Link href="/contacto" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", fontSize: "13px", fontWeight: 600, background: "#C9A84C", color: "#0B1120", borderRadius: "10px", textDecoration: "none" }}>
              <CalendarIcon size={16} />Agendar Consulta
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}