"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollParallaxOptions {
  y?: [number, number];
  opacity?: [number, number];
  rotation?: [number, number];
  scale?: [number, number];
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
}

export function useScrollParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollParallaxOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      y,
      opacity,
      rotation,
      scale,
      start = "top bottom",
      end = "bottom top",
      scrub = 1.5,
      pin = false,
    } = options;

    const from: gsap.TweenVars = {};
    const to: gsap.TweenVars = {};

    if (y) { from.y = y[0]; to.y = y[1]; }
    if (opacity) { from.opacity = opacity[0]; to.opacity = opacity[1]; }
    if (rotation) { from.rotation = rotation[0]; to.rotation = rotation[1]; }
    if (scale) { from.scale = scale[0]; to.scale = scale[1]; }

    gsap.fromTo(ref.current, from, {
      ...to,
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub,
        pin,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [options.y, options.opacity, options.rotation, options.scale, options.start, options.end, options.scrub, options.pin]);

  return ref;
}

export function useParallaxGroup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll("[data-parallax]");

    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax") || "0.5");

      gsap.fromTo(
        el,
        { y: 100 * speed },
        {
          y: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return containerRef;
}
