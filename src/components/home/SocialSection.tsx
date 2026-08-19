import Image from "next/image";
import { siteContent } from "../../content/site";
import { Reveal } from "../ui/Reveal";

export function SocialSection() {
  return (
    <section className="section social-section" aria-labelledby="social-title">
      <div className="container social-layout">
        <Reveal className="social-visual">
          <a href={siteContent.socials.tiktokVideo} target="_blank" rel="noreferrer">
            <Image
              src="/assets/social/entrevista-coralith.jpg"
              alt="Entrevista de Triple IA a la investigadora Coralith García"
              fill
              sizes="(max-width: 820px) 100vw, 460px"
            />
            <span className="video-index">Entrevista / 01:01</span>
            <span className="play-label">Ver en TikTok</span>
          </a>
        </Reveal>

        <Reveal className="social-copy" delay={90}>
          <p className="section-kicker">Ciencia en conversación</p>
          <h2 id="social-title">También participamos y difundimos el ecosistema.</h2>
          <p>
            Conversamos con investigadores, compartimos oportunidades y
            acercamos la ciencia, la innovación y el financiamiento a nuevas
            comunidades.
          </p>
          <blockquote>
            “¿Qué investigador inspira a Coralith García?”
            <span>Fragmento de una entrevista realizada por Triple IA.</span>
          </blockquote>
          <div className="social-links">
            <a href={siteContent.socials.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={siteContent.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteContent.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
