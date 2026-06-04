import React, { useState } from 'react';
import { content } from '@/config/content';
import whatsappVerde from '@/assets/whatsapp-verde.png';
import whatsappHover from '@/assets/whatsapp.png';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={content.company.socials.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] transition-transform duration-300 hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contactar por WhatsApp"
    >
      <img
        src={isHovered ? whatsappHover : whatsappVerde}
        alt="WhatsApp"
        className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-xl transition-all duration-300"
      />
    </a>
  );
};
