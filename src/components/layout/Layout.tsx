import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../social/WhatsAppButton";
import { ScrollToHash } from "./ScrollToHash";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    // reducedMotion="user": framer respeta "reducir movimiento" del sistema.
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-off-white text-black">
        <ScrollToHash />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
