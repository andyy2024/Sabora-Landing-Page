import React from "react";

/**
 * CakePatternBackground.jsx
 * A full-bleed, seamless repeating cake pattern background component for web (React + Tailwind 4).
 *
 * Features:
 * - Uses an inline SVG <pattern> so the tiles are perfectly seamless and crisp.
 * - Exposes props to control tile size, spacing, colors, rotation and opacity.
 * - Meant to be used as a background that occupies all available space (absolute/fixed or as a block).
 * - No external libs required; works with Tailwind 4 utilities.
 *
 * Usage example:
 * <div className="relative min-h-screen">
 *   <CakePatternBackground />
 *   <main className="relative z-10">...page content...</main>
 * </div>
 *
 */

export default function CakePatternBackground({
  tileSize = 160, // size of one tile in px (controls spacing)
  scale = 1, // overall scale of the pattern
  rotate = 0, // global rotation of the whole svg (deg)
  primaryColor = "#FFD9E6", // cake body
  frostingColor = "#FFF5F8", // frosting
  cherryColor = "#E11D48", // cherry
  sprinkleColor = "#F59E0B", // small accent
  opacity = 0.95, // pattern opacity
  className = "",
  children,
}) {
  // tile viewBox will be tileSize x tileSize
  const s = Math.max(40, tileSize); // minimum tile size
  const patternId = "cakePattern";
  const viewBox = `0 0 ${s} ${s}`;

  // helper to position cake centered in tile
  const cakeGroup = (
    <g transform={`translate(${s / 2}, ${s / 2}) scale(${scale})`}>
      {/* simple stylized cake icon (keeps path data compact) */}
      <g transform="translate(-32,-32) scale(0.8)">
        {/* plate */}
        <ellipse cx="32" cy="58" rx="30" ry="6" fill="#F3F4F6" opacity="0.7" />
        {/* cake body */}
        <rect x="8" y="24" width="48" height="28" rx="6" fill={primaryColor} stroke="#0000000f" />
        {/* frosting drip */}
        <path d="M8 28 C14 40, 20 28, 26 34 C32 40, 38 28, 44 34 C50 40, 56 28, 56 28 L56 44 L8 44 Z" fill={frostingColor} />
        {/* sprinkles */}
        <g>
          <rect x="18" y="34" width="2" height="6" rx="1" transform="rotate(-20 19 37)" fill={sprinkleColor} />
          <rect x="26" y="36" width="2" height="5" rx="1" transform="rotate(10 27 38)" fill="#60A5FA" />
          <rect x="36" y="34" width="2" height="6" rx="1" transform="rotate(30 37 37)" fill="#34D399" />
        </g>
        {/* cherry */}
        <g>
          <circle cx="40" cy="18" r="6" fill={cherryColor} stroke="#00000020" />
          <path d="M40 12 C40 8, 45 6, 48 10" stroke="#065F46" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );

  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={s}
            height={s}
            patternUnits="userSpaceOnUse"
            patternTransform={`scale(1)`}
          >
            {/* background tile color (optional subtle paper texture) */}
            <rect x="0" y="0" width={s} height={s} fill="#FEFEFE" />

            {/* place a slightly translated/offset cake in the tile center for better tiling */}
            <g>
              {cakeGroup}
            </g>

            {/* we sometimes want a second, offset cake to make tiling less grid-like —
                we draw a second copy displaced by half a tile so the tiling feels staggered */}
            <g transform={`translate(${s / 2}, ${s / 2})`}>
              {cakeGroup}
            </g>
          </pattern>
        </defs>

        {/* big rect that fills the SVG and uses the pattern */}
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* optional children overlay if user passes content (keeps them visually on top)
          Note: children will be positioned after the pattern but inside this component's DOM.
          If you want children to be interactive above other content, ensure you set z-index accordingly. */}
      {children ? <div className="pointer-events-none">{children}</div> : null}
    </div>
  );
}
