import {
  Camera,
  Hammer,
  Megaphone,
  MonitorPlay,
  Printer,
  ShieldCheck,
  Star,
  Theater,
  Trophy,
  Volume2,
} from "lucide-react";
import aboutEventImage from "../../assets/events/about.webp";
import corporateEventImage from "../../assets/events/corporate.webp";
import socialEventImage from "../../assets/events/social.webp";
import type { CompanyEventGroup, ProcessStep, ServiceItem } from "./types";

export const serviceItems: ServiceItem[] = [
  {
    icon: Theater,
    title: "Stage & Set Design",
    description: "Creative stage concepts with custom decor.",
  },
  {
    icon: Hammer,
    title: "Exhibition & Stall Fabrication",
    description: "Booth design, technical layouts, and seamless installation.",
  },
  {
    icon: Volume2,
    title: "Lighting & Sound Systems",
    description: "Professional AV systems for all event scales.",
  },
  {
    icon: MonitorPlay,
    title: "LED Video Walls & Screens",
    description: "Crisp visual displays for brand and entertainment.",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Complete event media coverage and post-editing.",
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    description: "Banners, backdrops, and in-house fabrication output.",
  },
  {
    icon: Trophy,
    title: "Awards & Gifting Solutions",
    description: "Customized trophies, mementos, and corporate gifts.",
  },
  {
    icon: Star,
    title: "Celebrity & Artist Management",
    description: "Talent booking and entertainment curation support.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Event Staffing",
    description: "Trained teams for safe and smooth event operations.",
  },
  {
    icon: Megaphone,
    title: "Outdoor Publicity",
    description: "Hoardings, kiosks, glow signs, banners, and festival arches.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Venue",
    description:
      "We source venue options that match audience size, logistics, and experience goals.",
  },
  {
    number: "02",
    title: "General Concept",
    description:
      "We define the thematic direction, visual language, and show narrative.",
  },
  {
    number: "03",
    title: "Booths Design & Fabrication",
    description:
      "We produce technical drawings and fabricate structures for exhibition impact.",
  },
  {
    number: "04",
    title: "Stage & Decorations",
    description:
      "We design and build stage environments and decor with in-house execution.",
  },
  {
    number: "05",
    title: "AV Equipment",
    description: "We deploy turnkey lighting, sound, LED, and control systems.",
  },
  {
    number: "06",
    title: "Video Content",
    description:
      "We create 2D and 3D motion assets for screens, intros, and brand storytelling.",
  },
  {
    number: "07",
    title: "Awards & Gift Items",
    description:
      "Custom made awards and gift items from Bamboo Groves Pvt. Ltd available now",
  },
];

export const inHouseCapabilities = [
  "In-house Set & Decor",
  "Video LED Wall",
  "Photographer & Videographer",
  "Printing & In-house Fabrication",
  "In-house Technical Sound & Light",
  "Celebrity Engagement",
  "Anchors / Entertainers",
  "Security Services",
  "Administrative & Other Mandatory Approvals",
  "Outdoor Publicity (Hoardings / Glow Signs / Kiosks / Banners / In-shop Board / Festival Arch Gate)",
];

export const accordionSections = {
  pre: {
    title: "Pre-Event Planning",
    items: [
      "Budget creation and management",
      "Detailed critical path and timeline planning",
      "Venue booking and contract negotiation",
      "Event management, design, and marketing",
      "Online registration setup and management",
      "Floor plan layout and decor planning",
      "Menu creation specific to your event",
      "Execution mapping for every event detail",
    ],
  },
  onsite: {
    title: "Onsite Management & Post Event",
    items: [
      "Volunteer and support crew management",
      "Onsite setup and day-of event control",
      "Detailed timelines, show flow, and MC script support",
      "Friendly, trained, and accountable staff",
      "Stage management and run-of-show coordination",
    ],
  },
};

export const clientCompanies = [
  "Tata Group",
  "Reliance Industries",
  "Infosys",
  "HDFC Bank",
  "Wipro",
  "ITC",
  "Mahindra & Mahindra",
  "Bajaj Auto",
];

export interface BandItem {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
}


