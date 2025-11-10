// PatternBackground.jsx
// A reusable React component that fills its container with a seamless repeating SVG from /public
// Designed for Tailwind 4. Exports a default component you can drop into any page.

import React from 'react';

/**
 * Props:
 * - src: path to the image (defaults to '/pattern.svg' in public)
 * - tileSize: number (px) for background-size (defaults to 150)
 * - className: extra Tailwind classes for the wrapper
 * - overlay: optional tailwind color class (e.g. 'bg-white/10') to put a subtle overlay
 * - children: any children to render on top of the pattern
 */ 
export default function PatternBackground({
  src = '/icon.webp',
  tileSize = 150,
  className = '',
  overlay = '',
  children = null,
  style = {},
  ariaLabel = 'Decorative repeating background'
}) {
  // backgroundSize will be applied inline because Tailwind can't know dynamic values
  const bgStyle = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: `${tileSize}px ${tileSize}px`,
    backgroundPosition: '0 0',
    ...style,
  };

  return (
    <div
      aria-hidden={false}
      aria-label={ariaLabel}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Pattern layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={bgStyle}
      />

      {/* Optional overlay (use Tailwind opacity shorthand like 'bg-black/5') */}
      {overlay ? (
        <div className={`absolute inset-0 ${overlay} pointer-events-none`} />
      ) : null}

      {/* Content layer */}
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
}

/*
Usage (copy into your page/component):

import PatternBackground from './PatternBackground';

export default function Home() {
  return (
    <PatternBackground src='/pattern.svg' tileSize={120} overlay='bg-white/6'>
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello — pattern!</h1>
      </main>
    </PatternBackground>
  );
}

Notes & tips:
- Put your SVG in the public folder (public/pattern.svg) and reference it with '/pattern.svg'.
- Adjust tileSize (px) to control how large each repeated tile is.
- If you want crisp rendering on high-DPI screens, consider using SVGs with intrinsic size or serve higher-resolution assets.
- For CSS-only approach (no inline style), you could create a utility in your global CSS that sets background-image and background-size with fixed values.
*/
