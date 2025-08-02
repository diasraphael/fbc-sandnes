"use client";

import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition: "all 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
