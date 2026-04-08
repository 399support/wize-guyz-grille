import type { Metadata } from 'next';
import Image from 'next/image';
import { Tag, CalendarDays, Gift, Users, Instagram, Facebook } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Wize Guyz Club',
  description: 'Join the Wize Guyz Club for exclusive deals, early access to events, birthday rewards, and more. Get first dibs on everything.',
};

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
  const instagramData = await getInstagramData();

  const perks: { icon: LucideIcon; title: string; badge: string | null; desc: string }[] = [
    { icon: Tag, title: 'Members-Only Deals', badge: null, desc: 'Exclusive discounts and combo offers unlocked just for Wize Guyz Club members. Things that regular menu doesn\'t show.' },
    { icon: CalendarDays, title: 'Early Access to Events', badge: null, desc: 'Get notified first — before we post anything publicly. Be the person who knew about Wing Wars before it sold out.' },
    { icon: Gift, title: 'Birthday Bonus', badge: 'Coming Soon', desc: 'We hook you up on your birthday. The details are being finalized. Just know it\'s worth signing up now.' },
    { icon: Users, title: 'Crew Rewards', badge: 'Coming Soon', desc: 'Bring your crew. Earn your way to free food. A loyalty program designed for people who eat like they mean it.' },
  ];

  return (
    <div style={{ backgroundColor: '#232323', color: '#fff', fontFamily: "'Lato', sans-serif" }}>
      {/* HERO */}
      <section style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <Image 
          src="https://images.unsplash.com/photo-1555939564-9c3d4f5c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920" 
          alt="Wize Guyz Club" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.75) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '0 24px' }}>
          <Reveal delay={0.1}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
              Join Club
            </div>
            <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(32px, 6vw, 48px)', margin: 0 }}>
              Wize Guyz Club
            </h1>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#E8E8E8', fontSize: 'clamp(16px, 3vw, 20px)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '40px' }}>
              Get exclusive deals, early access to events, birthday rewards, and more. Join the crew that gets first dibs on everything.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a 
              href={MAILCHIMP_CLUB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '18px', backgroundColor: '#FFBF31', color: '#232323', padding: '18px 44px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.07em', boxShadow: '0 4px 20px rgba(255,191,49,0.5)', transition: 'background-color 0.2s' }}
            >
              Join the Club
            </a>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ backgroundColor: '#A70016', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(28px, 5vw, 42px)', textAlign: 'center', marginBottom: '56px' }}>
              Club Perks
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {perks.map((perk, index) => (
                <div key={perk.title} style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <perk.icon size={28} color="#fff" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: '20px', margin: '0 0 8px' }}>{perk.title}</h3>
                      {perk.badge && (
                        <span style={{ display: 'inline-block', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '11px', color: '#FFBF31', backgroundColor: 'rgba(255,191,49,0.15)', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', marginLeft: '8px' }}>
                          {perk.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#ccc', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ backgroundColor: '#1a1a1a', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(28px, 5vw, 42px)', textAlign: 'center', marginBottom: '56px' }}>
              What You Get When You Join
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
              {[
                { title: 'Exclusive Deals', desc: 'Members-only discounts and combo offers. Things that regular menu doesn\'t show.' },
                { title: 'Early Access', desc: 'First dibs on new menu items, limited-time specials, and events before anyone else.' },
                { title: 'Birthday Rewards', desc: 'Free dessert or appetizer on your birthday month when you\'re an active member.' },
                { title: 'Crew Points', desc: 'Earn points with every order. Redeem for free food, merch, and special perks.' },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: '#232323', borderRadius: '12px', padding: '32px', border: '1px solid #333' }}>
                  <h3 style={{ fontFamily: "'Graduate', serif", color: '#FFBF31', fontSize: '20px', margin: '0 0 16px' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#E8E8E8', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S COMING UP */}
      <section style={{ backgroundColor: '#E8E8E8', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(28px, 5vw, 42px)', textAlign: 'center', marginBottom: '56px' }}>
              What&apos;s Coming Up
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {[
                { title: 'Wing Wars 2025', desc: 'The biggest wing competition of the year. Members get early access to tickets and VIP seating.' },
                { title: 'New Location', desc: 'We\'re expanding! Club members get first notice of new locations and opening events.' },
                { title: 'Secret Menu', desc: 'Members-only access to experimental items and fan favorites that never make the regular menu.' },
                { title: 'Merch Drop', desc: 'Wize Guyz hats, shirts, and limited edition gear. Club members get first dibs.' },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #ddd', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <h3 style={{ fontFamily: "'Graduate', serif", color: '#EC1C24', fontSize: '20px', margin: '0 0 16px' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#555', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
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
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #2a2a2a' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Instagram size={24} color="#fff" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                    {instagramData?.username || '@wizeguyzgrille'}
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#888' }}>
                    {instagramData?.biography || 'Wize Guyz Grille · Western NC'}
                  </div>
                </div>
                <a 
                  href={instagramData?.website || 'https://instagram.com/wizeguyzgrille'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ marginLeft: 'auto', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', backgroundColor: '#E1306C', color: '#fff', padding: '8px 20px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}
                >
                  Follow
                </a>
              </div>

              {/* Dynamic Instagram Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3px' }}>
                {instagramData?.posts?.map((post: InstagramPost) => (
                  <a 
                    key={post.id} 
                    href={post.permalink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      backgroundColor: '#1a1a1a', 
                      aspectRatio: '1', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      textDecoration: 'none', 
                      position: 'relative', 
                      overflow: 'hidden', 
                      cursor: 'pointer' 
                    }}
                  >
                    <Image
                      src={post.mediaType === 'VIDEO' ? (post.thumbnailUrl || '') : post.mediaUrl}
                      alt={`Instagram post: ${post.caption?.slice(0, 50) || 'Wize Guyz Grille'}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {post.isReel && (
                      <div style={{ 
                        position: 'absolute', 
                        top: '8px', 
                        right: '8px', 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(0,0,0,0.7)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>▶</span>
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div style={{ padding: '20px 24px', borderTop: '1px solid #2a2a2a', textAlign: 'center' }}>
                <a 
                  href={instagramData?.website || 'https://instagram.com/wizeguyzgrille'} 
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
