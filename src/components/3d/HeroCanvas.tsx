"use client";

import { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   MOUSE TRACKING
   ============================================================ */
function MouseTracker({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouseRef.current.x * 0.3 - camera.position.x) * 0.02;
    camera.position.y += (mouseRef.current.y * 0.2 + 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -2);
  });
  return null;
}

/* ============================================================
   SCALES OF JUSTICE — Central element
   ============================================================ */
function ScalesOfJustice({ scrollY }: { scrollY: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null!);
  const leftPanRef = useRef<THREE.Group>(null!);
  const rightPanRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + scrollY.current * 0.001;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (leftPanRef.current) leftPanRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    if (rightPanRef.current) rightPanRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + Math.PI) * 0.08;
  });

  const gold = (em = 0.08) => <meshStandardMaterial color="#C9A84C" metalness={0.85} roughness={0.25} emissive="#C9A84C" emissiveIntensity={em} />;
  const dark = () => <meshStandardMaterial color="#1E293B" metalness={0.7} roughness={0.3} />;

  return (
    <group ref={groupRef} position={[0, 0.5, -2]}>
      <mesh position={[0, -0.8, 0]}><cylinderGeometry args={[0.06, 0.08, 2.4, 16]} />{gold()}</mesh>
      <mesh position={[0, -2, 0]}><cylinderGeometry args={[0.5, 0.6, 0.12, 24]} />{dark()}</mesh>
      <mesh position={[0, -1.92, 0]}><cylinderGeometry args={[0.35, 0.5, 0.1, 24]} />{gold()}</mesh>
      <mesh position={[0, 0.45, 0]}><sphereGeometry args={[0.08, 16, 16]} />{gold()}</mesh>
      <mesh position={[0, 0.35, 0]}><boxGeometry args={[2.2, 0.04, 0.04]} />{gold()}</mesh>
      <group ref={leftPanRef} position={[-1.1, 0.35, 0]}>
        <mesh position={[0, -0.4, 0]}><cylinderGeometry args={[0.01, 0.01, 0.8, 8]} />{gold()}</mesh>
        <mesh position={[0, -0.85, 0]}><cylinderGeometry args={[0.3, 0.25, 0.03, 20]} />{dark()}</mesh>
        <mesh position={[0, -0.82, 0]}><cylinderGeometry args={[0.28, 0.28, 0.02, 20]} />{gold()}</mesh>
      </group>
      <group ref={rightPanRef} position={[1.1, 0.35, 0]}>
        <mesh position={[0, -0.4, 0]}><cylinderGeometry args={[0.01, 0.01, 0.8, 8]} />{gold()}</mesh>
        <mesh position={[0, -0.85, 0]}><cylinderGeometry args={[0.3, 0.25, 0.03, 20]} />{dark()}</mesh>
        <mesh position={[0, -0.82, 0]}><cylinderGeometry args={[0.28, 0.28, 0.02, 20]} />{gold()}</mesh>
      </group>
    </group>
  );
}

/* ============================================================
   FLOATING ELEMENTS
   ============================================================ */
function FloatingShield({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002 * speed;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={0.4}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.12} roughness={0.3} metalness={0.85} distort={0.2} speed={1.5} transparent opacity={0.45} />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.25) * 0.15;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={ref} position={position} scale={0.5}>
        <torusGeometry args={[0.6, 0.12, 16, 32]} />
        <MeshDistortMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={0.06} roughness={0.35} metalness={0.8} distort={0.15} speed={1.2} transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 50;
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return pos;
  }, []);
  useFrame((state) => { if (ref.current) { ref.current.rotation.y = state.clock.elapsedTime * 0.01; } });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.02} color="#C9A84C" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

/* ============================================================
   SCENE
   ============================================================ */
function Scene({ mouseRef, scrollY }: { mouseRef: React.MutableRefObject<{ x: number; y: number }>; scrollY: React.MutableRefObject<number> }) {
  return (
    <>
      <MouseTracker mouseRef={mouseRef} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <pointLight position={[-4, 2, 2]} intensity={0.7} color="#C9A84C" distance={12} />
      <pointLight position={[4, -1, -2]} intensity={0.3} color="#4A90D9" distance={10} />
      <pointLight position={[0, 3, -3]} intensity={0.4} color="#C9A84C" distance={8} />
      <ScalesOfJustice scrollY={scrollY} />
      <FloatingShield position={[-4, 1, -4]} speed={0.6} />
      <FloatingShield position={[4.5, -0.5, -5]} speed={0.9} />
      <FloatingRing position={[2, 2, -5]} speed={0.4} />
      <FloatingRing position={[-2.5, -2, -6]} speed={0.8} />
      <ParticleField />
      <fog attach="fog" args={["#0B1120", 5, 16]} />
    </>
  );
}

/* ============================================================
   EXPORT
   ============================================================ */
export default function HeroCanvas() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);
  const handleScroll = useCallback(() => { scrollY.current = window.scrollY; }, []);
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { window.removeEventListener("mousemove", handleMouseMove); window.removeEventListener("scroll", handleScroll); };
  }, [handleMouseMove, handleScroll]);

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} style={{ background: "transparent" }}>
        <Scene mouseRef={mouseRef} scrollY={scrollY} />
      </Canvas>
    </div>
  );
}
