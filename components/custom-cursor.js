"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: "difference",
        fontSize: "42px",
        fontWeight: "bold",
        color: "#0078D7",
        lineHeight: 1,
        transform: "translate(-100px, -100px)",
        userSelect: "none",
        translate: "-50% -50%",
      }}
    >
      ⓣ
    </div>
  );
}
