"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { teamMembers } from "@/lib/site-data";

/** Tres destacados del consejo, tomados de la única fuente de verdad. */
const TEAM = teamMembers.slice(0, 3);

export default function TeamPreview() {
  return (
    <section style={{ position: "relative", padding: "80px 0", background: "rgba(15, 22, 41, 0.5)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "12px" }}>Nuestro Consejo</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, marginBottom: "16px" }}>
              <span style={{ color: "#F8F9FA" }}>Los </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Siete Expertos</span>
            </h2>
            <p style={{ color: "#64748B", fontSize: "15px", maxWidth: 480, margin: "0 auto" }}>Profesionales distinguidos, cada uno líder en su campo.</p>
          </div>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {TEAM.map((m, i) => (
            <AnimatedSection key={m.slug} delay={i * 0.1}>
              <Link href={`/equipo/${m.slug}`} style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} style={{
                  borderRadius: "16px", overflow: "hidden", background: "rgba(11,17,32,0.85)", backdropFilter: "blur(20px)",
                  border: "1px solid rgba(201,168,76,0.06)", transition: "border-color 0.3s", cursor: "pointer",
                }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.06)")}>
                  <div style={{ height: "240px", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #1E293B, #1A1F2E)" }}>
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} de Consilium Septem`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: "center 20%", transition: "transform 0.5s ease" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,17,32,0.8) 0%, rgba(11,17,32,0) 50%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: 14, left: 18, right: 18, pointerEvents: "none" }}>
                      <span style={{ display: "inline-block", fontSize: "11px", color: "#CBD5E1" }}>{m.specialty}</span>
                    </div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#F8F9FA", marginBottom: "4px" }}>{m.name}</h3>
                    <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 500, marginBottom: "10px" }}>{m.role}</p>
                    <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.6 }}>{m.shortBio}</p>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div style={{ textAlign: "center" }}>
            <Link href="/equipo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", fontSize: "13px", fontWeight: 600, background: "transparent", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
              Conocer a Todo el Equipo <ArrowRightIcon size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