import jatin from '../../assets/band/4.jpg'
import Violent from '../../assets/band/6.jpg'
import Fitoor from '../../assets/band/7.jpg'
import sadgi from '../../assets/band/8.jpg'
import raga from '../../assets/band/9.jpg'
import indian from '../../assets/band/10.jpg'
import gunjan from '../../assets/band/12.jpg'
import andaz from '../../assets/band/13.jpg'
import junaid from '../../assets/band/14.jpg'
import akash from '../../assets/band/16.jpg'
import raagthe from '../../assets/band/17.jpg'
import TheFrequency from '../../assets/band/15.jpg'
import AbhinavNarula from '../../assets/band/19.jpg'
import AddhyanLiveBand from '../../assets/band/20.jpg'
import AdhirohahTheBand from '../../assets/band/21.jpg'
import PalakOberoiLive from '../../assets/band/23.jpg'
import RehnumaLive from '../../assets/band/24.jpg'
import TathastuBand from '../../assets/band/25.jpg'
import MadariLive from '../../assets/band/26.jpg'
import NikhilSwatantra from '../../assets/band/27.jpg'
import NotebookTheBand from '../../assets/band/28.jpg'
import BandNeptune from '../../assets/band/29.jpg'
import GuptaBrothers from '../../assets/band/30.jpg'
import UlfatBand from '../../assets/band/31.jpg'
import TheWhiskeyBoys from '../../assets/band/33.jpg'
import BollyJammers from '../../assets/band/34.jpg'
import NimishaDeb from '../../assets/band/35.jpg'
import MysticPopBand from '../../assets/band/36.jpg'
import KarwaanBand from '../../assets/band/37.jpg'
import TheBackbenchersBand from '../../assets/band/38.jpg'
import TheDelhiCompany from '../../assets/band/40.jpg'
import TheMetroMelody from '../../assets/band/39.jpg'
import TwinStringsLive from '../../assets/band/41.jpg'
import SufiFolksOfficial from '../../assets/band/42.jpg'
import JyotsnaNavandar from '../../assets/band/43.jpg'
import MuneerNiazi from '../../assets/band/44.jpg'
import AayushSrivastava from '../../assets/band/45.jpg'
import StringsTheBand from '../../assets/band/46.jpg'
import DunesofRajasthan from '../../assets/band/47.jpg'
import FarhanSabri from '../../assets/band/49.jpg'
import AliBrothers from '../../assets/band/50.jpg'
import AawaazCollective from '../../assets/band/51.jpg'
import NidaanLive from '../../assets/band/53.jpg'
import RihaaBand from '../../assets/band/54.jpg'
import TheRoxxFusion from '../../assets/band/55.jpg'
import MayurJoshiLive from '../../assets/band/56.jpg'
import BackStageSiblings from '../../assets/band/57.jpg'
import SkyHighDJBand from '../../assets/band/58.jpg'
export interface BandItem {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
}

