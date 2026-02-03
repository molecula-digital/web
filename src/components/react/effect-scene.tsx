"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Vector2, Group, CylinderGeometry, SphereGeometry } from "three";
import { AsciiEffect } from "./ascii-effect";

function DNAHelix() {
  const holderRef = useRef<Group>(null);
  const cylinderColor = "#7cf9c3";
  const ballColor = "#08a462";

  // Shared geometries - all meshes reference the same GPU data
  const cylinderGeo = useMemo(() => new CylinderGeometry(0.2, 0.2, 5, 8), []);
  const sphereGeo = useMemo(() => new SphereGeometry(0.55, 8, 8), []);

  // Pre-compute row transforms
  const rows = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        y: i,
        rotationY: (30 * i * Math.PI) / 180,
      })),
    [],
  );

  useFrame(() => {
    if (holderRef.current) {
      // rotation speed
      holderRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={holderRef} position={[7.5, 0, 3]}>
      <group position={[0, -16, 0]}>
        {rows.map((row, i) => (
          <group
            key={i}
            position={[0, row.y, 0]}
            rotation={[0, row.rotationY, 0]}
          >
            <mesh rotation={[0, 0, Math.PI / 2]} geometry={cylinderGeo}>
              <meshBasicMaterial color={cylinderColor} />
            </mesh>

            <mesh position={[3, 0, 0]} geometry={sphereGeo}>
              <meshBasicMaterial color={ballColor} />
            </mesh>

            <mesh position={[-2.5, 0, 0]} geometry={sphereGeo}>
              <meshBasicMaterial color={ballColor} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

export function EffectScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState(new Vector2(0, 0));
  const [resolution, setResolution] = useState(new Vector2(1920, 1080));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = rect.height - (e.clientY - rect.top);
        setMousePos(new Vector2(x, y));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);

      const rect = container.getBoundingClientRect();
      setResolution(new Vector2(rect.width, rect.height));

      const handleResize = () => {
        const rect = container.getBoundingClientRect();
        setResolution(new Vector2(rect.width, rect.height));
      };
      window.addEventListener("resize", handleResize);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <DNAHelix />

        <EffectComposer>
          <AsciiEffect
            style="standard"
            cellSize={4}
            invert={false}
            color={true}
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              scanlineIntensity: 0.1,
              scanlineCount: 200,
              targetFPS: 0,
              jitterIntensity: 0,
              jitterSpeed: 0.5,
              mouseGlowEnabled: false,
              mouseGlowRadius: 200,
              mouseGlowIntensity: 1.5,
              vignetteIntensity: 0.3,
              vignetteRadius: 2,
              colorPalette: 0,
              curvature: 0,
              aberrationStrength: 0,
              noiseIntensity: 0,
              noiseScale: 1,
              noiseSpeed: 1,
              waveAmplitude: 0,
              waveFrequency: 10,
              waveSpeed: 1,
              glitchIntensity: 0,
              glitchFrequency: 0,
              brightnessAdjust: 0.1,
              contrastAdjust: 1.2,
            }}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
