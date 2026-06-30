import { Link } from "react-router-dom";
import { NoticiaCard } from "./NoticiaCard";
import { getAllPosts } from "@/lib/posts";
import { useContent } from "@/data/oria";
import { useEffect, useRef, useState, useCallback } from "react";

export const NoticiasHome = () => {
  const { lang } = useContent();
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  const label = lang === "en" ? "News" : "Notícias";
  const heading = lang === "en"
    ? "Stay close to what's moving the market."
    : "Fique por dentro do que acontece no mercado.";
  const cta = lang === "en" ? "View all news" : "Ver todas as notícias";

  return (
    <section id="noticias" className="bg-background py-20 md:py-28">
      <div className="container-oria">
        {/* Título alinhado à esquerda */}
        <div className="mb-12 reveal max-w-[820px]">
          <div className="font-mono-label text-[11px] text-muted mb-5">{label}</div>
          <h2 className="text-foreground font-medium text-[clamp(26px,4vw,42px)] tracking-tight leading-[1.15]">
            {heading}
          </h2>
        </div>

        <NoticiasCarousel posts={posts} />

        <div className="mt-14 flex justify-center">
          <Link to="/noticias" className="btn-primary">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── Carousel ────────────────────────────────────────────────────────────────

function NoticiasCarousel({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  const VISIBLE_DESKTOP = 3;
  const VISIBLE_MOBILE = 2;
  const AUTOPLAY_MS = 30_000;

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inViewRef = useRef(false);

  const visible = isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
  const total = posts.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Autoplay: start only when in view
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next, AUTOPLAY_MS]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inViewRef.current) {
          inViewRef.current = true;
          startTimer();
        } else if (!entry.isIntersecting && inViewRef.current) {
          inViewRef.current = false;
          stopTimer();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); stopTimer(); };
  }, [startTimer, stopTimer]);

  // Build visible cards (loop)
  const visiblePosts = Array.from({ length: visible }, (_, i) => posts[(index + i) % total]);

  return (
    <div ref={sectionRef} className="relative reveal">
      {/* Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3">
        {visiblePosts.map((p, i) => (
          <NoticiaCard key={`${p.slug}-${index}-${i}`} post={p} />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Notícia anterior"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-rule text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-[6px] items-center">
          {posts.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setIndex(i); if (inViewRef.current) startTimer(); }}
              aria-label={`Ir para notícia ${i + 1}`}
              className={`w-[7px] h-[7px] rounded-full transition-colors duration-200 ${
                i === index ? "bg-accent" : "bg-rule"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Próxima notícia"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-rule text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
