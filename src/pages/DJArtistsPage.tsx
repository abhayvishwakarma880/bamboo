import React from 'react';
import DJAna from '../assets/djArtists/6.jpg'
import DJJaish from '../assets/djArtists/7.jpg'
import DJJhalak from '../assets/djArtists/8.jpg'
import DJLahar from '../assets/djArtists/9.jpg'
import DJJazz from '../assets/djArtists/10.jpg'
import DJPalak from '../assets/djArtists/11.jpg'
import DJPreet from '../assets/djArtists/12.jpg'
import DJPrashantMakwana from '../assets/djArtists/13.jpg'
import DJMaddy from '../assets/djArtists/14.jpg'
import DJMavikaGoswami from '../assets/djArtists/15.jpg'
import DJPrince from '../assets/djArtists/16.jpg'
import DJRomy from '../assets/djArtists/17.jpg'
import DJRaghav from '../assets/djArtists/18.jpg'
import AvinashNigam from '../assets/djArtists/19.jpg'
import DJRonit from '../assets/djArtists/20.jpg'
import DJRewon from '../assets/djArtists/21.jpg'
import DJRishi from '../assets/djArtists/22.jpg'
import DJGaurav from '../assets/djArtists/23.jpg'
const djData = [
  {
    id: 1,
    title: 'DJ Ana',
    image: DJAna,
    url: 'https://www.instagram.com/dj_ana___/',
  },
  {
    id: 2,
    title: 'DJ Jaish',
    image: DJJaish,
    url: 'https://www.instagram.com/dj_jaish/',
  },
  {
    id: 3,
    title: 'DJ Jhalak',
    image: DJJhalak,
    url: 'https://www.instagram.com/dj_jhalakk/',
  },
  {
    id: 4,
    title: 'DJ Lahar',
    image: DJLahar,
    url: 'https://www.instagram.com/djlahar/',
  },
  {
    id: 5,
    title: 'DJ Jazz',
    image: DJJazz,
    url: 'https://www.instagram.com/dj_jazz_official__/',
  },
  {
    id: 6,
    title: 'DJ Palak',
    image: DJPalak,
    url: 'https://www.instagram.com/djpalakvirgo/',
  },
  {
    id: 7,
    title: 'DJ Preet',
    image: DJPreet,
    url: 'https://www.instagram.com/thedjpreetofficial/',
  },
  {
    id: 8,
    title: 'DJ Prashant Makwana',
    image: DJPrashantMakwana,
    url: 'https://www.instagram.com/djprashant25/reels/',
  },
  {
    id: 9,
    title: 'DJ Maddy',
    image: DJMaddy,
    url: 'https://www.instagram.com/djmaddyofficial/',
  },
  {
    id: 10,
    title: 'DJ Mavika Goswami',
    image: DJMavikaGoswami,
    url: 'https://www.instagram.com/dj.mavi/',
  },
  {
    id: 11,
    title: 'DJ Prince',
    image: DJPrince,
    url: 'https://www.instagram.com/djprincelko/',
  },
  {
    id: 12,
    title: 'DJ Romy',
    image: DJRomy,
    url: 'https://www.instagram.com/dj_romy_next_level/',
  },
  {
    id: 13,
    title: 'DJ Raghav',
    image: DJRaghav,
    url: 'https://www.instagram.com/djraghav_/reels/',
  },
  {
    id: 14,
    title: 'Avinash Nigam',
    image: AvinashNigam,
    url: 'https://www.instagram.com/dj_ak_official/',
  },
  {
    id: 15,
    title: 'DJ Ronit',
    image: DJRonit,
    url: 'https://www.instagram.com/djronit__/',
  },
  {
    id: 16,
    title: 'DJ Rewon',
    image: DJRewon,
    url: 'https://www.instagram.com/djrewon_/',
  },
  {
    id: 17,
    title: 'DJ Rishi',
    image: DJRishi,
    url: 'https://www.instagram.com/djrishisinghaniaevents/reels/',
  },
  {
    id: 18,
    title: 'DJ Gaurav',
    image: DJGaurav,
    url: 'https://www.instagram.com/djgauravlko/',
  },
];

const DJArtistsPage: React.FC = () => (
  <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
    <div className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#88ab32]" />
          <span className="text-[11px] tracking-[0.2em] text-[#88ab32] uppercase font-medium">Entertainment</span>
        </div>
        <h1 className="text-[clamp(28px,4vw,48px)] font-light text-[#f5f5f5] leading-[1.15] tracking-[-0.02em] mb-3.5">
          Premium DJ <span className="font-semibold">Artists</span>
        </h1>
        <p className="text-[15px] text-white/[0.45] leading-relaxed max-w-[560px]">
          A curated roster of professional DJ artists delivering high-energy sets, seamless mixes, and electrifying performances for corporate and luxury events.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {djData.map((dj) => (
          <a
            key={dj.id}
            href={dj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden border border-[#88ab32]/35 shadow-[0_4px_24px_rgba(0,0,0,0.4)] group transition-all duration-500 hover:border-[#88ab32] hover:shadow-[0_20px_60px_rgba(136,171,50,0.12)]"
            style={{ height: '280px' }}
          >
            <img
              src={dj.image}
              alt={dj.title}
              className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <p className="absolute left-4 right-4 bottom-4 text-[15px] font-semibold text-[#f5f5f5] leading-tight tracking-[0.01em] transition-all duration-300 ease-out group-hover:-translate-y-[52px]">
              {dj.title}
            </p>

            <div className="absolute left-4 right-4 bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#88ab32]/40 bg-[#88ab32] text-black text-[11px] font-semibold tracking-[0.08em] uppercase w-fit">
                View Profile
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M6.5 2.5L10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </main>
);

export default DJArtistsPage;
