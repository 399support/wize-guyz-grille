import type { Metadata } from 'next';
import Image from 'next/image';
import { Tag, CalendarDays, Gift, Users, Instagram, Facebook } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import ClubForm from '@/components/ClubForm';

// Type definitions for Instagram post data
interface InstagramPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO';
  isReel?: boolean;
  mediaUrl: string;
  thumbnailUrl?: string;
  sizes: {
    small: { mediaUrl: string; height: number; width: number };
    medium: { mediaUrl: string; height: number; width: number };
    large: { mediaUrl: string; height: number; width: number };
    full: { mediaUrl: string; height: number; width: number };
  };
  caption?: string;
  hashtags: string[];
}

interface InstagramData {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string;
  followersCount: number;
  followsCount: number;
  posts: InstagramPost[];
}

const IMG_HERO = 'https://images.unsplash.com/photo-1758955737392-fe5c7d3daa85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080';

// Mailchimp Club signup URL — set NEXT_PUBLIC_MAILCHIMP_CLUB_URL in .env.local
const MAILCHIMP_CLUB_URL = process.env.NEXT_PUBLIC_MAILCHIMP_CLUB_URL || '#';

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" />
    </svg>
  );
}

// Server-side data fetching with ISR
async function getInstagramData(): Promise<InstagramData | null> {
  try {
    const response = await fetch('https://feeds.behold.so/JXUm4ZnYqqOY7fCHP376', {
      next: { revalidate: 3600 }, // ISR: Revalidate every hour
    });
    
    if (!response.ok) {
      console.error('Failed to fetch Instagram data');
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return null;
  }
}

export default async function ClubPage() {
  // Temporarily disable Instagram feed due to API rate limits
  const instagramData: InstagramData | null = null;

  const perks: { icon: LucideIcon; title: string; badge: string | null; desc: string }[] = [
    { icon: Tag, title: 'Members-Only Deals', badge: null, desc: 'Exclusive discounts and combo offers unlocked just for Wize Guyz Club members. Things that regular menu doesn\'t show.' },
    { icon: CalendarDays, title: 'Early Access to Events', badge: null, desc: 'Get notified first — before we post anything publicly. Be the person who knew about Wing Wars before it sold out.' },
    { icon: Gift, title: 'Birthday Bonus', badge: 'Coming Soon', desc: 'We hook you up on your birthday. The details are being finalized. Just know it\'s worth signing up now.' },
    { icon: Users, title: 'Crew Rewards', badge: 'Coming Soon', desc: 'Bring your crew. Earn your way to free food. A loyalty program designed for people who eat like they mean it.' },
  ];

  return (
    <div style={{ backgroundColor: '#232323', color: '#fff', fontFamily: "'Lato', sans-serif" }}>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[url('/images/club-hero-bg.jpg')] bg-cover bg-center bg-neutral-950/80 pt-32 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/75" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
          <Reveal delay={0.1}>
            <div className="bg-yellow-400 text-neutral-950 font-bold px-6 py-2 rounded-full mx-auto mb-10 inline-block text-sm tracking-widest">🔥 FREE TO JOIN · ALWAYS WORTH IT</div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(36px, 8vw, 64px)', lineHeight: 1.1, margin: '0 0 16px', textAlign: 'center' }}>
                BE FIRST.
              </h1>
              <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(36px, 8vw, 64px)', lineHeight: 1.1, margin: '0 0 16px', textAlign: 'center' }}>
                EAT BETTER.
              </h1>
              <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(36px, 8vw, 64px)', lineHeight: 1.1, margin: '0 0 16px', textAlign: 'center' }}>
                WE'LL HOOK YOU UP.
              </h1>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#E8E8E8', fontSize: 'clamp(16px, 3vw, 20px)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '40px', textAlign: 'center' }}>
                The Wize Guyz Club is where insiders eat. Members get exclusive deals, early access
                to specials, and first dibs on events. It&apos;s free. It&apos;s worth it.
              </p>
              <ClubForm />
              <p className="text-center text-white text-xs mt-4">
                No spam. No nonsense. Just deals and updates from your crew.
              </p>
            </div>
            </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal delay={0.1}>
            <div className="text-red-600 text-sm tracking-widest uppercase mb-4 text-center">MEMBER BENEFITS</div>
            <h2 style={{ fontFamily: '"Graduate", serif' }} className="text-neutral-900 text-4xl lg:text-5xl mb-16 text-center">WHAT YOU GET WHEN YOU JOIN</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((item, index) => (
                <Reveal key={item.title} delay={0.2 + (index * 0.1)}>
                <div className="relative flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6">{item.icon && <item.icon size={24} />}</div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-3">{item.title}</h3>
                      {item.badge && (
                        <span className="absolute top-4 right-4 bg-yellow-400 text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                </Reveal>
              ))}
            </div>
        </div>
      </section>

      {/* WHAT'S COMING UP */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-red-600 text-sm tracking-widest uppercase mb-4 text-center">DON'T MISS THESE</div>
            <h2 style={{ fontFamily: '"Graduate", serif' }} className="text-neutral-950 text-4xl lg:text-5xl mb-16 text-center">WHAT'S COMING UP</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: '🏆', badge: 'upcoming', badgeColor: 'bg-red-600 text-white', title: 'Spring Break Wing Wars', date: '🗓️ March 15-17, 2025', desc: 'The biggest wing competition of the year returns! Three days of intense flavor battles, live music, and craft beer. Members get early access to tickets and VIP seating.' },
                { emoji: '🌸', badge: 'save the date', badgeColor: 'bg-red-600 text-white', title: "Mother's Day Special", date: '🗓️ Sunday, May 11, 2025', desc: 'Treat mom to the best wings in town! Special family packages, complimentary desserts for moms, and exclusive member-only seating reservations.' },
                { emoji: '🏈', badge: 'recurring', badgeColor: 'bg-neutral-600 text-white', title: 'Game Day Saturdays', date: '🗓️ Every Saturday, Fall Season', desc: 'Your game day headquarters! Special game day combos, big screen TVs, and reserved seating for club members during football season.' },
                { emoji: '🍔', badge: 'members first', badgeColor: 'bg-yellow-400 text-neutral-950', title: 'National Burger Day', date: '🗓️ May 28, 2025', desc: 'Exclusive burger creations available only to club members! Limited edition patties, secret sauces, and complimentary sides with any burger purchase.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
                  <div className="bg-neutral-900 rounded-t-2xl p-8">
                    <div className="flex justify-center mb-6 text-5xl">{item.emoji}</div>
                    <div className={`font-bold px-3 py-1 rounded-full uppercase text-[10px] tracking-wider inline-block mb-4 ${item.badge === 'upcoming' || item.badge === 'save the date' ? 'bg-red-600 text-white' : item.badge === 'recurring' ? 'bg-neutral-600 text-white' : 'bg-yellow-400 text-neutral-950'}`}>{item.badge}</div>
                    <h3 style={{ fontFamily: '"Graduate", serif' }} className="text-xl text-white font-graduate font-normal uppercase mb-3">{item.title}</h3>
                    <div className="flex items-center gap-2 text-neutral-300 text-sm">{item.date}</div>
                  </div>
                  <div className="p-8 pt-6">
                    <p className="text-gray-500 text-sm leading-relaxed font-lato">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </Reveal>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section style={{ backgroundColor: '#1a1a1a', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(28px, 5vw, 42px)', textAlign: 'center', marginBottom: '56px' }}>
              Tag Us. We&apos;re Watching.
            </h2>
            
            {/* Instagram feed container */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
              {/* Instagram Header - Temporarily Disabled */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #2a2a2a' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Instagram size={24} color="#fff" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                    @wizeguyzgrille
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#888' }}>
                    Wize Guyz Grille · Western NC
                  </div>
                </div>
                <a 
                  href="https://instagram.com/wizeguyzgrille" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ marginLeft: 'auto', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', backgroundColor: '#E1306C', color: '#fff', padding: '8px 20px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}
                >
                  Follow
                </a>
              </div>

              {/* Instagram Grid - Temporarily Disabled */}
              <div style={{ padding: '40px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#888', marginBottom: '16px' }}>
                  Instagram Feed temporarily disabled due to API rate limits.
                </div>
                <a 
                  href="https://instagram.com/wizeguyzgrille" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    fontFamily: "'Lato', sans-serif", 
                    fontWeight: 700, 
                    fontSize: '14px', 
                    color: '#E1306C', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    letterSpacing: '0.04em', 
                    textTransform: 'uppercase',
                    backgroundColor: 'rgba(225, 48, 108, 0.1)',
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    border: '1px solid #E1306C'
                  }}
                >
                  <Instagram size={16} /> Follow us on Instagram
                </a>
              </div>

              {/* Footer */}
              <div style={{ padding: '20px 24px', borderTop: '1px solid #2a2a2a', textAlign: 'center' }}>
                <a 
                  href="https://instagram.com/wizeguyzgrille" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    fontFamily: "'Lato', sans-serif", 
                    fontWeight: 700, 
                    fontSize: '14px', 
                    color: '#E1306C', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    letterSpacing: '0.04em', 
                    textTransform: 'uppercase' 
                  }}
                >
                  <Instagram size={16} /> View All Posts on Instagram
                </a>
              </div>
            </div>
            </Reveal>
        </div>
      </section>
    </div>
  );
}
