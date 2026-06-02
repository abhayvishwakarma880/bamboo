import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img80 from "../../assets/society-services-images/img80.jpg"
import img78 from "../../assets/society-services-images/img78.jpg"
import img82 from "../../assets/society-services-images/img82.jpg"
import img79 from "../../assets/society-services-images/img79.jpg"
import img81 from "../../assets/society-services-images/img81.jpg"
import img83 from "../../assets/society-services-images/img83.jpg"
import img89 from "../../assets/society-services-images/img89.jpg"
import img88 from "../../assets/society-services-images/img88.jpg"
import img91 from "../../assets/society-services-images/img91.jpg"
import img90 from "../../assets/society-services-images/img90.jpg"
import img92 from "../../assets/society-services-images/img92.jpg"
import img105 from "../../assets/society-services-images/img105.jpg"
import img107 from "../../assets/society-services-images/img107.jpg"
import img106 from "../../assets/society-services-images/img106.jpg"
import img108 from "../../assets/society-services-images/img108.jpg"
import img113 from "../../assets/society-services-images/img113.jpg"
import img114 from "../../assets/society-services-images/img114.jpg"
import img115 from "../../assets/society-services-images/img115.jpg"
import welcomeProps1 from "../../assets/society-services-images/welcomeProps1.jpg"
import welcomeProps2 from "../../assets/society-services-images/welcomeProps2.jpg"
import welcomeProps3 from "../../assets/society-services-images/welcomeProps3.jpg"
import img120 from "../../assets/society-services-images/img120.jpg"
import img121 from "../../assets/society-services-images/img121.jpg"
import maleFemale1 from "../../assets/society-services-images/maleFemale1.jpg"
import maleFemale2 from "../../assets/society-services-images/maleFemale2.jpg"
import cabs2 from "../../assets/society-services-images/cabs1.jpg"
import cabs3 from "../../assets/society-services-images/cabs3.jpg"
import cabs4 from "../../assets/society-services-images/cabs4.jpg"
import cabs5 from "../../assets/society-services-images/cabs5.jpg"
import water2 from "../../assets/society-services-images/water2.jpg"
import water1 from "../../assets/society-services-images/water1.png"
import water3 from "../../assets/society-services-images/water3.png"
import neon1 from "../../assets/society-services-images/neon1.png"
import neon2 from "../../assets/society-services-images/neon2.jpg"
import thank1 from "../../assets/society-services-images/thank1.jpg"
import thank2 from "../../assets/society-services-images/thank2.png"

interface ServiceImage {
  id: number;
  url: string;
  title: string | null;
  modalImages?: { id: number; url: string; title: string | null }[];
}

interface Service {
  id: number;
  serviceName: string;
  description: string;
  images: ServiceImage[];
}

