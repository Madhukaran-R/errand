"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const DotLottiePlayer = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

const BASE_PATH = "/errand";

const resolveAssetPath = (path) => {
  if (typeof path !== "string") return path;
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  if (path.startsWith(`${BASE_PATH}/`)) return path;
  return path.startsWith("/") ? `${BASE_PATH}${path}` : `${BASE_PATH}/${path}`;
};

export default function LottieAnimation({ src, className, ariaLabel }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  const assetPath = useMemo(() => resolveAssetPath(src), [src]);

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
