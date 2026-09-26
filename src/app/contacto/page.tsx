import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/sections/ContactForm";
import { LocationIcon, PhoneIcon, MailIcon, CalendarIcon, ShieldCheckIcon, ClockIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contacto — Consilium Septem",
  description:
    "Ponete en contacto con Consilium Septem. Contanos tu caso y un integrante del consejo de 7 expertos te responderá a la brevedad.",
};

const CHANNELS = [
  {
    icon: LocationIcon,
    label: "Estudio",
    lines: ["Av. Javier Prado Este 1234, Piso 12", "San Isidro, Lima, Perú"],
  },
  {
    icon: PhoneIcon,
    label: "Teléfono",
    lines: ["+51 (01) 765-4321"],
    href: "tel:+51017654321",
  },
  {
    icon: MailIcon,
    label: "Correo",
    lines: ["contacto@consiliumseptem.com"],
    href: "mailto:contacto@consiliumseptem.com",
  },
  {
    icon: ClockIcon,
    label: "Horario de atención",
    lines: ["Lunes a viernes, 9:00 — 19:00", "Sábados, 9:00 — 13:00"],
  },
];

export default function ContactoPage() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "16px", padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)" }}>
              Consultas
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, marginBottom: "20px" }}>
              <span style={{ color: "#F8F9FA" }}>Ponete en </span>
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B, #A68A3E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Contacto</span>
            </h1>
            <p style={{ color: "#64748B", fontSize: "16px", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Contanos tu caso. Un integrante del consejo revisará tu consulta y te responderá a la brevedad.
            </p>
          </div>
        </AnimatedSection>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: "32px", alignItems: "start" }}>
          <AnimatedSection>
            <div style={{ borderRadius: "18px", background: "rgba(11,17,32,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.08)", padding: "clamp(24px, 4vw, 40px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "26px" }}>
                <CalendarIcon size={18} />
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "22px", fontWeight: 700, color: "#F8F9FA" }}>Solicitá una consulta</h2>
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ borderRadius: "18px", background: "rgba(11,17,32,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.08)", padding: "28px" }}>
                <h3 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "22px" }}>Canales directos</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                  {CHANNELS.map((c) => {
                    const Icon = c.icon;
                    const body = (
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "13px" }}>
                        <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 10, background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={18} />
                        </span>
                        <div>
                          <span style={{ display: "block", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#64748B", marginBottom: "5px" }}>{c.label}</span>
                          {c.lines.map((l) => (
                            <span key={l} style={{ display: "block", fontSize: "14px", color: "#CBD5E1", lineHeight: 1.55 }}>{l}</span>
                          ))}
                        </div>
                      </div>
                    );
                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a href={c.href} className="cs-channel" style={{ textDecoration: "none", display: "block" }}>
                            {body}
                          </a>
                        ) : body}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div style={{ borderRadius: "18px", background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(11,17,32,0.9))", border: "1px solid rgba(201,168,76,0.16)", padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "14px" }}>
                  <ShieldCheckIcon size={20} />
                  <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: "#C9A84C" }}>Confidencialidad</h3>
                </div>
                <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
                  {siteConfig.name} trata cada consulta bajo secreto profesional. El primer contacto no genera
                  vinculación contractual alguna.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Hover en CSS: esta página es un Server Component (exporta metadata)
          y no puede recibir handlers de eventos. */}
      <style>{`
        .cs-channel { transition: opacity 0.25s; }
        .cs-channel:hover { opacity: 0.75; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
