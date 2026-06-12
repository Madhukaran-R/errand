"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

export default function LottieAnimation({ src, className, ariaLabel }) {
  const [reducedMotion, setReducedMotion] = useState(false);

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
      src={src}
      className={className}
      autoplay={!reducedMotion}
      loop={!reducedMotion}
      aria-label={ariaLabel}
    />
  );
}