// ── Static services list (with custom modal images for each individual card) ──
const SOCIAL_SERVICES_DATA: Record<string, Service> = {
  "wedding-hospitality": {
    id: 1,
    serviceName: "Wedding Hospitality",
    description:
      "Warm and seamless hospitality services to welcome and take care of all your guests. From luxury airport pick-ups and personalized check-ins to dedicated guest relations desk and round-the-clock support, we ensure your loved ones feel pampered and cherished.",
    images: [
      {
        id: 101,
        url: img80,
        title: "Help Desk & Welcome Standee",
        modalImages: [
          {
            id: 1011,
            url: img80,
            title: "Help Desk & Welcome Standee",
          },
          {
            id: 1012,
            url: img78,
            title: "Help Desk & Welcome Standee",
          },
          {
            id: 1013,
            url: img82,
            title: "Help Desk & Welcome Standee",
          },
          {
            id: 1014,
            url: img79,
            title: "Help Desk & Welcome Standee",
          },
          {
            id: 1015,
            url: img81,
            title: "Help Desk & Welcome Standee",
          },
          {
            id: 1016,
            url: img83,
            title: "Help Desk & Welcome Standee",
          },
        ],
      },
      {
        id: 102,
        url: img89,
        title: "Welcome Girls With Tika & Rose Buds For Guest",
        modalImages: [
          {
            id: 1021,
            url: img88,
            title: "Welcome Girls With Tika & Rose Buds For Guest",
          },
          {
            id: 1022,
            url: img91,
            title: "Welcome Girls With Tika & Rose Buds For Guest",
          },
          {
            id: 1023,
            url: img90,
            title: "Welcome Girls With Tika & Rose Buds For Guest",
          },
          {
            id: 1024,
            url: img92,
            title: "Welcome Girls With Tika & Rose Buds For Guest",
          },
          {
            id: 1025,
            url: img89,
            title: "Welcome Girls With Tika & Rose Buds For Guest",
          },
        ],
      },
      {
        id: 103,
        url: img105,
        title: "Welcome Dhol For Guest Welcome",
        modalImages: [
          {
            id: 1021,
            url: img105,
            title: "Welcome Dhol For Guest Welcome",
          },
          {
            id: 1022,
            url: img107,
            title: "Welcome Dhol For Guest Welcome",
          },
          {
            id: 1023,
            url: img106,
            title: "Welcome Dhol For Guest Welcome",
          },
          {
            id: 1024,
            url: img108,
            title: "Welcome Dhol For Guest Welcome",
          },
        ],
      },
      {
        id: 104,
        url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
        title: "Nagada At Welcome",
        modalImages: [
          {
            id: 1021,
            url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
            title: "Nagada At Welcome",
          },
        ],
      },
      {
        id: 105,
        url: img113,
        title: "Rajasthani & Manipuri Dancers During Welcome",
        modalImages: [
          {
            id: 1021,
            url: img113,
            title: "Rajasthani & Manipuri Dancers During Welcome",
          },
          {
            id: 1022,
            url: img114,
            title: "Rajasthani & Manipuri Dancers During Welcome",
          },
          {
            id: 1024,
            url: img115,
            title: "Rajasthani & Manipuri Dancers During Welcome",
          },
        ],
      },
      {
        id: 106,
        url: welcomeProps1,
        title: "Welcome Props Such As Mala & Stoles",
        modalImages: [
          {
            id: 1021,
            url: welcomeProps1,
            title: "Welcome Props Such As Mala & Stoles",
          },
          {
            id: 1022,
            url: welcomeProps2,
            title: "Welcome Props Such As Mala & Stoles",
          },
          {
            id: 1023,
            url: welcomeProps3,
            title: "Welcome Props Such As Mala & Stoles",
          },
        ],
      },
      {
        id: 106,
        url: img120,
        title: "Flower Shower During Guest Welcome",
        modalImages: [
          {
            id: 1021,
            url: img120,
            title: "Flower Shower During Guest Welcome",
          },
          {
            id: 1022,
            url: img121,
            title: "Flower Shower During Guest Welcome",
          },
        ],
      },
      {
        id: 106,
        url: maleFemale1,
        title: "Male & Female Staff For Hospitality",
        modalImages: [
          {
            id: 1021,
            url: maleFemale1,
            title: "Male & Female Staff For Hospitality",
          },
          {
            id: 1022,
            url: maleFemale2,
            title: "Male & Female Staff For Hospitality",
          },
        ],
      },
      {
        id: 107,
        url: cabs4,
        title: "Cabs ( Logistics ) For Pick & Drop",
        modalImages: [
          {
            id: 1021,
            url: cabs2,
            title: "Cabs ( Logistics ) For Pick & Drop",
          },
          {
            id: 1022,
            url: cabs3,
            title: "Cabs ( Logistics ) For Pick & Drop",
          },
          {
            id: 1023,
            url: cabs4,
            title: "Cabs ( Logistics ) For Pick & Drop",
          },
          {
            id: 1024,
            url: cabs5,
            title: "Cabs ( Logistics ) For Pick & Drop",
          },
        ],
      },
      {
        id: 107,
        url: water2,
        title: "Water, Juice & Snacks Packet For Cabs",
        modalImages: [
          {
            id: 1021,
            url: water1,
            title: "Water, Juice & Snacks Packet For Cabs",
          },
          {
            id: 1022,
            url: water2,
            title: "Water, Juice & Snacks Packet For Cabs",
          },
          {
            id: 1023,
            url: water3,
            title: "Water, Juice & Snacks Packet For Cabs",
          },
        ],
      },
      {
        id: 108,
        url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
        title: "Travel Co-Ordinator ",
        modalImages: [
          {
            id: 1021,
            url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
            title: "Travel Co-Ordinator",
          },
        ],
      },
      {
        id: 109,
        url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
        title: "Male & Female As Shadows / Caretaker ",
        modalImages: [
          {
            id: 1021,
            url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
            title: "Male & Female As Shadows / Caretaker",
          },
        ],
      },
      {
        id: 110,
        url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
        title: "Helpers & Runners",
        modalImages: [
          {
            id: 1021,
            url: "https://joyled.ru/wp-content/uploads/2026/05/noimg.jpg",
            title: "Helpers & Runners",
          },
        ],
      },
      {
        id: 111,
        url: neon1,
        title: "Neon Hashtag / 3D Hashtag / Sunboard Hashtag",
        modalImages: [
          {
            id: 1021,
            url: neon2,
            title: "Helpers & Runners",
          },
          {
            id: 1022,
            url: neon1,
            title: "Helpers & Runners",
          },
        ],
      },
      {
        id: 112,
        url: thank1,
        title: "Luggage Tags",
        modalImages: [
          {
            id: 1021,
            url: thank1,
            title: "Luggage Tags",
          },
          {
            id: 1022,
            url: thank2,
            title: "Luggage Tags",
          },
        ],
      },
      {
        id: 113,
        url: thank1,
        title: "Rooms Itinerary",
        modalImages: [
          {
            id: 1021,
            url: thank1,
            title: "Luggage Tags",
          },
          {
            id: 1022,
            url: thank2,
            title: "Luggage Tags",
          },
        ],
      },
    ],
  },
  "wedding-ceremony": {
    id: 2,
    serviceName: "Wedding Ceremony",
    description:
      "Beautifully orchestrated wedding ceremonies matching your traditions and style. We create sacred, magical, and unforgettable Varmala & Phere moments with custom stages, bespoke floral canopies (Mandaps), and traditional/fusion musical accompaniments.",
    images: [
      {
        id: 201,
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        title: "Sacred Varmala exchange under floral decor",
        modalImages: [
          {
            id: 2011,
            url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
            title: "Sacred Varmala exchange under floral decor",
          },
          {
            id: 2012,
            url: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
            title: "Traditional Indian Mandap setup with marigold flowers",
          },
          {
            id: 2013,
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
            title: "Exquisite modern outdoor floral wedding canopy",
          },
          {
            id: 2014,
            url: "https://images.unsplash.com/photo-1621616875450-79f224480400?auto=format&fit=crop&w=1200&q=80",
            title: "Sacred Agni Phere and traditional pheras",
          },
        ],
      },
    ],
  },
  "barat-assembly-and-vidai": {
    id: 3,
    serviceName: "Barat Assembly and Vidai",
    description:
      "Energetic barat management followed by a touching and grand vidai ceremony. We organize grand groom entries with vintage cars, horses, dhol players, and mobile DJs, transitioning smoothly into a emotional and beautifully-lit send-off (Vidai) ceremony.",
    images: [
      {
        id: 301,
        url: "https://images.unsplash.com/photo-1595152230535-09a25091c662?auto=format&fit=crop&w=1200&q=80",
        title: "Royal groom entry outfit and accessories",
        modalImages: [
          {
            id: 3011,
            url: "https://images.unsplash.com/photo-1595152230535-09a25091c662?auto=format&fit=crop&w=1200&q=80",
            title: "Royal groom entry outfit and accessories",
          },
          {
            id: 3012,
            url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
            title: "Luxury classic vintage car for Groom entry & Vidai",
          },
          {
            id: 3013,
            url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=1200&q=80",
            title: "Energetic dhol beats and brass band assembly",
          },
          {
            id: 3014,
            url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
            title: "Emotional Vidai departure under a shower of cold fire sparklers",
          },
        ],
      },
    ],
  },
  "sangeet-ceremony": {
    id: 4,
    serviceName: "Sangeet Ceremony",
    description:
      "A spectacular evening of dance, music, and celebration with your family and friends. Experience high-end production with LED backdrops, professional sound, automated light shows, celebrity DJs, choreographers, and glamorous stage setups.",
    images: [
      {
        id: 401,
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
        title: "Stunning concert-like lighting production for family performances",
        modalImages: [
          {
            id: 4011,
            url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
            title: "Stunning concert-like lighting production for family performances",
          },
          {
            id: 4012,
            url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
            title: "Bespoke grand stage design with custom LED screen display",
          },
          {
            id: 4013,
            url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
            title: "Top-tier live DJ playing fusion beats on custom console",
          },
          {
            id: 4014,
            url: "https://images.unsplash.com/photo-1486591978090-58e619d37fe7?auto=format&fit=crop&w=1200&q=80",
            title: "LED interactive dance floor filled with energy",
          },
        ],
      },
    ],
  },
  "haldi-and-mehandi-ceremony": {
    id: 5,
    serviceName: "Haldi and Mehandi Ceremony",
    description:
      "Vibrant and joyful haldi and mehandi celebrations filled with colors and music. Features yellow-orange themed floral decor, custom photobooths, live bangle makers, dholki singers, and custom seating for the bride and groom.",
    images: [
      {
        id: 501,
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        title: "Beautiful traditional Haldi decor with fresh yellow-orange marigolds",
        modalImages: [
          {
            id: 5011,
            url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
            title: "Beautiful traditional Haldi decor with fresh yellow-orange marigolds",
          },
          {
            id: 5012,
            url: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1200&q=80",
            title: "Intricate and gorgeous Mehendi design detailing on bridal hands",
          },
          {
            id: 5013,
            url: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&w=1200&q=80",
            title: "Colorful outdoor canopy and traditional seating setup",
          },
          {
            id: 5014,
            url: "https://images.unsplash.com/photo-1583939411023-1478287c8854?auto=format&fit=crop&w=1200&q=80",
            title: "Joyful Haldi couple portrait full of smiles",
          },
        ],
      },
    ],
  },
};

