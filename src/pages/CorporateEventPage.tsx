import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Building2, Images, MapPin, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { getDefaultPortfolioIdForEventType } from "../lib/eventRoute";

const IMAGE_BASE_URL = "https://bg.codecrafter.co.in";
const PORTFOLIO_API_URL = import.meta.env.VITE_BACKEND_URL;

interface EventImage {
  id: number;
  url: string;
  caption: string | null;
}

interface PortfolioEvent {
  id: number;
  title: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  clientName: string;
  eventType: string;
  notes: string;
  images: EventImage[];
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{
  images: EventImage[];
  initialIndex: number;
  title: string;
  onClose: () => void;
}> = ({ images, initialIndex, title, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  const active = images[index];

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/75 px-4 py-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Compact modal */}
      <div className="relative my-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1209] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
          <div className="flex items-center gap-2 min-w-0">
            <p className="truncate text-sm font-semibold text-white">{title}</p>
            <span className="shrink-0 text-xs text-white/35">{index + 1}/{images.length}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:bg-white/12"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
          <img
            key={active.id}
            src={`${IMAGE_BASE_URL}${active.url}`}
            alt={active.caption ?? title}
            className="h-full w-full object-cover transition-opacity duration-200"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white transition hover:bg-black/80"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white transition hover:bg-black/80"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails strip */}
        {images.length > 1 && (
          <div className="flex gap-1.5 overflow-x-auto px-3 py-2.5 scrollbar-none">
            {images.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-11 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all duration-150 ${
                  i === index
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-40 hover:opacity-65"
                }`}
              >
                <img
                  src={`${IMAGE_BASE_URL}${img.url}`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// ── Event Card ─────────────────────────────────────────────────────────────────
const EventCard: React.FC<{
  event: PortfolioEvent;
  onOpen: (images: EventImage[], title: string) => void;
}> = ({ event, onOpen }) => {
  const cover = event.images[0];

  return (
    <button
      type="button"
      onClick={() => event.images.length > 0 && onOpen(event.images, event.title)}
      className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0d1209] text-left transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Cover image */}
      {cover ? (
        <img
          src={`${IMAGE_BASE_URL}${cover.url}`}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#111a08]">
          <Images className="h-10 w-10 text-white/15" />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Badge with glassmorphism blur */}
      <div className="absolute right-3 top-3">
        <span className="rounded-full border border-accent/30 bg-black/45 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#638303]">
          {event.images.length} photos
        </span>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {event.eventType}
        </p>
        <h3 className="mt-1 text-xs font-semibold leading-snug text-white">
          {event.title}
        </h3>
        {event.location && (
          <p className="mt-1 flex items-center gap-1 text-xs text-white/45">
            <MapPin className="h-3 w-3 shrink-0" />
            {event.location}
          </p>
        )}
      </div>
    </button>
  );
};

// ── Client Card ────────────────────────────────────────────────────────────────
const ClientCard: React.FC<{
  clientName: string;
  events: PortfolioEvent[];
  onClick: () => void;
}> = ({ clientName, events, onClick }) => {
  const cover = events.find((e) => e.images.length > 0)?.images[0];
  const totalPhotos = events.reduce((s, e) => s + e.images.length, 0);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0d1209] text-left transition-transform duration-200 hover:scale-[1.02] focus:outline-none"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Cover image */}
      {cover ? (
        <img
          src={`${IMAGE_BASE_URL}${cover.url}`}
          alt={clientName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#111a08]">
          <Building2 className="h-10 w-10 text-white/15" />
        </div>
      )}

      {/* Gradient overlay from bottom to make text highly readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

      {/* Stats badges with glassmorphism blur */}
      <div className="absolute right-3 top-3 flex flex-col gap-1.5 items-end">
        <span className="rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium text-white/80">
          {events.length} {events.length === 1 ? "event" : "events"}
        </span>
        <span className="rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-semibold text-[#d6e8a1]">
          {totalPhotos} photos
        </span>
      </div>

      {/* Client name */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Client</p>
        <h3 className="mt-1 text-xs font-bold uppercase tracking-[0.06em] text-white">
          {clientName}
        </h3>
      </div>
    </button>
  );
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const CorporateEventPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [events, setEvents] = useState<PortfolioEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);

  // Navigation: null = client grid, string = selected client's events
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  // Lightbox
  const [lightboxImages, setLightboxImages] = useState<EventImage[]>([]);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (images: EventImage[], title: string) => {
    setLightboxImages(images);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  useEffect(() => {
    const requestedPortfolioId = searchParams.get("portfolioId")?.trim();
    const parsedPortfolioId = requestedPortfolioId ? Number(requestedPortfolioId) : Number.NaN;
    const portfolioId =
      Number.isInteger(parsedPortfolioId) && parsedPortfolioId > 0
        ? String(parsedPortfolioId)
        : String(getDefaultPortfolioIdForEventType("corporate"));

    const fetchEvents = async () => {
      try {
        setEventsLoading(true);
        setEventsError(null);
        const res = await fetch(`${PORTFOLIO_API_URL}/portfolio/${portfolioId}`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const json = await res.json();
        if (json.success) {
          setEvents(json.data.events);
          
          // Auto-select client if 'client' param is present in URL
          const clientParam = searchParams.get("client")?.trim();
          if (clientParam) {
            const match = json.data.events.find(
              (e: any) => e.clientName?.trim().toLowerCase() === clientParam.toLowerCase()
            );
            if (match) {
              setSelectedClient(match.clientName.trim());
            }
          }
        } else {
          setEventsError("Data load nahi hua.");
        }
      } catch (err: any) {
        setEventsError(err.message ?? "Network error aaya.");
      } finally {
        setEventsLoading(false);
      }
    };

    fetchEvents();
  }, [searchParams]);

  const requestedCompanyName =
    searchParams.get("companyName")?.trim() ??
    searchParams.get("company")?.trim() ??
    "";

  // Group events by client
  const eventsByClient = React.useMemo(() => {
    const filtered = requestedCompanyName
      ? events.filter((e) => (e.clientName || "").trim() === requestedCompanyName)
      : events;

    return filtered.reduce((acc: Record<string, PortfolioEvent[]>, ev) => {
      const key = ev.clientName?.trim() || "Unknown";
      if (!acc[key]) acc[key] = [];
      acc[key].push(ev);
      return acc;
    }, {});
  }, [events, requestedCompanyName]);

  const clientList = Object.keys(eventsByClient);
  const selectedClientEvents = selectedClient ? eventsByClient[selectedClient] ?? [] : [];

  // Stats for header
  const visibleEvents = selectedClient ? selectedClientEvents : events;
  const totalClients = clientList.length;
  const totalEvents = selectedClient ? selectedClientEvents.length : events.length;
  const totalLocations = new Set(visibleEvents.map((e) => e.location).filter(Boolean)).size;

  return (
    <main className="min-h-screen bg-[#070a05] px-5 pb-20 pt-28 text-[#f5f5f5] sm:px-8 sm:pt-32 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ── Hero Header ── */}
        <section className="overflow-hidden rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(136,171,50,0.18),transparent_30%),linear-gradient(135deg,#101709_0%,#0a0f07_55%,#070a05_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Corporate Events
              </p>
              <h1 className="mt-4 max-w-2xl text-2xl font-bold tracking-[0.03em] text-white sm:text-3xl lg:text-4xl">
                {requestedCompanyName
                  ? `${requestedCompanyName} Event Highlights`
                  : selectedClient
                  ? `${selectedClient} — Events`
                  : "Corporate Event Highlights"}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                {selectedClient
                  ? `Showing all events for ${selectedClient}. Click any event to view its photos.`
                  : "Select a client to explore their events and captured moments."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Clients</p>
                <div className="mt-3 flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-white">{totalClients}</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Events</p>
                <div className="mt-3 flex items-center gap-3">
                  <Images className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-white">{totalEvents}</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Locations</p>
                <div className="mt-3 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-white">{totalLocations}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Loading ── */}
        {eventsLoading && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 text-white/40">
              <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <span className="text-sm">Loading events...</span>
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {eventsError && !eventsLoading && (
          <div className="mt-12 flex justify-center">
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm text-red-400">
              {eventsError}
            </p>
          </div>
        )}

        {/* ── Empty ── */}
        {!eventsLoading && !eventsError && events.length === 0 && (
          <section className="mt-10 rounded-[28px] border border-white/10 bg-[#0d1209]/85 p-6 text-center">
            <p className="text-sm text-white/40">Koi event nahi mila.</p>
          </section>
        )}

        {/* ── Client Grid ── */}
        {!eventsLoading && !eventsError && events.length > 0 && !selectedClient && (
          <section className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {clientList.map((client) => (
                <ClientCard
                  key={client}
                  clientName={client}
                  events={eventsByClient[client]}
                  onClick={() => setSelectedClient(client)}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Selected Client: Event Cards Grid ── */}
        {!eventsLoading && !eventsError && selectedClient && (
          <section className="mt-10">
            {/* Back button */}
            <button
              type="button"
              onClick={() => setSelectedClient(null)}
              className="mb-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/4 px-4 py-2 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All Clients
            </button>

            {selectedClientEvents.length === 0 ? (
              <p className="text-sm text-white/40">Is client ke liye koi event nahi mila.</p>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {selectedClientEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onOpen={openLightbox}
                  />
                ))}
              </div>
            )}
          </section>
        )}

      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          initialIndex={0}
          title={lightboxTitle}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </main>
  );
};

export default CorporateEventPage;
