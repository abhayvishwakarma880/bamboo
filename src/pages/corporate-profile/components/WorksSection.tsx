import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import RevealSection from './RevealSection';
import SectionHeading from './SectionHeading';
import { getDefaultPortfolioIdForEventType } from '../../../lib/eventRoute';

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
}

const EventCard: React.FC<EventCardProps> = ({ event, resolvedPortfolioId }) => {
  console.log('EventCard received event data:', event);
  const [imageStart, setImageStart] = React.useState(0);
  const images = event.images ?? [];
  const maxImageStart = Math.max(0, images.length - IMAGES_VISIBLE);
  const visibleImages = images.slice(imageStart, imageStart + IMAGES_VISIBLE);

  const handleImagePrev = () => setImageStart((s) => Math.max(0, s - 1));
  const handleImageNext = () => setImageStart((s) => Math.min(maxImageStart, s + 1));

  return (
    <div className="overflow-hidden rounded-4xl border border-accent/25 bg-[#080c06]/95 p-5 shadow-[0_12px_50px_rgba(0,0,0,0.42)] md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">{event.title}</h3>
          <p className="mt-1 text-sm text-white/55 sm:text-base">
            {event.clientName} • {event.location}
          </p>
        </div>
        <span className="rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d8ef9f]">
          {event.eventType || 'Corporate'}
        </span>
      </div>

      <div className="my-5 h-px w-full bg-white/10" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <div
          className="grid gap-1 bg-white/10"
          style={{ gridTemplateColumns: `repeat(${Math.max(1, visibleImages.length)}, minmax(0, 1fr))` }}
        >
          {visibleImages.length > 0 ? (
            visibleImages.map((img, idx) => (
              <div key={`${event.id}-${idx}`} className="relative aspect-16/10 overflow-hidden bg-black/35">
                <img
                  src={`${IMAGE_BASE_URL}${img.url}`}
                  alt={img.caption ?? event.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="flex h-48 w-full items-center justify-center text-xs text-white/20">No images available</div>
          )}
        </div>

        {/* date badge removed as requested */}

        {imageStart > 0 && (
          <button
            type="button"
            aria-label={`Previous images for ${event.title}`}
            onClick={handleImagePrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white transition hover:bg-accent hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {imageStart < maxImageStart && (
          <button
            type="button"
            aria-label={`Next images for ${event.title}`}
            onClick={handleImageNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white transition hover:bg-accent hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {images.length > IMAGES_VISIBLE && (
          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/40 px-2 py-1">
            {Array.from({ length: maxImageStart + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setImageStart(i)}
                aria-label={`Go to images set ${i + 1} for ${event.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === imageStart ? 'w-5 bg-accent' : 'w-1.5 bg-white/45 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const WorksSection: React.FC = () => {
  const { portfolioId: portfolioIdParam } = useParams<{ portfolioId?: string }>();
  const [searchParams] = useSearchParams();
  const [events, setEvents] = React.useState<PortfolioEvent[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const requestedPortfolioIdFromPath = portfolioIdParam?.trim();
  const requestedPortfolioId = searchParams.get('portfolioId')?.trim();
  const parsedPortfolioId = Number(requestedPortfolioIdFromPath ?? requestedPortfolioId ?? Number.NaN);
  const resolvedPortfolioId =
    Number.isInteger(parsedPortfolioId) && parsedPortfolioId > 0
      ? parsedPortfolioId
      : getDefaultPortfolioIdForEventType('corporate');

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
        // Agar clientName blank/null hai toh use list me rehne denge
        uniqueEvents.push(event);
      }
    }
    return uniqueEvents;
  }, [events]);

  return (
    <RevealSection
      id="works"
      observerOptions={{ threshold: 0.02, rootMargin: '0px 0px -2% 0px' }}
      className="bg-background px-5 py-20 sm:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading centered title="Works Done Recently at a Glance" />

        {/* Loading */}
        {loading && (
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

        {/* Error */}
        {error && !loading && (
          <div className="mt-12 flex justify-center">
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && sortedEvents.length === 0 && (
          <p className="mt-12 text-center text-sm text-white/30">Koi event nahi mila.</p>
        )}

        {/* Events List */}
        {!loading && !error && sortedEvents.length > 0 && (
          <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6">
            {sortedEvents.slice(0, 5).map((event) => (
              <EventCard key={event.id} event={event} resolvedPortfolioId={resolvedPortfolioId} />
            ))}
          </div>
        )}

        {/* View All */}
        <div className="mt-10 flex justify-center">
          <Link
            to={`/corporate-events?portfolioId=${resolvedPortfolioId}`}
            className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background transition duration-300 hover:-translate-y-0.5 hover:bg-[#9cc340]"
          >
            View All Events
          </Link>
        </div>
      </div>
    </RevealSection>
  );
};

export default WorksSection;