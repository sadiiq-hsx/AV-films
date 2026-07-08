import { PortfolioItem, TeamMember, Testimonial } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'w1',
    title: 'The Mahnar Heritage Mansion',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant black-tie ceremony under glowing crystal chandeliers in Bihar.',
    location: 'Mahnar Bazar, Bihar',
    date: 'October 2025',
    aspectRatio: 'landscape'
  },
  {
    id: 'pw1',
    title: 'Ganges Riverfront Sunset',
    category: 'pre-wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=1200',
    description: 'A romantic coastal breeze editorial session overlooking the majestic river sunset.',
    location: 'Patna, Bihar',
    date: 'July 2025',
    aspectRatio: 'portrait'
  },
  {
    id: 'e1',
    title: 'Rajgir Hills Royal Soirée',
    category: 'event',
    imageUrl: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200',
    description: 'Luminous candlelight banquets and exquisite detail coverage.',
    location: 'Rajgir, Bihar',
    date: 'September 2025',
    aspectRatio: 'landscape'
  },
  {
    id: 'w2',
    title: 'Udaipur Lake Palace Celebration',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    description: 'Candid golden warmth and champagne laughter in an ancient stone estate.',
    location: 'Udaipur, Rajasthan',
    date: 'November 2025',
    aspectRatio: 'portrait'
  },
  {
    id: 'pw2',
    title: 'Bodh Gaya Lotus Sanctuary',
    category: 'pre-wedding',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    description: 'Modern minimalist silhouettes captured in a private serene courtyard.',
    location: 'Bodh Gaya, Bihar',
    date: 'April 2025',
    aspectRatio: 'landscape'
  },
  {
    id: 'e2',
    title: 'Goa Beachfront Goldenhour',
    category: 'event',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
    description: 'Stellar garden cocktails and evening fireworks over the ocean waves.',
    location: 'Goa, India',
    date: 'June 2025',
    aspectRatio: 'landscape'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Abhishek Verma',
    role: 'Founder & Principal Cinematographer',
    bio: 'With over a decade of filming luxury wedding and destination events, Abhishek brings an editorial, cinematic eye that blends vintage celluloid texture with modern high-fidelity digital art.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Julian Sterling',
    role: 'Director of Photography',
    bio: 'Julian specializes in natural light sculpture, chasing the elusive gold hour flares and quiet in-between moments that tell a family\'s true legacy with painterly visual depth.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    couple: 'Victoria & Christopher',
    role: 'Destination Wedding in Udaipur',
    quote: 'AV Films didn’t just document our wedding; they directed a cinematic piece of art. Watching our film feels like re-living a classic Indian romance. Every frame is a painting.',
    location: 'Lake Palace, Udaipur',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 't2',
    couple: 'Elena & Rohan',
    role: 'Royal Wedding in Bihar',
    quote: 'The level of professionalism and artistic vision is unmatched. They made us feel so comfortable, capturing raw, honest emotions without any of the awkward posed fatigue.',
    location: 'Mahnar Mansion, Bihar',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  }
];
