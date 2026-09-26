import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HoverLink from "@/components/ui/HoverLink";
import { ArrowLeftIcon, ArrowRightIcon, TrophyIcon, CalendarIcon, BriefcaseIcon, GavelIcon } from "@/components/ui/Icons";
import { successCases } from "@/lib/success-cases";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return successCases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caso = successCases.find((c) => c.slug === slug);
  if (!caso) return { title: "No encontrado" };

  return {
    title: `${caso.title} — Consilium Septem`,
    description: caso.excerpt,
  };
}

export default async function CasoDeExitoPage({ params }: Props) {
  const { slug } = await params;
  const index = successCases.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const caso = successCases[index];
  const prev = index > 0 ? successCases[index - 1] : undefined;
  const next = index < successCases.length - 1 ? successCases[index + 1] : undefined;

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <HoverLink
          href="/casos-de-exito"
          baseColor="#64748B"
          hoverColor="#C9A84C"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", textDecoration: "none", marginBottom: "48px" }}
        >
          <ArrowLeftIcon size={16} />Volver a Casos de Éxito
        </HoverLink>

        <AnimatedSection>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#C9A84C", padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", marginBottom: "20px" }}>
            <TrophyIcon size={13} />{caso.label}
          </span>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 700, lineHeight: 1.15, marginBottom: "28px" }}>
            <span style={{ color: "#F8F9FA" }}>{caso.title}</span>
          </h1>

          <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", padding: "24px 0", margin: "0 0 48px", borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
            <div>
              <dt style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "6px" }}>
                <BriefcaseIcon size={13} />Cliente
              </dt>
              <dd style={{ margin: 0, fontSize: "15px", color: "#F8F9FA", lineHeight: 1.5 }}>{caso.client}</dd>
            </div>
            <div>
              <dt style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "6px" }}>
                <GavelIcon size={13} />Área de Práctica
              </dt>
              <dd style={{ margin: 0, fontSize: "15px", color: "#F8F9FA", lineHeight: 1.5 }}>{caso.practiceArea}</dd>
            </div>
            <div>
              <dt style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#C9A84C", marginBottom: "6px" }}>
                <TrophyIcon size={13} />Estado
              </dt>
              <dd style={{ margin: 0, fontSize: "15px", color: "#F8F9FA", lineHeight: 1.5 }}>{caso.status}</dd>
            </div>
          </dl>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {caso.sections.map((section) => (
            <AnimatedSection key={section.heading}>
              <section>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700, color: "#C9A84C", marginBottom: "16px", lineHeight: 1.3 }}>
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p key={i} style={{ color: "#CBD5E1", fontSize: "16px", lineHeight: 1.85, marginBottom: "18px" }}>{p}</p>
                ))}

                {section.bullets && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {section.bullets.map((b, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "#CBD5E1", fontSize: "15px", lineHeight: 1.7, padding: "14px 18px", borderRadius: "10px", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A84C", flexShrink: 0, marginTop: 9 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((sub) => (
                  <div key={sub.heading} style={{ marginBottom: "28px", paddingLeft: "20px", borderLeft: "2px solid rgba(201,168,76,0.2)" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#F8F9FA", marginBottom: "10px", lineHeight: 1.35 }}>
                      {sub.heading}
                    </h3>
                    <p style={{ color: "#CBD5E1", fontSize: "15px", lineHeight: 1.85, marginBottom: "8px" }}>{sub.body}</p>
                  </div>
                ))}
              </section>
            </AnimatedSection>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.04)", gap: "16px", flexWrap: "wrap" }}>
          {prev ? (
            <HoverLink
              href={`/casos-de-exito/${prev.slug}`}
              baseColor="#64748B"
              hoverColor="#C9A84C"
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <ArrowLeftIcon size={16} />
              <div style={{ textAlign: "left" }}><span style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em" }}>Anterior</span><span style={{ fontSize: "13px", fontWeight: 500 }}>{prev.title}</span></div>
            </HoverLink>
          ) : <div />}
          {next ? (
            <HoverLink
              href={`/casos-de-exito/${next.slug}`}
              baseColor="#64748B"
              hoverColor="#C9A84C"
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", textAlign: "right" }}
            >
              <div><span style={{ display: "block", fontSize: "10px", letterSpacing: "0.1em" }}>Siguiente</span><span style={{ fontSize: "13px", fontWeight: 500 }}>{next.title}</span></div>
              <ArrowRightIcon size={16} />
            </HoverLink>
          ) : <div />}
        </div>

        <AnimatedSection>
          <div style={{ textAlign: "center", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <Link href="/contacto" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 26px", fontSize: "13px", fontWeight: 600, background: "#C9A84C", color: "#0B1120", borderRadius: "10px", textDecoration: "none" }}>
              <CalendarIcon size={16} />Agendar Consulta
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}