"use client";

import Link from "next/link";
import { useState } from "react";
import { TrophyIcon, ArrowRightIcon } from "@/components/ui/Icons";
import type { successCases } from "@/lib/success-cases";

export default function CaseCard({ c }: { c: (typeof successCases)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/casos-de-exito/${c.slug}`} style={{ textDecoration: "none" }}>
      <article
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          background: "rgba(11,17,32,0.85)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${hovered ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.06)"}`,
          transition: "border-color 0.3s",
          cursor: "pointer",
          display: "block",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ padding: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", padding: "5px 12px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)" }}>
              <TrophyIcon size={13} />{c.label}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#94A3B8", padding: "5px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.07)" }}>
              {c.status}
            </span>
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#F8F9FA", marginBottom: "14px", lineHeight: 1.25 }}>
            {c.title}
          </h2>

          <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", margin: "0 0 18px", padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div>
              <dt style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#64748B", marginBottom: "4px" }}>Cliente</dt>
              <dd style={{ margin: 0, fontSize: "14px", color: "#CBD5E1" }}>{c.client}</dd>
            </div>
            <div>
              <dt style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#64748B", marginBottom: "4px" }}>Área de Práctica</dt>
              <dd style={{ margin: 0, fontSize: "14px", color: "#CBD5E1" }}>{c.practiceArea}</dd>
            </div>
          </dl>

          <p style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.7, marginBottom: "20px" }}>{c.excerpt}</p>

          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 600, color: "#C9A84C" }}>
            Leer el análisis completo <ArrowRightIcon size={14} />
          </span>
        </div>
      </article>
    </Link>
  );
}