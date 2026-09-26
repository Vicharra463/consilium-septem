"use client";

import { useState, FormEvent } from "react";
import { ArrowRightIcon, ShieldCheckIcon, CloseIcon, CheckIcon } from "@/components/ui/Icons";
import { services } from "@/lib/site-data";

type Fields = { name: string; email: string; phone: string; area: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", phone: "", area: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Ingrese su nombre y apellido.";
  if (!f.email.trim()) e.email = "Ingrese su correo electrónico.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "El correo no tiene un formato válido.";
  if (f.phone.trim() && f.phone.replace(/\D/g, "").length < 7) e.phone = "Revise el número de teléfono.";
  if (!f.area) e.area = "Seleccione el área del derecho.";
  if (f.message.trim().length < 10) e.message = "Cuéntenos su caso con al menos 10 caracteres.";
  return e;
}

/**
 * Envío del formulario.
 *
 * ⚠️  TODAY: no hay backend. Esta función resuelve sin persistir nada.
 * Para ponerlo en producción hay que conectarla a un proveedor:
 *   - Resend / SendGrid  → API route propia en /api/contact
 *   - Formspree / Web3Forms → fetch directo al endpoint (sin backend propio)
 *   - Server Action de Next.js → la vía más limpia dentro de este stack
 * Mientras tanto, el usuario recibe confirmación visual pero NADIE recibe el mensaje.
 */
async function submitContactForm(f: Fields): Promise<void> {
  // TODO(backend): reemplazar por el envío real.
  await new Promise((r) => setTimeout(r, 700));
  console.info("[contacto] mensaje capturado (sin backend):", f);
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "13px 16px", fontSize: "15px", color: "#F8F9FA",
  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "10px", outline: "none", transition: "border-color 0.25s, background 0.25s",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em",
  textTransform: "uppercase", color: "#94A3B8", marginBottom: "8px",
};

const errorStyle: React.CSSProperties = {
  display: "block", fontSize: "12px", color: "#F87171", marginTop: "6px",
};

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof Fields, v: string) => {
    setFields((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
    e.currentTarget.style.background = "rgba(201,168,76,0.04)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
  };

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }
    setStatus("sending");
    try {
      await submitContactForm(fields);
      setStatus("sent");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ padding: "44px 32px", borderRadius: "16px", border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.05)", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(201,168,76,0.12)", border: "1.5px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
          <CheckIcon size={26} />
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "24px", fontWeight: 700, color: "#F8F9FA", marginBottom: "10px" }}>
          Hemos recibido su consulta
        </h3>
        <p style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 24px" }}>
          Un integrante del consejo revisará su mensaje y le responderá a la brevedad.
        </p>
        <button onClick={() => setStatus("idle")} style={{ ...inputStyle, width: "auto", display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <CloseIcon size={14} /> Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        <div>
          <label htmlFor="c-name" style={labelStyle}>Nombre y apellido *</label>
          <input id="c-name" type="text" value={fields.name} autoComplete="name"
            placeholder="María Fernanda Pérez"
            onChange={(e) => set("name", e.target.value)} onFocus={onFocus} onBlur={onBlur}
            data-invalid={!!errors.name} aria-invalid={!!errors.name}
            style={{ ...inputStyle, borderColor: errors.name ? "#F87171" : inputStyle.border as string }} />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="c-email" style={labelStyle}>Correo electrónico *</label>
          <input id="c-email" type="email" value={fields.email} autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            onChange={(e) => set("email", e.target.value)} onFocus={onFocus} onBlur={onBlur}
            data-invalid={!!errors.email} aria-invalid={!!errors.email}
            style={{ ...inputStyle, borderColor: errors.email ? "#F87171" : inputStyle.border as string }} />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
        <div>
          <label htmlFor="c-phone" style={labelStyle}>Teléfono</label>
          <input id="c-phone" type="tel" value={fields.phone} autoComplete="tel"
            placeholder="+51 999 888 777"
            onChange={(e) => set("phone", e.target.value)} onFocus={onFocus} onBlur={onBlur}
            data-invalid={!!errors.phone} aria-invalid={!!errors.phone}
            style={{ ...inputStyle, borderColor: errors.phone ? "#F87171" : inputStyle.border as string }} />
          {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
        </div>

        <div>
          <label htmlFor="c-area" style={labelStyle}>Área del derecho *</label>
          <select id="c-area" value={fields.area} data-invalid={!!errors.area} aria-invalid={!!errors.area}
            onChange={(e) => set("area", e.target.value)} onFocus={onFocus} onBlur={onBlur}
            style={{ ...inputStyle, colorScheme: "dark", borderColor: errors.area ? "#F87171" : inputStyle.border as string, appearance: "none" as const }}>
            <option value="">Seleccione una opción</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
            <option value="Otra">Otro asunto</option>
          </select>
          {errors.area && <span style={errorStyle}>{errors.area}</span>}
        </div>
      </div>

      <div>
        <label htmlFor="c-message" style={labelStyle}>¿En qué podemos ayudarle? *</label>
        <textarea id="c-message" rows={6} value={fields.message}
          placeholder="Describa brevemente su situación: fechas, documentos que tiene y qué resultado busca."
          onChange={(e) => set("message", e.target.value)} onFocus={onFocus} onBlur={onBlur}
          data-invalid={!!errors.message} aria-invalid={!!errors.message}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6, borderColor: errors.message ? "#F87171" : inputStyle.border as string }} />
        {errors.message && <span style={errorStyle}>{errors.message}</span>}
      </div>

      <p style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "12.5px", color: "#64748B", lineHeight: 1.6, margin: 0 }}>
        <ShieldCheckIcon size={16} />
        <span>La información que envíe se trata de forma confidencial y se presume bajo secreto profesional.</span>
      </p>

      {status === "error" && (
        <p style={{ fontSize: "13px", color: "#F87171", margin: 0 }}>No pudimos procesar el envío. Intente nuevamente.</p>
      )}

      <button type="submit" disabled={status === "sending"}
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px",
          padding: "15px 30px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.02em",
          background: status === "sending" ? "rgba(201,168,76,0.55)" : "#C9A84C",
          color: "#0B1120", borderRadius: "10px", border: "none", cursor: status === "sending" ? "wait" : "pointer",
          transition: "background 0.25s", width: "100%",
        }}>
        {status === "sending" ? "Enviando…" : <>Enviar consulta <ArrowRightIcon size={15} /></>}
      </button>
    </form>
  );
}
