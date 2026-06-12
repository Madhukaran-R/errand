"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState, useMemo } from "react";

export default function LottieAnimation({ src, className, ariaLabel }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Prepend basePath for GitHub Pages deployment
  const assetPath = useMemo(() => {
    if (typeof window !== "undefined" && !src.startsWith("/errand")) {
      return `/errand${src}`;
    }
    return src;
  }, [src]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <DotLottieReact
      src={assetPath}
      className={className}
      autoplay={!reducedMotion}
      loop={!reducedMotion}
      aria-label={ariaLabel}
    />
  );
}
