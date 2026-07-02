"use client";

import { useState } from "react";

export default function ProductImage({
  src,
  alt,
  wm,
}: {
  src?: string;
  alt: string;
  wm: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <span className="wm">{wm}</span>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="prod-img"
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
