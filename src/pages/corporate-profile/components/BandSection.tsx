"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { bandData } from "../data";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface BandItem {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
}

// ─── Arrow Icon ────────────────────────────────────────────────────────────────

const ArrowIcon = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={dir === "left" ? "rotate-180" : ""}>
    <path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Band Card ─────────────────────────────────────────────────────────────────

const BandCard = ({ band, onLinkClick }: { band: BandItem; onLinkClick: (e: React.MouseEvent) => void }) => (
  <div
    className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)] group cursor-pointer select-none transition-all duration-500 hover:border-[#88ab32]/35 hover:shadow-[0_20px_60px_rgba(136,171,50,0.12)]"
    style={{ height: "280px" }}
  >
    <img src={band.image} alt={band.title} draggable={false} className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.06]" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
    <p className="absolute left-4 right-4 bottom-4 text-[15px] font-semibold text-[#f5f5f5] leading-tight tracking-[0.01em] transition-all duration-400 ease-out group-hover:-translate-y-[84px]">
      {band.title}
    </p>
    <div className="absolute left-4 right-4 bottom-4 flex flex-col gap-2.5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
      <p className="text-[12px] text-white/65 leading-relaxed">{band.description}</p>
      <a
        href={band.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onLinkClick}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#88ab32]/40 bg-[#88ab32] text-black text-[11px] font-semibold tracking-[0.08em] uppercase w-fit hover:opacity-90"
      >
        View Profile
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </div>
);

// ─── Carousel Hook ─────────────────────────────────────────────────────────────

const CARD_GAP = 20;

const useCarousel = (totalItems: number) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const didDragRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const offsetRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [visibleCards, setVisibleCards] = useState(4);

  const getCardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 260;
    const container = track.parentElement;
    if (!container) return 260;
    const w = container.offsetWidth;
    if (w < 640) return Math.min(w * 0.82, 240);
    if (w < 1024) return Math.floor((w - CARD_GAP * 3) / 2);
    return Math.floor((w - CARD_GAP * 5) / 4);
  }, []);

  const updateVisibleCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const container = track.parentElement;
    if (!container) return;
    const w = container.offsetWidth;
    if (w < 640) setVisibleCards(1);
    else if (w < 1024) setVisibleCards(2);
    else setVisibleCards(4);
  }, []);

  const getOffset = useCallback((index: number) => -(index * (getCardWidth() + CARD_GAP)), [getCardWidth]);

  const animateTo = useCallback((targetOffset: number) => {
    const track = trackRef.current;
    if (!track) return;
    const start = offsetRef.current;
    const delta = targetOffset - start;
    const duration = 600;
    const startTime = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = start + delta * ease(progress);
      offsetRef.current = current;
      track.style.transform = `translateX(${current}px)`;
      if (progress < 1) animFrameRef.current = requestAnimationFrame(animate);
    };
    cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, totalItems - visibleCards));
    setCurrentIndex(clamped);
    animateTo(getOffset(clamped));
  }, [totalItems, visibleCards, animateTo, getOffset]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const max = totalItems - visibleCards;
      const n = prev >= max ? 0 : prev + 1;
      animateTo(getOffset(n));
      return n;
    });
  }, [totalItems, visibleCards, animateTo, getOffset]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      const max = totalItems - visibleCards;
      const p = prev <= 0 ? max : prev - 1;
      animateTo(getOffset(p));
      return p;
    });
  }, [totalItems, visibleCards, animateTo, getOffset]);

  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(next, 3200);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [isPaused, next]);

  useEffect(() => {
    const handleResize = () => {
      updateVisibleCards();
      const track = trackRef.current;
      if (!track) return;
      const offset = getOffset(currentIndex);
      offsetRef.current = offset;
      track.style.transform = `translateX(${offset}px)`;
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, getOffset, updateVisibleCards]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
    setIsDragging(true);
    didDragRef.current = false;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    cancelAnimationFrame(animFrameRef.current);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 5) didDragRef.current = true;
    const newOffset = dragStartOffset.current + delta;
    offsetRef.current = newOffset;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${newOffset}px)`;
  }, [isDragging]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - dragStartX.current;
    const threshold = getCardWidth() * 0.25;
    if (delta < -threshold) next();
    else if (delta > threshold) prev();
    else goTo(currentIndex);
  }, [isDragging, getCardWidth, next, prev, goTo, currentIndex]);

  const onLinkClick = useCallback((e: React.MouseEvent) => {
    if (didDragRef.current) e.preventDefault();
  }, []);

  return { trackRef, currentIndex, visibleCards, isPaused, setIsPaused, isDragging, next, prev, goTo, onPointerDown, onPointerMove, onPointerUp, onLinkClick };
};

// ─── Main Component ────────────────────────────────────────────────────────────

const BandSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { trackRef, currentIndex, visibleCards, isPaused, setIsPaused, isDragging, next, prev, goTo, onPointerDown, onPointerMove, onPointerUp, onLinkClick } = useCarousel(bandData.length);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const dotCount = Math.max(1, bandData.length - visibleCards + 1);

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-3/5 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.07)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-3/5 bg-[radial-gradient(circle_at_bottom_right,rgba(136,171,50,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">
        <div className={`mb-14 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#88ab32]" />
            <span className="text-[11px] tracking-[0.2em] text-[#88ab32] uppercase font-medium">Entertainment</span>
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap w-full">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-[clamp(28px,4vw,48px)] font-light text-[#f5f5f5] leading-[1.15] tracking-[-0.02em] mb-3.5">Our Bands</h2>
              <p className="text-[15px] text-white/[0.45] leading-relaxed tracking-[0.01em] max-w-[560px]">
                Discover a curated portfolio of professional live bands, fusion artists, acoustic performers, and premium musical acts crafted for unforgettable corporate and luxury events.
              </p>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              {(["left", "right"] as const).map((dir) => (
                <button key={dir} onClick={dir === "left" ? prev : next} aria-label={dir === "left" ? "Previous" : "Next"}
                  className="w-12 h-12 rounded-full border border-white/[0.12] bg-white/[0.04] text-white/70 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#88ab32]/50 hover:bg-[#88ab32]/10 hover:text-[#88ab32]">
                  <ArrowIcon dir={dir} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className={`overflow-hidden select-none touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
            <div ref={trackRef} className="flex will-change-transform" style={{ gap: `${CARD_GAP}px` }}>
              {bandData.map((band, i) => (
                <div key={band.id}
                  className={`flex-shrink-0 transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ width: "clamp(200px, 22vw, 260px)", transitionDelay: `${0.08 * Math.min(i, 6)}s` }}>
                  <BandCard band={band} onLinkClick={onLinkClick} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-9">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${currentIndex === i ? "w-6 bg-[#88ab32]" : "w-1.5 bg-white/20"}`} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/live-bands"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/15 text-white/70 text-[12px] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:border-[#88ab32]/50 hover:text-[#88ab32] hover:bg-[#88ab32]/[0.06]">
              View All
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandSection;
