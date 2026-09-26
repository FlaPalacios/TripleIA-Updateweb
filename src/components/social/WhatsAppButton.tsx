import { motion, useReducedMotion } from "framer-motion";
import { company } from "../../data/site";

export const WHATSAPP_ICON = "/assets/brand/whatsapp-verde.png";

export function WhatsAppButton() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={company.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 rounded-full shadow-lg shadow-black/25 transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
      transition={reduceMotion ? undefined : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-20 [animation-duration:2.5s]"
      />
      <img src={WHATSAPP_ICON} alt="" className="relative h-full w-full" />
    </motion.a>
  );
}
