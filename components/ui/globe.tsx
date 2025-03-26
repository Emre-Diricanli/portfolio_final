"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useCallback, memo } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

// Memoize the marker data to prevent recreating on each render
const GLOBE_MARKERS = [
  { location: [14.5995, 120.9842], size: 0.03 },
  { location: [19.076, 72.8777], size: 0.1 },
  { location: [23.8103, 90.4125], size: 0.05 },
  { location: [30.0444, 31.2357], size: 0.07 },
  { location: [39.9042, 116.4074], size: 0.08 },
  { location: [-23.5505, -46.6333], size: 0.1 },
  { location: [19.4326, -99.1332], size: 0.1 },
  { location: [40.7128, -74.006], size: 0.1 },
  { location: [34.6937, 135.5022], size: 0.05 },
  { location: [41.0082, 28.9784], size: 0.06 },
];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: GLOBE_MARKERS,
};

function GlobeComponent({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const globeInstanceRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Memoize event handlers to prevent recreating on each render
  const updatePointerInteraction = useCallback((value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  }, []);

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  }, [r]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX;
    updatePointerInteraction(e.clientX);
  }, [updatePointerInteraction]);

  const handlePointerUp = useCallback(() => updatePointerInteraction(null), [updatePointerInteraction]);
  
  const handleMouseMove = useCallback((e: React.MouseEvent) => updateMovement(e.clientX), [updateMovement]);
  
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches[0]) updateMovement(e.touches[0].clientX);
  }, [updateMovement]);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Destroy previous globe instance if it exists
    if (globeInstanceRef.current) {
      globeInstanceRef.current.destroy();
    }

    // Create new globe instance
    globeInstanceRef.current = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    // Fade in
    if (canvasRef.current) {
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 0);
    }

    return () => {
      if (globeInstanceRef.current) {
        globeInstanceRef.current.destroy();
      }
      window.removeEventListener("resize", onResize);
    };
  }, [config, rs]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export const Globe = memo(GlobeComponent);
