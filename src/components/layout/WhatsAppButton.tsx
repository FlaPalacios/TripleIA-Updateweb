"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent } from "../../content/site";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className="whatsapp-button"
      href={siteContent.socials.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a Triple IA por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={
          hovered
            ? "/assets/brand/whatsapp.png"
            : "/assets/brand/whatsapp-verde.png"
        }
        alt=""
        width={48}
        height={48}
        unoptimized
      />
    </a>
  );
}
