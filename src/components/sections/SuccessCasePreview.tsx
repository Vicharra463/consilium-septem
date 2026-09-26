"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TrophyIcon, ArrowRightIcon, GavelIcon, BriefcaseIcon } from "@/components/ui/Icons";
import { successCases } from "@/lib/success-cases";

/** Destacado del caso de éxito en la home. */
const caso = successCases[0];

export default function SuccessCasePreview() {
  if (!caso) return null;

  return (
    <section style={{ position: "relative", padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>Resultados</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>Casos de </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Éxito</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "15px", maxWidth: 500, margin: "0 auto" }}>Resoluciones documentadas, con la estrategia jurídica completa.</p>
          </div>

          <Link href={`/casos-de-exito/${caso.slug}`} style={{ textDecoration: "none" }}>
            <article style={{
              borderRadius: "18px", overflow: "hidden", background: "linear-gradient(135deg, rgba(201,168,76,0.07), rgba(11,17,32,0.9))",
              border: "1px solid rgba(201,168,76,0.15)", transition: "border-color 0.3s", cursor: "pointer", display: "block", padding: "clamp(28px, 4vw, 44px)",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px", flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.3)", background: "rgba(11,17,32,0.5)" }}>
                  <TrophyIcon size={13} />{caso.label}
                </span>
                <span style={{ fontSize: "12px", color: "#94A3B8" }}>{caso.status}</span>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3.4vw, 34px)", fontWeight: 700, color: "#F8F9FA", lineHeight: 1.25, marginBottom: "16px" }}>
                {caso.title}
              </h3>

              <p style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.75, marginBottom: "24px", maxWidth: 760 }}>{caso.excerpt}</p>

              <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", marginBottom: "26px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
                  <BriefcaseIcon size={15} />{caso.client}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
                  <GavelIcon size={15} />{caso.practiceArea}
                </span>
              </div>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 600, color: "#C9A84C" }}>
                Leer el análisis completo <ArrowRightIcon size={14} />
              </span>
            </article>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
