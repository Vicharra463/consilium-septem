"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, GradIcon, MailIcon, CalendarIcon } from "@/components/ui/Icons";
import { TeamMember } from "@/lib/site-data";

interface LawyerProfileProps { member: TeamMember; prevMember?: TeamMember; nextMember?: TeamMember; }

export default function LawyerProfile({ member, prevMember, nextMember }: LawyerProfileProps) {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <Link href="/equipo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#64748B", fontSize: "14px", textDecoration: "none", marginBottom: "48px", transition: "color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
          <ArrowLeftIcon size={16} />Volver al Equipo
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", marginBottom: "64px" }} className="profile-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ aspectRatio: "3/4", borderRadius: "16px", overflow: "hidden", background: "linear-gradient(135deg, #1E293B, #1A1F2E)", border: "1px solid rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "absolute", top: 20, right: 20, width: 60, height: 60, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)" }} />
              <div style={{ position: "absolute", bottom: 30, left: 15, width: 40, height: 40, borderRadius: "8px", border: "1px solid rgba(201,168,76,0.05)", transform: "rotate(20deg)" }} />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: 88, height: 88, borderRadius: "50%", background: "rgba(201,168,76,0.08)", border: "2px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "38px", color: "#C9A84C" }}>{member.name.split(" ").pop()?.[0]}</span>
                </div>
                <span style={{ fontSize: "12px", color: "#64748B" }}>{member.specialty}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "8px", display: "block" }}>{member.role}</span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: "8px", lineHeight: 1.1 }}>{member.name}</h1>
            <p style={{ fontSize: "16px", color: "#C9A84C", fontWeight: 500, marginBottom: "20px" }}>{member.specialty}</p>
            <div style={{ width: 40, height: 2, background: "linear-gradient(to right, #C9A84C, transparent)", marginBottom: "20px", borderRadius: 1 }} />
            <p style={{ color: "#CBD5E1", fontSize: "15px", lineHeight: 1.75, marginBottom: "28px" }}>{member.fullBio}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <GradIcon size={16} />
              <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C" }}>Formación Académica</h4>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {member.education.map((edu, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#94A3B8", fontSize: "13px", lineHeight: 1.5 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9A84C", flexShrink: 0, marginTop: 6 }} /><span>{edu}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="#contacto" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", fontSize: "14px", fontWeight: 600, background: "#C9A84C", color: "#0B1120", borderRadius: "10px", textDecoration: "none" }}>
                <CalendarIcon size={16} />Agendar Consulta
              </a>
              <a href={`mailto:${member.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", fontSize: "14px", fontWeight: 500, background: "transparent", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "10px", textDecoration: "none" }}>
                <MailIcon size={16} />{member.email}
              </a>
            </div>
          </motion.div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          {prevMember ? (
            <Link href={`/equipo/${prevMember.slug}`} style={{ color: "#64748B", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
              <ArrowLeftIcon size={16} />
              <div style={{ textAlign: "left" }}><span style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em" }}>Anterior</span><span style={{ fontSize: "13px", fontWeight: 500 }}>{prevMember.name}</span></div>
            </Link>
          ) : <div />}
          {nextMember ? (
            <Link href={`/equipo/${nextMember.slug}`} style={{ color: "#64748B", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", textAlign: "right", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}>
              <div><span style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em" }}>Siguiente</span><span style={{ fontSize: "13px", fontWeight: 500 }}>{nextMember.name}</span></div>
              <ArrowRightIcon size={16} />
            </Link>
          ) : <div />}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .profile-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </div>
  );
}
