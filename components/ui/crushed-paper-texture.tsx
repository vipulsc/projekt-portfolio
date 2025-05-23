import React from "react";

export const CrushedPaperTexture = () => {
  return (
    <>
      {/* Crushed Paper Texture Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
            linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05)),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05))
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          backgroundColor: "rgba(0,0,0,0.95)",
          filter: "contrast(1.1) brightness(0.9)",
        }}
      />

      {/* Paper Crumple Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
};
