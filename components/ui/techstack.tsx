// "use client";

import { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { Icons } from "../icons";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 lg:size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function TechBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  const div12Ref = useRef<HTMLDivElement>(null);
  const div13Ref = useRef<HTMLDivElement>(null);
  const div14Ref = useRef<HTMLDivElement>(null);
  const div15Ref = useRef<HTMLDivElement>(null);
  const div16Ref = useRef<HTMLDivElement>(null);
  const div17Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[800px] w-full items-center justify-center overflow-hidden rounded-lg p-3 "
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg h-auto items-stretch justify-between gap-10">
        {/*TOP ROW*/}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.java />
          </Circle>
          <Circle ref={div9Ref}>
            <Icons.python />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div10Ref}>
            <Icons.javascript />
          </Circle>
          <Circle ref={div12Ref}>
            <Icons.bash />
          </Circle>
        </div>
        {/*MIDDLE TOP ROW*/}
        <div className="flex flex-row items-stretch justify-between">
          <Circle ref={div14Ref}>
            <Icons.docker />
          </Circle>
          <Circle ref={div16Ref}>
            <Icons.kubernetes />
          </Circle>
        </div>
        {/*MIDDLE ROW*/}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.aws />
          </Circle>
          <Circle ref={div4Ref} className="size-16 lg:size-20">
            <Icons.user />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.gcloud />
          </Circle>
        </div>
        {/*MIDDLE BOTTOM ROW*/}
        <div className="flex flex-row items-stretch justify-between">
          <Circle ref={div15Ref}>
            <Icons.github />
          </Circle>
          <Circle ref={div17Ref}>
            <Icons.git />
          </Circle>
        </div>
        {/*BOTTOM ROW*/}
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.postgres />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.nextjs />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.springboot />
          </Circle>
          <Circle ref={div13Ref}>
            <Icons.linux />
          </Circle>
          <Circle ref={div11Ref}>
            <Icons.vim />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        // reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div4Ref}
        // curvature={75}
        // endYOffset={-10}
        // reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div4Ref}
        // curvature={75}
        // endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div12Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div13Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div14Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        // reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div15Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        // reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div16Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div17Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
