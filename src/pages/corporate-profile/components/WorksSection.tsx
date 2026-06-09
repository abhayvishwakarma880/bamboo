import React from 'react';
import { Link, useParams, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';
import { getDefaultPortfolioIdForEventType, resolvePortfolioId, getPortfolioPathValue } from '../../../lib/eventRoute';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const IMAGE_BASE_URL = 'https://bg.codecrafter.co.in';

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

const getEventSortTimestamp = (event: PortfolioEvent) => {
  const rawDate = event.eventDate?.trim();
  const rawStartTime = event.startTime?.trim();
  const combined = rawDate && rawStartTime ? `${rawDate}T${rawStartTime}` : rawDate || '';
  const parsed = combined ? new Date(combined).getTime() : Number.NaN;
  return Number.isNaN(parsed) ? 0 : parsed;
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const IMAGES_VISIBLE = 3;

interface EventCardProps {
  event: PortfolioEvent;
  resolvedPortfolioId: number;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, resolvedPortfolioId, index }) => {
  console.log('EventCard received event data:', event);
  const navigate = useNavigate();
  const [imageStart, setImageStart] = React.useState(0);
  const images = event.images ?? [];
  const maxImageStart = Math.max(0, images.length - IMAGES_VISIBLE);
  const visibleImages = images.slice(imageStart, imageStart + IMAGES_VISIBLE);

  const handleImagePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageStart((s) => Math.max(0, s - 1));
  };
  const handleImageNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageStart((s) => Math.min(maxImageStart, s + 1));
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    navigate(
      `/corporate-events?portfolioId=${getPortfolioPathValue(resolvedPortfolioId)}&client=${encodeURIComponent(event.clientName || '')}`
    );
  };

  const formattedDate = formatDate(event.eventDate);

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/8 bg-[#080c06]/95 shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-accent/40 hover:shadow-[0_16px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(163,212,80,0.08)]"
    >
      {/* Top accent line that reveals on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-5 md:p-7">
        {/* ── Header ── */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Event type eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70 inline-block" />
                {event.eventType || 'Corporate'}
              </span>
              {formattedDate && (
                <span className="text-[11px] text-white/30 tracking-wide">{formattedDate}</span>
              )}
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl leading-snug">
              {event.title}
            </h3>
          </div>

          {/* Arrow icon — appears on hover */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent">
            <svg className="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {event.clientName && (
            <span className="flex items-center gap-1.5 text-sm text-white/45">
              <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {event.clientName}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1.5 text-sm text-white/45">
              <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-5 h-px w-full bg-gradient-to-r from-white/10 via-white/6 to-transparent" />

        {/* ── Image Grid ── */}
        <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-black/40">
          <div
            className="grid gap-0.5"
            style={{ gridTemplateColumns: `repeat(${Math.max(1, visibleImages.length)}, minmax(0, 1fr))` }}
          >
            {visibleImages.length > 0 ? (
              visibleImages.map((img, idx) => {
                let aspectClass = 'aspect-[16/10]';
                if (visibleImages.length === 1) {
                  aspectClass = 'aspect-[21/9] md:aspect-[3/1] max-h-[300px] sm:max-h-[350px] md:max-h-[400px]';
                } else if (visibleImages.length === 2) {
                  aspectClass = 'aspect-[16/9] md:aspect-[21/10] max-h-[300px] sm:max-h-[350px] md:max-h-[400px]';
                }
                return (
                  <div key={`${event.id}-${idx}`} className={`relative ${aspectClass} overflow-hidden bg-black/35`}>
                    <img
                      src={`${IMAGE_BASE_URL}${img.url}`}
                      alt={img.caption ?? event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Per-image subtle overlay that lifts on hover */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                );
              })
            ) : (
              <div className="flex h-48 w-full items-center justify-center gap-2 text-xs text-white/20">
                <svg className="h-5 w-5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 21h18M3 3h18" />
                </svg>
                No images available
              </div>
            )}
          </div>

          {/* Prev button */}
          {imageStart > 0 && (
            <button
              type="button"
              aria-label={`Previous images for ${event.title}`}
              onClick={handleImagePrev}
              className="absolute left-2.5 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent hover:text-black"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next button */}
          {imageStart < maxImageStart && (
            <button
              type="button"
              aria-label={`Next images for ${event.title}`}
              onClick={handleImageNext}
              className="absolute right-2.5 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-accent hover:text-black"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Dot pagination */}
          {images.length > IMAGES_VISIBLE && (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1.5 backdrop-blur-sm">
              {Array.from({ length: maxImageStart + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setImageStart(i); }}
                  aria-label={`Go to images set ${i + 1} for ${event.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === imageStart ? 'w-5 bg-accent' : 'w-1.5 bg-white/35 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Image count badge */}
          {images.length > 0 && (
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 backdrop-blur-sm">
              <svg className="h-3 w-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
              </svg>
              <span className="text-[10px] font-medium text-white/50 tracking-wide">{images.length}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const WorksSection: React.FC = () => {
  const location = useLocation();
  const { portfolioId: portfolioIdParam } = useParams<{ portfolioId?: string }>();
  const [searchParams] = useSearchParams();
  const [events, setEvents] = React.useState<PortfolioEvent[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const requestedPortfolioIdFromPath = portfolioIdParam?.trim();
  const requestedPortfolioId = searchParams.get('portfolioId')?.trim();
  const parsedPortfolioId = resolvePortfolioId(requestedPortfolioIdFromPath ?? requestedPortfolioId);

  const isSocialRoute = location.pathname.includes('/social-profile');
  const resolvedPortfolioId =
    parsedPortfolioId !== undefined
      ? parsedPortfolioId
      : getDefaultPortfolioIdForEventType(isSocialRoute ? 'social' : 'corporate');

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${BASE_URL}/portfolio/${resolvedPortfolioId}`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const json = await res.json();
        console.log('API Response for portfolio:', resolvedPortfolioId, json);
        if (json.success) {
          setEvents(json.data.events);
        } else {
          setError('Data load nahi hua.');
        }
      } catch (err: any) {
        setError(err.message ?? 'Network error aaya.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [resolvedPortfolioId]);

  const sortedEvents = React.useMemo(() => {
    const sorted = [...events].sort((a, b) => {
      const diff = getEventSortTimestamp(b) - getEventSortTimestamp(a);
      return diff !== 0 ? diff : b.id - a.id;
    });
    const seenClients = new Set<string>();
    const uniqueEvents: PortfolioEvent[] = [];
    for (const event of sorted) {
      const client = event.clientName?.trim().toLowerCase();
      if (client) {
        if (!seenClients.has(client)) {
          seenClients.add(client);
          uniqueEvents.push(event);
        }
      } else {
        uniqueEvents.push(event);
      }
    }
    return uniqueEvents;
  }, [events]);

  return (
    <RevealSection
      id="works"
      observerOptions={{ threshold: 0.02, rootMargin: '0px 0px -2% 0px' }}
      className="relative bg-background px-5 py-20 sm:px-10 lg:py-28 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <SectionHeading centered title="Works Done Recently at a Glance" />
          <p className="text-sm text-white/30 tracking-wide mt-1">
            A curated showcase of our recent craft
          </p>
        </div>

        <div className="mt-3 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Loading */}
        {loading && (
          <div className="mt-16 flex flex-col gap-4 mx-auto max-w-6xl">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-3xl border border-white/6 bg-white/3 animate-pulse"
                style={{ animationDelay: `${i * 120}ms` }}
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-3 rounded-2xl border border-red-500/15 bg-red-500/8 px-6 py-4">
              <svg className="h-5 w-5 text-red-400/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <p className="text-sm text-red-400/80">{error}</p>
            </div>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && sortedEvents.length === 0 && (
          <div className="mt-16 flex flex-col items-center gap-3 text-white/25">
            <svg className="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
            </svg>
            <p className="text-sm tracking-wide">No events found.</p>
          </div>
        )}

        {/* Events List */}
        {!loading && !error && sortedEvents.length > 0 && (
          <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-5">
            {sortedEvents.slice(0, 5).map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                resolvedPortfolioId={resolvedPortfolioId}
                index={index}
              />
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to={`/corporate-events?portfolioId=${getPortfolioPathValue(resolvedPortfolioId)}`}
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9cc340] hover:shadow-[0_8px_30px_rgba(163,212,80,0.25)]"
          >
            {/* Shine sweep */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <span className="relative">View All Events</span>
            <svg
              className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bottom fade line */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>
    </RevealSection>
  );
};

export default WorksSection;