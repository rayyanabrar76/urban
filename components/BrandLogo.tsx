"use client";

import { useState, type ReactNode } from "react";

export default function BrandLogo({
  width,
  height,
  className,
  fallback,
}: {
  width: number;
  height: number;
  className?: string;
  fallback: ReactNode;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo2.png"
      alt="Urban Store"
      width={width}
      height={height}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
