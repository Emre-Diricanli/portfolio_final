"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useCallback, memo, useState } from "react";

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

// Adjust marker count based on device
const getMobileMarkers = () => {
  // Return a subset of markers for mobile
  return GLOBE_MARKERS.slice(0, 5);
};

// Base configuration
const getGlobeConfig = (isMobile = false): COBEOptions => ({
  width: isMobile ? 400 : 800,
  height: isMobile ? 400 : 800,
  onRender: () => {},
  devicePixelRatio: isMobile ? 1 : 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: isMobile ? 8000 : 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: isMobile ? getMobileMarkers() : GLOBE_MARKERS,
});

function GlobeComponent({
  className,
  config,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const [isMobile, setIsMobile] = useState(false);
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

    // Create new globe instance with device-specific configuration
    const finalConfig = config || getGlobeConfig(isMobile);
    
    globeInstanceRef.current = createGlobe(canvasRef.current!, {
      ...finalConfig,
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
  }, [config, rs, isMobile]);

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

// Memoize the base component to prevent unnecessary re-renders
const BaseGlobe = memo(GlobeComponent);

// Create a viewport-aware wrapper component that only loads the Globe when in view
export const Globe = memo(({ className, config }: { className?: string; config?: COBEOptions }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px', // Load 200px before it comes into view
        threshold: 0.1 
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <BaseGlobe className={className} config={config} />
      ) : (
        <div className="absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px] animate-pulse bg-gradient-to-br from-gray-800 to-gray-900 rounded-full opacity-30" />
      )}
    </div>
  );
});
