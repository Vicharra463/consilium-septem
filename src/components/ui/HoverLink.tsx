"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  href: string;
  baseColor: string;
  hoverColor: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function HoverLink({ href, baseColor, hoverColor, style, children }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{ ...style, color: hovered ? hoverColor : baseColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}