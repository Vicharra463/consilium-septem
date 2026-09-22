"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CourtroomScene() {
  return (
    <div style={{
      position: "absolute", inset: 0, borderRadius: "16px", overflow: "hidden",
      border: "1px solid rgba(201,168,76,0.08)",
      background: "linear-gradient(135deg, #0B1120 0%, #111827 100%)",
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <Image
          src="/images/courtroom.jpg"
          alt="Sala de audiencias — juez, abogados y público"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          sizes="(max-width: 900px) 100vw, 50vw"
          priority
        />
      </motion.div>

      {/* Subtle gold vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(11,17,32,0.3) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}
