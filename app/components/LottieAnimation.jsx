"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const DotLottiePlayer = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

export default function LottieAnimation({ src, className, ariaLabel }) {
  const [reducedMotion, setReducedMotion] = useState(false);

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
    <DotLottiePlayer
      src={assetPath}
      className={className}
      autoplay={!reducedMotion}
      loop={!reducedMotion}
      aria-label={ariaLabel}
    />
  );
}
