"use client";

/* ============================================================
   CONSILIUM SEPTEM — Custom Premium Icon Set
   Ornamental, detailed, gold-accented SVG icons
   ============================================================ */

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

/* SCALE OF JUSTICE — Detailed ornamental */
export function ScaleIcon({ size = 28, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3V6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 6H20L19 8H13L12 6Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="0.8" />
      <circle cx="16" cy="4.5" r="1.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.8" />
      <path d="M7 14L9 8H23L25 14" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 14C6 16.5 7.5 18 9 18C10.5 18 11 17 11 16C11 15 10.5 14.5 10 14H6Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.8" />
      <path d="M22 14H26C26 14 25.5 17 23 18C20.5 19 21 15 21 14" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.1" />
      <path d="M9 18C10 18.5 10.5 19 10 20C9.5 21 8 21.5 7 21" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M23 18C22 18.5 21.5 19 22 20C22.5 21 24 21.5 25 21" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M16 6V26" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M13 26H19" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 28H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="14" y="26" width="4" height="2" rx="0.5" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

/* SHIELD WITH CHECK — Premium security */
export function ShieldCheckIcon({ size = 28, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L5 7V14C5 21 10 27 16 29C22 27 27 21 27 14V7L16 3Z" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1" />
      <path d="M16 5L7 8.5V14C7 20 11 25 16 27C21 25 25 20 25 14V8.5L16 5Z" fill={color} fillOpacity="0.05" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" />
      <path d="M11 16L14 19L21 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="15.5" r="6" stroke={color} strokeWidth="0.6" strokeDasharray="1.5 1.5" opacity="0.4" />
    </svg>
  );
}

/* BOOK / CONSTITUTION — Ornamental document */
export function BookIcon({ size = 28, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="5" width="20" height="22" rx="2" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1" />
      <rect x="8" y="7" width="16" height="18" rx="1" fill={color} fillOpacity="0.04" stroke={color} strokeWidth="0.6" />
      <path d="M10 10H22" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M10 13H20" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M10 15.5H18" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M10 18H22" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M10 20.5H16" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <path d="M12 5V27" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <circle cx="10" cy="16" r="0.8" fill={color} fillOpacity="0.4" />
      <path d="M14 8L16 10L14 12" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/* BRIEFCASE — Detailed briefcase */
export function BriefcaseIcon({ size = 28, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="11" width="24" height="15" rx="3" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1" />
      <path d="M11 11V8C11 6.9 11.9 6 13 6H19C20.1 6 21 6.9 21 8V11" stroke={color} strokeWidth="1" />
      <rect x="4" y="11" width="24" height="5" rx="1" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.6" />
      <circle cx="16" cy="18" r="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.8" />
      <path d="M14 18H18" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M8 14H24" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <rect x="10" y="6" width="3" height="2" rx="0.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.4" />
      <rect x="19" y="6" width="3" height="2" rx="0.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.4" />
    </svg>
  );
}

/* CALCULATOR / TAX — Ornamental numbers */
export function TaxIcon({ size = 28, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="4" width="18" height="24" rx="3" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1" />
      <rect x="9" y="6" width="14" height="6" rx="1.5" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="0.6" />
      <text x="12" y="10.5" fill={color} fontSize="4" fontFamily="monospace" opacity="0.6">$</text>
      <circle cx="11" cy="16" r="1" fill={color} fillOpacity="0.3" />
      <circle cx="16" cy="16" r="1" fill={color} fillOpacity="0.3" />
      <circle cx="21" cy="16" r="1" fill={color} fillOpacity="0.3" />
      <circle cx="11" cy="21" r="1" fill={color} fillOpacity="0.3" />
      <circle cx="16" cy="21" r="1" fill={color} fillOpacity="0.3" />
      <circle cx="21" cy="21" r="1" fill={color} fillOpacity="0.3" />
      <circle cx="11" cy="25" r="1" fill={color} fillOpacity="0.2" />
      <circle cx="16" cy="25" r="1" fill={color} fillOpacity="0.5" />
      <circle cx="21" cy="25" r="1" fill={color} fillOpacity="0.2" />
      <path d="M14 14H18" stroke={color} strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
}

/* GAVEL — Scales alternative for services */
export function GavelIcon({ size = 28, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="12" height="6" rx="1.5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="0.8" transform="rotate(-45 14 9)" />
      <path d="M20 20L10 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 22C8 22 10 24 12 24C14 24 14 22 14 22" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M22 18L24 16" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M6 26H26" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 24V26" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M24 24V26" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="22" cy="14" r="3" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

/* LOCATION PIN — Premium map marker */
export function LocationIcon({ size = 20, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1" />
      <circle cx="12" cy="9" r="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.8" />
      <circle cx="12" cy="9" r="1" fill={color} fillOpacity="0.5" />
    </svg>
  );
}

/* PHONE — Elegant handset */
export function PhoneIcon({ size = 20, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.68 21 20.36 21 20 21C10.61 21 3 13.39 3 4C3 3.64 3 3.32 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.82C8.14 3.38 8.3 3.93 8.52 4.44L7.01 5.95C6.85 6.11 6.8 6.35 6.88 6.56C7.62 8.54 9.02 10.22 10.82 11.17C11.03 11.28 11.29 11.23 11.45 11.07L12.96 9.56C13.46 9.78 14.01 9.94 14.57 10.03C15.05 10.11 15.39 10.52 15.39 11V14" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="0.6" strokeDasharray="2 2" opacity="0.3" />
    </svg>
  );
}

/* EMAIL — Elegant envelope */
export function MailIcon({ size = 20, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="18" height="14" rx="2" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1" />
      <path d="M3 7L12 13L21 7" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 19L9 13" stroke={color} strokeWidth="0.6" opacity="0.3" strokeLinecap="round" />
      <path d="M21 19L15 13" stroke={color} strokeWidth="0.6" opacity="0.3" strokeLinecap="round" />
      <circle cx="12" cy="10" r="1.5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="0.4" />
    </svg>
  );
}

/* GRADUATION CAP — Detailed */
export function GradIcon({ size = 20, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9L12 15L23 9L12 3Z" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1" strokeLinejoin="round" />
      <path d="M5 10V16C5 16 8 19 12 19C16 19 19 16 19 16V10" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M21 9V17" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <circle cx="21" cy="17.5" r="1" fill={color} fillOpacity="0.4" />
      <path d="M12 15V19" stroke={color} strokeWidth="0.6" strokeDasharray="1 1" opacity="0.4" />
    </svg>
  );
}

/* ARROW RIGHT — Elegant */
export function ArrowRightIcon({ size = 16, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ARROW LEFT */
export function ArrowLeftIcon({ size = 16, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 12H5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 6L5 12L11 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* CHEVRON RIGHT */
export function ChevronRightIcon({ size = 12, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6L15 12L9 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* MENU HAMBURGER */
export function MenuIcon({ size = 20, color = "#F8F9FA" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 12H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 17H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* CLOSE X */
export function CloseIcon({ size = 20, color = "#F8F9FA" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L18 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* CALENDAR */
export function CalendarIcon({ size = 16, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1" />
      <path d="M3 9H21" stroke={color} strokeWidth="0.8" />
      <path d="M8 2V5" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M16 2V5" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1" fill={color} fillOpacity="0.4" />
      <circle cx="12" cy="14" r="1" fill={color} fillOpacity="0.4" />
      <circle cx="16" cy="14" r="1" fill={color} fillOpacity="0.4" />
      <circle cx="8" cy="18" r="0.8" fill={color} fillOpacity="0.2" />
      <circle cx="12" cy="18" r="0.8" fill={color} fillOpacity="0.2" />
    </svg>
  );
}

/* TROPHY — Premium achievement */
export function TrophyIcon({ size = 24, color = "#C9A84C" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5H22V14C22 17.3 19.3 20 16 20C12.7 20 10 17.3 10 14V5Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1" />
      <path d="M10 8H7C7 8 6 8 6 10C6 12 8 13 10 13" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M22 8H25C25 8 26 8 26 10C26 12 24 13 22 13" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M16 20V23" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M12 23H20" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <rect x="11" y="24" width="10" height="2" rx="1" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.6" />
      <circle cx="16" cy="11" r="2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="0.6" />
      <path d="M14 11L15.5 12.5L18 9.5" stroke={color} strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}
