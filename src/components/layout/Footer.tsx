"use client";

import Link from "next/link";
import { ShieldCheckIcon, LocationIcon, PhoneIcon, MailIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/site-data";

const SERVICES = [
  { title: "Derecho Civil", href: "/servicios#civil" },
  { title: "Derecho Penal", href: "/servicios#penal" },
  { title: "Derecho Constitucional", href: "/servicios#constitucional" },
  { title: "Derecho Laboral", href: "/servicios#laboral" },
  { title: "Derecho Tributario", href: "/servicios#tributario" },
];

export default function Footer() {
  return (
    <footer id="contacto" style={{ position: "relative", background: "#0B1120", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", marginBottom: "20px" }}>
              <ShieldCheckIcon size={26} />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "16px", fontWeight: 700 }}>
                <span style={{ color: "#F8F9FA" }}>Consilium </span><span style={{ color: "#C9A84C" }}>Septem</span>
              </span>
            </Link>
            <p style={{ color: "#64748B", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>Siete profesionales distinguidos unidos por la excelencia legal.</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["Li", "Tw", "Fb"].map((s) => (
                <div key={s} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(201,168,76,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", cursor: "pointer", fontSize: "10px", fontWeight: 700, transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#64748B"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"; }}
                >{s}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "20px" }}>Servicios</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {SERVICES.map((s) => (
                <li key={s.href}><Link href={s.href} style={{ color: "#64748B", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#CBD5E1")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                ><ArrowRightIcon size={10} />{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "20px" }}>Firma</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[{ l: "Inicio", h: "/" }, { l: "Servicios", h: "/servicios" }, { l: "Equipo", h: "/equipo" }, { l: "Casos de Éxito", h: "/casos-de-exito" }, { l: "Contacto", h: "/contacto" }].map((item) => (
                <li key={item.h}><Link href={item.h} style={{ color: "#64748B", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#CBD5E1")} onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                ><ArrowRightIcon size={10} />{item.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "20px" }}>Contacto</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px", color: "#64748B", fontSize: "13px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}><LocationIcon size={18} /><span style={{ lineHeight: 1.6 }}>{siteConfig.office.street}<br />{siteConfig.office.city}</span></li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><PhoneIcon size={18} /><span>{siteConfig.office.phone}</span></li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><MailIcon size={18} /><span>{siteConfig.office.email}</span></li>
            </ul>
            <div style={{ marginTop: "18px", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(201,168,76,0.12)", lineHeight: 0, maxWidth: 260 }}>
              <iframe
                title={`Ubicación de ${siteConfig.name} — ${siteConfig.office.city}`}
                src={siteConfig.office.mapEmbedUrl}
                width="100%"
                height={140}
                style={{ border: 0, display: "block", filter: "grayscale(0.35) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p style={{ color: "#475569", fontSize: "12px" }}>© 2025 Consilium Septem. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: "20px", fontSize: "12px", color: "#475569" }}>
            {["Privacidad", "Términos", "Aviso Legal"].map((t) => (
              <span key={t} style={{ cursor: "pointer", transition: "color 0.3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#CBD5E1")} onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