export const bandData: BandItem[] = [
  {
    id: 1,
    title: "Jatin Nigam",
    description: "Soulful modern vocals and trending reels.",
    url: "https://www.instagram.com/reel/DVaQAcyEtfT/",
    image: jatin,
    category: "Lucknow Live Bands",
  },
  {
    id: 2,
    title: "Violent Band",
    description: "High-octane rock anthems and energetic sets.",
    url: "https://www.instagram.com/violent_the_musical_band/",
    image: Violent,
    category: "Lucknow Live Bands",
  },
  {
    id: 3,
    title: "Fitoor Band",
    description: "Mesmerizing fusion blending classic and modern beats.",
    url: "https://www.instagram.com/reel/DWMEB0Ak5c9/",
    image: Fitoor,
    category: "Lucknow Live Bands",
  },
  {
    id: 4,
    title: "Saadgi",
    description: "Deeply spiritual and crowd-favorite Sufi music.",
    url: "https://www.instagram.com/saadgi_the_sufi_band/",
    image: sadgi,
    category: "Lucknow Live Bands",
  },
  {
    id: 5,
    title: "Raga Band",
    description:
      "Seamlessly blending traditional classical with fusion elements.",
    url: "https://www.instagram.com/raga_ki_sufi_shaam/",
    image: raga,
    category: "Lucknow Live Bands",
  },
  {
    id: 6,
    title: "INDIANA BAND",
    description: "Acoustic excellence and crisp vocal performances.",
    url: "https://www.youtube.com/@indianaband2924",
    image: indian,
    category: "Lucknow Live Bands",
  },
  {
    id: 7,
    title: "Gunjan (Acoustic)",
    description: "Intimate background melodies and raw acoustic performance.",
    url: "https://www.instagram.com/singer_gunjanroy05/",
    image: gunjan,
    category: "Lucknow Live Bands",
  },
  {
    id: 8,
    title: "Andaz Band",
    description: "Pure minimalistic sound focusing on deep vocal tone.",
    url: "https://www.youtube.com/@andazbandmusic",
    image: andaz,
    category: "Lucknow Live Bands",
  },
  {
    id: 9,
    title: "Junaid Khan",
    description: "Experimental textures and high audience engagement.",
    url: "https://www.instagram.com/junaidkhan.live/",
    image: junaid,
    category: "Lucknow Live Bands",
  },
  {
    id: 10,
    title: "Akash Nagar",
    description: "Viral performance recordings capturing huge crowds.",
    url: "https://youtu.be/0ijY6noMlYY",
    image: akash,
    category: "Live Bands",
  },
  {
    id: 11,
    title: "Raag The Band Bengaluru",
    description: "The signature avant-garde experimental sound of Delhi.",
    url: "https://www.youtube.com/@raagthebandbengaluru",
    image: raagthe,
    category: "Live Bands",
  },
  {
    id: 12,
    title: "The Frequency Project",
    description: "Incredibly interactive, premium corporate crowd-pleaser.",
    url: "https://youtube.com/channel/UCp5EHHnTi3OiBeBgeCZ-pPQ",
    image: TheFrequency,
    category: "Live Bands",
  },
  {
    id: 13,
    title: "Abhinav Narula",
    description: "Independent original music catalog with a powerful fanbase.",
    url: "https://www.youtube.com/@AbhinavNarula/shorts",
    image: AbhinavNarula,
    category: "Live Bands",
  },
  {
    id: 14,
    title: "Addhyan Live Band",
    description: "Grand high-production showstoppers perfect for large venues.",
    url: "https://youtu.be/eVxJIImXpgk",
    image: AddhyanLiveBand,
    category: "Live Bands",
  },
  {
    id: 15,
    title: "Adhirohah The Band",
    description: "Anthemic modern rock combined with deep meaningful lyrics.",
    url: "https://www.youtube.com/@adhirohahtheband3940",
    image: AdhirohahTheBand,
    category: "Live Bands",
  },
  {
    id: 16,
    title: "Palak Oberoi Live",
    description: "A refreshing new take on melodic alternative pop.",
    url: "https://www.youtube.com/@palakoberoi4339",
    image: PalakOberoiLive,
    category: "Live Bands",
  },
  {
    id: 17,
    title: "Rehnuma Live",
    description: "Independent original music catalog with a powerful fanbase.",
    url: "https://www.youtube.com/watch?v=mCmb1mE_6nY",
    image: RehnumaLive,
    category: "Live Bands",
  },
  {
    id: 18,
    title: "Tathastu Band",
    description: "Raw, rustic and energetic roots-rock live performance.",
    url: "https://www.youtube.com/@tathastuband792",
    image: TathastuBand,
    category: "Live Bands",
  },
  {
    id: 19,
    title: "Madari Live",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@bandmadarilive",
    image: MadariLive,
    category: "Live Bands",
  },
  {
    id: 20,
    title: "Nikhil Swatantra",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://youtube.com/playlist",
    image: NikhilSwatantra,
    category: "Live Bands",
  },
  {
    id: 21,
    title: "Notebook The Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@NotebookThebandmusical/videos",
    image: NotebookTheBand,
    category: "Live Bands",
  },
  {
    id: 22,
    title: "Band Neptune",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/band.neptune",
    image: BandNeptune,
    category: "Live Bands",
  },
  {
    id: 23,
    title: "Gupta Brothers",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/guptabrothers.official/",
    image: GuptaBrothers,
    category: "Live Bands",
  },
  {
    id: 24,
    title: "Ulfat Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/ulfatband/",
    image: UlfatBand,
    category: "Live Bands",
  },
  {
    id: 25,
    title: "The Whiskey Boys",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://youtu.be/5kdEZJ9Yvdo",
    image: TheWhiskeyBoys,
    category: "Live Bands",
  },
  {
    id: 26,
    title: "Bolly Jammers",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://m.youtube.com/@BollyJammersShow",
    image: BollyJammers,
    category: "Live Bands",
  },
  {
    id: 27,
    title: "Nimisha Deb",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/nimishadebofficial/",
    image: NimishaDeb,
    category: "Live Bands",
  },
  {
    id: 28,
    title: "Mystic Pop Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@MysticPopBand",
    image: MysticPopBand,
    category: "Live Bands",
  },
  {
    id: 29,
    title: "Karwaan Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@KarwaanOfficial",
    image: KarwaanBand,
    category: "Live Bands",
  },
  {
    id: 30,
    title: "The Backbenchers Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/the_backbenchersbandoffical/",
    image: TheBackbenchersBand,
    category: "Live Bands",
  },
  {
    id: 31,
    title: "The Delhi Company",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/thedelhicompany/",
    image: TheDelhiCompany,
    category: "Live Bands",
  },
  {
    id: 32,
    title: "The Metro Melody",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/themetromelody/",
    image: TheMetroMelody,
    category: "Live Bands",
  },
  {
    id: 33,
    title: "Twin Strings Live",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/twinstringslive/",
    image: TwinStringsLive,
    category: "Live Bands",
  },
  {
    id: 34,
    title: "Sufi Folks Official",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/sufifolksofficial/",
    image: SufiFolksOfficial,
    category: "Live Bands",
  },
  {
    id: 35,
    title: "Jyotsna Navandar",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/jyotsnanavandar/",
    image: JyotsnaNavandar,
    category: "Live Bands",
  },
  {
    id: 36,
    title: "Muneer Niazi",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/muneer_niazi/",
    image: MuneerNiazi,
    category: "Live Bands",
  },
  {
    id: 37,
    title: "Aayush Srivastava",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@AayushSrivastava",
    image: AayushSrivastava,
    category: "Live Bands",
  },
  {
    id: 38,
    title: "4 Strings The Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/4stringstheband/",
    image: StringsTheBand,
    category: "Live Bands",
  },
  {
    id: 39,
    title: "Dunes of Rajasthan",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/imrankhandunesofrajasthan/",
    image: DunesofRajasthan,
    category: "Live Bands",
  },
  {
    id: 40,
    title: "Farhan Sabri",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@farhansabri5546",
    image: FarhanSabri,
    category: "Live Bands",
  },
  {
    id: 41,
    title: "Ali Brothers",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@AliBrothersofficial",
    image: AliBrothers,
    category: "Live Bands",
  },
  {
    id: 42,
    title: "Aawaaz Collective",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.youtube.com/@jaitaneja-aawaaz9846",
    image: AawaazCollective,
    category: "Live Bands",
  },
  {
    id: 43,
    title: "Nidaan Live",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/nidaanlive/",
    image: NidaanLive,
    category: "Live Bands",
  },
  {
    id: 44,
    title: "Rihaa Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/rihaa_band/",
    image: RihaaBand,
    category: "Live Bands",
  },
  {
    id: 45,
    title: "The Roxx Fusion",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/theroxxfusion/",
    image: TheRoxxFusion,
    category: "Live Bands",
  },
  {
    id: 46,
    title: "Mayur Joshi Live",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/mayur_joshi_live/",
    image: MayurJoshiLive,
    category: "Live Bands",
  },
  {
    id: 47,
    title: "Back Stage Siblings",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/backstagesiblings/reels/",
    image: BackStageSiblings,
    category: "Live Bands",
  },
  {
    id: 48,
    title: "Sky High DJ Band",
    description: "Modern contemporary rhythm and blues fusion outfit.",
    url: "https://www.instagram.com/skyhighdjband/",
    image: SkyHighDJBand,
    category: "Live Bands",
  },
];