// ── Lightbox Component (Copied from Corporate Event lightbox flow) ───────────
const Lightbox: React.FC<{
  images: { id: number; url: string; title: string | null }[];
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
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/85 px-4 py-6 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Compact modal */}
      <div className="relative my-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1209] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
          <div className="flex items-center gap-2 min-w-0">
            <p className="truncate text-sm font-semibold text-white">{title}</p>
            <span className="shrink-0 text-xs text-white/35">
              {index + 1}/{images.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition hover:bg-white/12 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative bg-black" style={{ aspectRatio: "16/9" }}>
          <img
            key={active.id}
            src={active.url}
            alt={active.title || title}
            className="h-full w-full object-fill transition-opacity duration-200"
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
                    ? "border-[#88ab32] opacity-100"
                    : "border-transparent opacity-40 hover:opacity-65"
                }`}
              >
                <img
                  src={img.url}
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

// ── Main Page Component ───────────────────────────────────────────────────────
const SocialServiceDetails: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const normalizedServiceSlug = decodeURIComponent(serviceSlug ?? "")
    .trim()
    .toLowerCase();

  // Find the static service matching the slug
  const service = SOCIAL_SERVICES_DATA[normalizedServiceSlug];

  // Lightbox States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ id: number; url: string; title: string | null }[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (image: ServiceImage) => {
    // Each card loads its own custom modalImages array, falling back to [image] if none exists
    const gallery = image.modalImages || [image];
    setLightboxImages(gallery);
    setLightboxOpen(true);
  };

  if (!normalizedServiceSlug) {
    return null;
  }

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center p-8 border border-white/10 rounded-3xl bg-[#10140c]/72 backdrop-blur-md">
          <h1 className="mb-4 text-3xl font-light text-[#a4c34f]">
            Service Not Found
          </h1>
          <p className="text-white/60 mb-6">
            The requested service details could not be found.
          </p>
          <Link
            to="/social-profile"
            className="inline-flex items-center justify-center rounded-xl bg-[#88ab32] px-6 py-3 font-medium text-white transition hover:bg-[#a4c34f]"
          >
            Back to Social Profile
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f08] pt-32 pb-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">

        {/* ── Hero header ── */}
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-[#a4c34f] font-semibold mb-2">
            Social Service Showcase
          </span>

          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#f5f5f5] mb-6">
            {service.serviceName}
          </h1>

          <p
            className="max-w-3xl text-white/70 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            {service.description}
          </p>
        </div>

        {/* ── 3×2 Image grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              onClick={() => handleCardClick(image)}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-[#10140c]/40 backdrop-blur-sm cursor-pointer"
            >
              <img
                src={image.url}
                alt={
                  image.title || `${service.serviceName} showcase ${index + 1}`
                }
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Permanent bottom blurred glassmorphic banner for caption/title */}
              <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-md border-t border-white/10 p-3 sm:p-4 text-center">
                <p className="text-sm font-medium tracking-wide text-[#f5f5f5] line-clamp-1">
                  {image.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal (Compact corporate-event style) ── */}
      {lightboxOpen && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          initialIndex={0}
          title={service.serviceName}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default SocialServiceDetails;
