import React from 'react';
import NikitaRajpoot from '../assets/emceeProfile/4.jpg'
import MallikaYashAsthana from '../assets/emceeProfile/6.jpg'
import DivyanshiPandey from '../assets/emceeProfile/7.jpg'
import ChitrakshiKhokhar from '../assets/emceeProfile/8.jpg'
import GarimaKapoor from '../assets/emceeProfile/9.jpg'
import EktaTiwari from '../assets/emceeProfile/10.jpg'
import AishaGhani from '../assets/emceeProfile/11.jpg'
import SonamNegi from '../assets/emceeProfile/13.jpg'
import TanishaPandey from '../assets/emceeProfile/14.jpg'
import SugandhaVerma from '../assets/emceeProfile/15.jpg'
import ShilpeeSeth from '../assets/emceeProfile/16.jpg'
import NehaSTiwari from '../assets/emceeProfile/17.jpg'
import MrinaliniJoshi from '../assets/emceeProfile/18.jpg'
import KiranVaswani from '../assets/emceeProfile/19.jpg'
import AyushiRaj from '../assets/emceeProfile/20.jpg'
import SurbhiDighe from '../assets/emceeProfile/21.jpg'
import UshmaTyagi from '../assets/emceeProfile/22.jpg'
import PrachiNayal from '../assets/emceeProfile/23.jpg'
import ManviKhillani from '../assets/emceeProfile/24.jpg'
import GazalVats from '../assets/emceeProfile/25.jpg'
import DeeptiSadhwani from '../assets/emceeProfile/26.jpg'
import ReshamBhalla from '../assets/emceeProfile/27.jpg'
import ChandniSehgal from '../assets/emceeProfile/28.jpg'
import AishwaryaThakur from '../assets/emceeProfile/29.jpg'
import KirtiSarkar from '../assets/emceeProfile/30.jpg'
import SwatiChandra from '../assets/emceeProfile/31.jpg'
import SwatiSharma from '../assets/emceeProfile/32.jpg'
import Manya from '../assets/emceeProfile/33.jpg'
import Sanjana from '../assets/emceeProfile/34.jpg'
import SanjanaSachdeva from '../assets/emceeProfile/35.jpg'
import AnneyshaThakker from '../assets/emceeProfile/36.jpg'
import KhusbooKapoor from '../assets/emceeProfile/37.jpg'
import SadhviBajaj from '../assets/emceeProfile/38.jpg'
import ShwetaKapoor from '../assets/emceeProfile/39.jpg'
import SonamChhabra from '../assets/emceeProfile/40.jpg'
import ShadabKhan from '../assets/emceeProfile/41.jpg'
import MohitAwathi from '../assets/emceeProfile/42.jpg'
import VisheshPandit from '../assets/emceeProfile/43.jpg'
import RupaKhurana from '../assets/emceeProfile/44.jpg'
const emceeData = [
  {
    id: 1,
    title: 'Nikita Rajpoot',
    image: NikitaRajpoot,
    url: 'https://www.instagram.com/anchornikitarajput',
  },
  {
    id: 2,
    title: 'Mallika Yash Asthana',
    image: MallikaYashAsthana,
    url: 'https://www.instagram.com/mallikayashasthana',
  },
  {
    id: 3,
    title: 'Divyanshi Pandey',
    image: DivyanshiPandey,
    url: 'https://www.instagram.com/divyanshipandey_19',
  },
  {
    id: 4,
    title: 'Chitrakshi Khokhar',
    image: ChitrakshiKhokhar,
    url: 'https://www.instagram.com/chitrakshikhokhar',
  },
  {
    id: 5,
    title: 'Garima Kapoor',
    image: GarimaKapoor,
    url: 'https://www.instagram.com/garimakapoorofficial',
  },
  {
    id: 6,
    title: 'Ekta Tiwari',
    image: EktaTiwari,
    url: 'https://www.instagram.com/ektaatiwariofficial',
  },
  {
    id: 7,
    title: 'Aisha Ghani',
    image: AishaGhani,
    url: 'https://www.instagram.com/aishaghaniofficial',
  },
  {
    id: 8,
    title: 'Sonam Negi',
    image: SonamNegi,
    url: 'https://www.instagram.com/sonamnegi',
  },
  {
    id: 9,
    title: 'Tanisha Pandey',
    image: TanishaPandey,
    url: 'https://www.instagram.com/your_host_tanisha',
  },
  {
    id: 10,
    title: 'Sugandha Verma',
    image: SugandhaVerma,
    url: 'https://www.instagram.com/sugandha_verma_official',
  },
  {
    id: 11,
    title: 'Shilpee Seth',
    image: ShilpeeSeth,
    url: 'https://www.instagram.com/anchorshilpeeseth',
  },
  {
    id: 12,
    title: 'Neha S Tiwari',
    image: NehaSTiwari,
    url: 'https://www.instagram.com/i_nehatiwarii',
  },
  {
    id: 13,
    title: 'Mrinalini Joshi',
    image: MrinaliniJoshi,
    url: 'https://www.instagram.com/mrishiiiiii',
  },
  {
    id: 14,
    title: 'Kiran Vaswani',
    image: KiranVaswani,
    url: 'https://www.instagram.com/kirandanchor',
  },
  {
    id: 15,
    title: 'Ayushi Raj',
    image: AyushiRaj,
    url: 'https://www.instagram.com/i.am.ayushiraj',
  },
  {
    id: 16,
    title: 'Surbhi Dighe',
    image: SurbhiDighe,
    url: 'https://www.instagram.com/surbhidigheofficial',
  },
  {
    id: 17,
    title: 'Ushma Tyagi',
    image: UshmaTyagi,
    url: 'https://www.instagram.com/ushmatyagi',
  },
  {
    id: 18,
    title: 'Prachi Nayal',
    image: PrachiNayal,
    url: 'https://www.instagram.com/piz.615',
  },
  {
    id: 19,
    title: 'Manvi Khillani',
    image: ManviKhillani,
    url: 'https://www.instagram.com/anchormanvi',
  },
  {
    id: 20,
    title: 'Gazal Vats',
    image: GazalVats,
    url: 'https://www.instagram.com/gazalvats',
  },
  {
    id: 21,
    title: 'Deepti Sadhwani',
    image: DeeptiSadhwani,
    url: 'https://www.instagram.com/iamdeeptisadhwani',
  },
  {
    id: 22,
    title: 'Resham Bhalla',
    image: ReshamBhalla,
    url: 'https://www.instagram.com/resshamofficial',
  },
  {
    id: 23,
    title: 'Chandni Sehgal',
    image: ChandniSehgal,
    url: 'https://www.instagram.com/sehgal_chandini',
  },
  {
    id: 24,
    title: 'Aishwarya Thakur',
    image: AishwaryaThakur,
    url: 'https://www.instagram.com/anchoraishwaryathakur',
  },
  {
    id: 25,
    title: 'Kirti Sarkar',
    image: KirtiSarkar,
    url: 'https://www.instagram.com/anchorkirtisarkar',
  },
  {
    id: 26,
    title: 'Swati Chandra',
    image: SwatiChandra,
    url: 'https://www.instagram.com/swatichandra_official',
  },
  {
    id: 27,
    title: 'Swati Sharma',
    image: SwatiSharma,
    url: 'https://www.instagram.com/swati.sharma2588',
  },
  {
    id: 28,
    title: 'Manya',
    image: Manya,
    url: 'https://www.instagram.com/anchormandyy',
  },
  {
    id: 29,
    title: 'Sanjana',
    image: Sanjana,
    url: 'https://www.instagram.com/anchor_sanjana',
  },
  {
    id: 30,
    title: 'Sanjana Sachdeva',
    image: SanjanaSachdeva,
    url: 'https://www.instagram.com/emcee_sugandha',
  },
  {
    id: 31,
    title: 'Anneysha Thakker',
    image: AnneyshaThakker,
    url: 'https://www.instagram.com/anneyshathakker',
  },
  {
    id: 32,
    title: 'Khusboo Kapoor',
    image: KhusbooKapoor,
    url: 'https://www.instagram.com/thekhushbookapoor',
  },
  {
    id: 33,
    title: 'Sadhvi Bajaj',
    image: SadhviBajaj,
    url: 'https://www.instagram.com/sadhvi_thediva',
  },
  {
    id: 34,
    title: 'Shweta Kapoor',
    image: ShwetaKapoor,
    url: 'https://www.instagram.com/kapoorshweta1',
  },
  {
    id: 35,
    title: 'Sonam Chhabra',
    image: SonamChhabra,
    url: 'https://www.instagram.com/sonamcchhabra',
  },
  {
    id: 36,
    title: 'Shadab Khan',
    image: ShadabKhan,
    url: 'https://www.instagram.com/rjshadab_lucknow_ka_nawaab',
  },
  {
    id: 37,
    title: 'Mohit Awathi',
    image: MohitAwathi,
    url: 'https://www.instagram.com/anchor_mohitawasthi',
  },
  {
    id: 38,
    title: 'Vishesh Pandit',
    image: VisheshPandit,
    url: 'https://www.instagram.com/anchorvisheshpanditofficial',
  },
  {
    id: 39,
    title: 'Rupa Khurana',
    image: RupaKhurana,
    url: 'https://www.instagram.com/rupa.khurana7',
  },
];