export const workEventGroups: CompanyEventGroup[] = [
  {
    companyName: "Tata Group",
    events: [
      {
        id: "tata-mumbai-annual-meet",
        location: "Mumbai",
        image: corporateEventImage,
        extraImages: [aboutEventImage, socialEventImage],
        alt: "Tata Group annual corporate event in Mumbai",
      },
      {
        id: "tata-pune-awards-night",
        location: "Pune",
        image: aboutEventImage,
        alt: "Tata Group awards night in Pune",
      },
      {
        id: "tata-ahmedabad-leadership-summit",
        location: "Ahmedabad",
        image: socialEventImage,
        alt: "Tata Group leadership summit in Ahmedabad",
      },
    ],
  },
  {
    companyName: "Infosys",
    events: [
      {
        id: "infosys-bengaluru-townhall",
        location: "Bengaluru",
        image: socialEventImage,
        alt: "Infosys townhall event in Bengaluru",
      },
      {
        id: "infosys-hyderabad-product-launch",
        location: "Hyderabad",
        image: corporateEventImage,
        alt: "Infosys product launch event in Hyderabad",
      },
    ],
  },
  {
    companyName: "Reliance Industries",
    events: [
      {
        id: "reliance-delhi-brand-showcase",
        location: "New Delhi",
        image: aboutEventImage,
        alt: "Reliance Industries brand showcase in New Delhi",
      },
      {
        id: "reliance-mumbai-sales-conclave",
        location: "Mumbai",
        image: corporateEventImage,
        alt: "Reliance Industries sales conclave in Mumbai",
      },
      {
        id: "reliance-jaipur-partner-meet",
        location: "Jaipur",
        image: socialEventImage,
        alt: "Reliance Industries partner meet in Jaipur",
      },
    ],
  },
  {
    companyName: "Mahindra & Mahindra",
    events: [
      {
        id: "mahindra-nagpur-dealer-event",
        location: "Nagpur",
        image: corporateEventImage,
        alt: "Mahindra and Mahindra dealer event in Nagpur",
      },
      {
        id: "mahindra-indore-recognition-night",
        location: "Indore",
        image: aboutEventImage,
        alt: "Mahindra and Mahindra recognition night in Indore",
      },
    ],
  },
];
