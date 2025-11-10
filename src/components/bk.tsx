import React, { CSSProperties, useId, useMemo } from "react";

type Palette = {
  frosting?: string;      // glaseado
  base?: string;          // base (capacillo)
  baseRidge?: string;     // líneas del capacillo
  outline?: string;       // contorno/fino
  sprinkles?: string[];   // colores de chispas
  background?: string;    // fondo del azulejo
  shadow?: string;        // sombra bajo el cupcake
};

type Props = {
  className?: string;
  tileSize?: number; // px
  scale?: number;    // escala del contenido en el azulejo
  palette?: Palette;
  opacity?: number;
  children?: React.ReactNode;
  style?: CSSProperties;
};

export default function CupcakePatternBackground({
  className = "min-h-screen w-full",
  tileSize = 200,
  scale = 1,
  palette = {},
  opacity = 1,
  children,
  style = {},
}: Props) {
  const rawId = useId();
  const patternId = `cupcake-pattern-${rawId.replace(/[:]/g, "")}`;

  const colors: Required<Palette> = {
    frosting: "#c9a7ff",            // lila claro
    base: "#6f3bd6",                // morado oscuro
    baseRidge: "#5a2fb0",           // líneas del capacillo
    outline: "rgba(0,0,0,0.12)",    // contorno suave
    sprinkles: ["#ff5f6d", "#ffd166", "#06d6a0", "#118ab2", "#f78c6b", "#e9ff70"],
    background: "transparent",      // deja transparente para superponer
    shadow: "rgba(0,0,0,0.08)",
    ...palette,
  };

  // Escala para mantener proporciones cuando cambie tileSize y/o scale
  const s = (tileSize / 200) * scale;

  // Posiciones determinísticas de chispas dentro del glaseado (coordenadas 200x200)
  const sprinkles = useMemo(
    () =>
      [
        { x: 84, y: 60, w: 12, h: 3, r: 20 },
        { x: 106, y: 58, w: 10, h: 3, r: -25 },
        { x: 94, y: 70, w: 8, h: 3, r: 35 },
        { x: 118, y: 72, w: 12, h: 3, r: -10 },
        { x: 76, y: 78, w: 9, h: 3, r: 15 },
        { x: 130, y: 88, w: 8, h: 3, r: -35 },
        { x: 98, y: 86, w: 10, h: 3, r: 12 },
        { x: 112, y: 64, w: 8, h: 3, r: 55 },
        { x: 86, y: 92, w: 8, h: 3, r: -18 },
        { x: 120, y: 98, w: 10, h: 3, r: 28 },
      ].map((sp, i) => ({
        ...sp,
        color: colors.sprinkles[i % colors.sprinkles.length],
      })),
    [colors.sprinkles]
  );

  return (
    <div className={`relative ${className}`} style={style}>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width={tileSize}
            height={tileSize}
            x="0"
            y="0"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            {/* Fondo del azulejo */}
            <rect x="0" y="0" width={tileSize} height={tileSize} fill={colors.background} />

            {/* Cupcake centrado en un sistema 200x200 y escalado a la baldosa */}
            <g transform={`translate(${tileSize / 2}, ${tileSize / 2}) scale(${s}) translate(-100, -100)`} opacity={opacity}>
              {/* Sombra */}
              <ellipse cx="100" cy="168" rx="42" ry="8" fill={colors.shadow} />

              {/* Glaseado (forma orgánica) */}
              <path
                d="
                  M 100 42
                  c 22 0 28 14 30 20
                  c 16 2 28 16 18 30
                  c 8 14 -8 28 -46 28
                  c -40 0 -56 -16 -42 -34
                  c -18 -8 -10 -34 14 -36
                  c 4 -10 22 -18 26 -8
                  c 2 -6 8 -10 14 -10
                  z
                "
                fill={colors.frosting}
                stroke={colors.outline}
                strokeWidth="1.5"
              />

              {/* Chispas */}
              {sprinkles.map((sp, idx) => (
                <rect
                  key={idx}
                  x={sp.x}
                  y={sp.y}
                  width={sp.w}
                  height={sp.h}
                  rx={sp.h / 2}
                  ry={sp.h / 2}
                  fill={sp.color}
                  transform={`rotate(${sp.r}, ${sp.x + sp.w / 2}, ${sp.y + sp.h / 2})`}
                />
              ))}

              {/* Base (capacillo) */}
              <polygon
                points="62,118 138,118 126,166 74,166"
                fill={colors.base}
                stroke={colors.outline}
                strokeWidth="1.25"
              />
              {/* Pliegues del capacillo */}
              {[72, 82, 92, 102, 112, 122].map((x, i) => (
                <line
                  key={i}
                  x1={x}
                  y1={120}
                  x2={x - 4}
                  y2={166}
                  stroke={colors.baseRidge}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              ))}
              {/* Borde superior del capacillo */}
              <path
                d="M62 118 Q100 110 138 118"
                fill="none"
                stroke={colors.baseRidge}
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </g>
          </pattern>
        </defs>

        {/* Pintar el patrón en todo el lienzo */}
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Contenido superpuesto */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