const EMCEEProfilePage: React.FC = () => (
  <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
    <div className="mx-auto max-w-6xl px-5 sm:px-10">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#88ab32]" />
          <span className="text-[11px] tracking-[0.2em] text-[#88ab32] uppercase font-medium">Entertainment</span>
        </div>
        <h1 className="text-[clamp(28px,4vw,48px)] font-light text-[#f5f5f5] leading-[1.15] tracking-[-0.02em] mb-3.5">
          Premium EMCEE <span className="font-semibold">Profiles</span>
        </h1>
        <p className="text-[15px] text-white/[0.45] leading-relaxed max-w-[560px]">
          Experienced and charismatic emcees who command the stage, engage audiences, and ensure every event flows with energy and professionalism.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {emceeData.map((emcee) => (
          <a
            key={emcee.id}
            href={emcee.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)] group transition-all duration-500 hover:border-[#88ab32]/35 hover:shadow-[0_20px_60px_rgba(136,171,50,0.12)]"
            style={{ height: '280px' }}
          >
            <img
              src={emcee.image}
              alt={emcee.title}
              className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <p className="absolute left-4 right-4 bottom-4 text-[15px] font-semibold text-[#f5f5f5] leading-tight tracking-[0.01em] transition-all duration-300 ease-out group-hover:-translate-y-[52px]">
              {emcee.title}
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

export default EMCEEProfilePage;
