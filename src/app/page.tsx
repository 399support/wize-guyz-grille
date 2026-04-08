import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Flame, Clock, Award, ChevronRight, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import StoreLocator from '@/components/StoreLocator';

export const metadata: Metadata = {
  title: 'Big Flavor. Real Beef. No Shortcuts.',
  description:
    'Juicy Black Angus burgers, flavor-loaded wings, and NY-style pizza made fresh. Four locations across Western NC.',
};

const specials = [
  {
    img: '/images/burger-hero.png',
    label: 'THE BIG GUYZ BURGER',
    tag: 'Fan Favorite',
    desc: 'A half-pound Black Angus smash patty stacked with crispy bacon, cheddar, house pickles, and our signature Wize sauce. No fork needed.',
  },
  {
    img: '/images/wings.png',
    label: 'FLAVOR-LOADED WINGS',
    tag: 'Order Again & Again',
    desc: '10 jumbo wings tossed in your choice of 8 sauces — from sweet honey gold to face-melting inferno. Brought to you crispy. Always.',
  },
  {
    img: '/images/pizza.png',
    label: '16" NY-STYLE PIZZA',
    tag: 'Feeding the Crew?',
    desc: 'Hand-stretched dough, house-made sauce, real mozzarella. Available by the slice or full pie. This is not delivery. This is Wize Guyz.',
  },
];

const reviews = [
  { stars: 5, quote: "Best burger I've had in all of Western NC. The sauce is ridiculous — in the best way.", author: 'Tyler R.', source: 'Google Review' },
  { stars: 5, quote: 'Stopped in after a hike at Deep Creek and it was a total game changer. Wings were CRISPY.', author: 'Amanda F.', source: 'Google Review' },
  { stars: 5, quote: "Family of 5, everyone happy. Pizza, wings, burgers — all incredible. We'll be back.", author: 'Mark & Susan D.', source: 'Google Review' },
  { stars: 5, quote: 'This place is legit. Food comes out fast, tastes amazing, and the crew is super friendly.', author: 'James T.', source: 'Google Review' },
  { stars: 5, quote: 'Drove 30 minutes just for the burger. Worth it. Honestly might do it again tomorrow.', author: 'Kayla M.', source: 'Google Review' },
  { stars: 5, quote: 'Went for dinner one night and ended up going back for lunch the next day.', author: 'TripAdvisor Guest', source: 'TripAdvisor' },
  { stars: 5, quote: 'Their meat lovers pizza is hands down the best pizza we have ever had. Chili cheese fries and loaded fries are simply delicious.', author: 'TripAdvisor Guest', source: 'TripAdvisor' },
  { stars: 5, quote: 'Their garlic parmesan wings were delicious. Service was great — they talked us through their favorites and the food came out super fast.', author: 'Wizeguyzgrille', source: 'Google Review' },
  { stars: 5, quote: "The friendliest staff you'll find anywhere. Come hungry and thirsty!", author: 'Wizeguyzgrillebc', source: 'Google Review' },
  { stars: 5, quote: 'The burgers were hand pressed, thick, and perfectly cooked. The fried mushrooms and onion rings were perfect and not greasy.', author: 'TripAdvisor Guest', source: 'TripAdvisor' },
];

const whyBlocks: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Flame, title: 'Real Kitchen. Real Grill.', body: "Every patty, wing, and pie is made to order on a real grill by real people. We don't press a button and wait. We cook your food." },
  { icon: Clock, title: 'Fast and Friendly, Always.', body: 'Fast casual means you get great food without the wait. Our crew moves fast, smiles big, and gets your order right the first time.' },
  { icon: Award, title: 'Quality You Can Taste.', body: 'Black Angus beef. Fresh-pressed dough. Real cheese. We source quality ingredients because shortcuts show up on the plate.' },
];

const sisterBrands = [
  { name: "Mabel's Kitchen", desc: 'Southern comfort food done right. Home-style plates with all the fixings.', address: 'Bryson City, NC', color: '#A70016', img: '/images/mabels.png', url: 'https://mabelskitchennc.com' },
  { name: 'Ice Cream Station & More', desc: 'Soft serve, shakes, sundaes, and seasonal scoops. The perfect finish.', address: 'Cherokee, NC', color: '#FFBF31', img: '/images/ice-cream.png', url: 'https://icecreamstationandmore.com' },
  { name: 'All Fried Up', desc: 'Fried everything. Funnels to fish, corn dogs to cheese curds. Oh yeah.', address: 'Whittier, NC', color: '#EC1C24', img: '/images/all-fried-up.png', url: 'https://allfriedupnc.com' },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', height: 'calc(100vh - 72px)', minHeight: '580px', overflow: 'hidden' }}>
        <Image src="/images/burger-hero.png" alt="Wize Guyz Grille signature burger" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '0 24px' }}>
          <Reveal delay={0.1}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Western North Carolina&apos;s Favorite Grill
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(32px, 6vw, 72px)', lineHeight: 1.1, maxWidth: '860px', margin: '0 0 24px', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
              Big Flavor.<br />Real Beef.<br />No Shortcuts.
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#E8E8E8', fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '40px' }}>
              Juicy Black Angus burgers. Flavor-loaded wings. NY-style pizza made fresh. Right here in the Smokies — and worth every bite.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <a href="#" className="wgg-btn-primary" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, backgroundColor: '#EC1C24', color: '#fff', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', boxShadow: '0 4px 20px rgba(236,28,36,0.5)', transition: 'background-color 0.2s' }}>
              Order Now
            </a>
          </Reveal>
          <Reveal delay={0.65}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '32px' }}>
              {['Cherokee', 'Bryson City', 'Deep Creek', 'Whittier'].map((loc) => (
                <span key={loc} className="wgg-location-tag" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, color: '#fff', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '9999px', letterSpacing: '0.05em' }}>
                  📍 {loc}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT'S HOT RIGHT NOW */}
      <section style={{ backgroundColor: '#232323', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                On the Menu Right Now
              </div>
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(26px, 4vw, 42px)', margin: 0 }}>
                What&apos;s Hot Right Now
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {specials.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.12} direction="up">
                <div className="wgg-card-hover" style={{ backgroundColor: '#2e2e2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid #333' }}>
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <Image src={item.img} alt={item.label} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#EC1C24', color: '#fff', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '11px', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.tag}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: '17px', margin: '0 0 12px', lineHeight: 1.3 }}>{item.label}</h3>
                    <p style={{ fontFamily: "'Lato', sans-serif", color: '#bbb', fontSize: '14px', lineHeight: 1.65, margin: '0 0 20px' }}>{item.desc}</p>
                    <a href="#" style={{ display: 'inline-block', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', backgroundColor: '#EC1C24', color: '#fff', padding: '10px 22px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Order Now
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/menu" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '14px', color: '#FFBF31', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #FFBF31', paddingBottom: '2px' }}>
                Order Now <ChevronRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOCIAL PROOF MARQUEE */}
      <section style={{ backgroundColor: '#FFBF31', padding: '72px 0', overflow: 'hidden' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 24px' }}>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 34px)', margin: 0 }}>
              What People Are Saying
            </h2>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#232323', fontSize: '15px', marginTop: '8px' }}>
              ★★★★★ across Google &amp; TripAdvisor
            </p>
          </div>
        </Reveal>
        <div style={{ overflow: 'hidden' }}>
          <div className="wgg-marquee">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} style={{ minWidth: '320px', maxWidth: '320px', margin: '0 16px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star key={s} size={16} fill="#EC1C24" color="#EC1C24" />
                  ))}
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#232323', lineHeight: 1.7, margin: '0 0 12px', fontStyle: 'italic' }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', color: '#A70016' }}>
                  — {r.author} · {r.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WIZE GUYZ */}
      <section style={{ backgroundColor: '#fff', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ fontFamily: "'Comic Relief', cursive", color: '#EC1C24', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                Why We&apos;re Different
              </div>
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 38px)', margin: 0, lineHeight: 1.25 }}>
                Not a Chain. Never Frozen.<br />Always Delicious.
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {whyBlocks.map((block, i) => {
              const IconComp = block.icon;
              return (
                <Reveal key={block.title} delay={i * 0.15} direction="up">
                  <div style={{ textAlign: 'center', padding: '40px 32px', borderRadius: '12px', backgroundColor: '#F7F7F7' }}>
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                      <IconComp size={36} color="#EC1C24" />
                    </div>
                    <h3 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '18px', color: '#232323', margin: '0 0 12px' }}>{block.title}</h3>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', lineHeight: 1.75, margin: 0 }}>{block.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SISTER BRANDS */}
      <section style={{ backgroundColor: '#fff', padding: '88px 24px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Comic Relief', cursive", color: '#A70016', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>
                The Bynum Food Group Family
              </div>
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 38px)', margin: 0 }}>
                More Flavor. Same Family.
              </h2>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '48px' }}>
            {sisterBrands.map((brand, i) => (
              <Reveal key={brand.name} delay={i * 0.12} direction="up">
                <a href={brand.url} target="_blank" rel="noreferrer" className="wgg-card-hover" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E8E8E8', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', textDecoration: 'none', display: 'block' }}>
                  <div style={{ height: '8px', backgroundColor: brand.color }} />
                  <div style={{ padding: '32px' }}>
                    <div style={{ margin: '-32px -32px 24px -32px', overflow: 'hidden', height: '200px', position: 'relative' }}>
                      <Image src={brand.img} alt={brand.name} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '20px', margin: '0 0 12px' }}>{brand.name}</h3>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', lineHeight: 1.7, margin: '0 0 16px' }}>{brand.desc}</p>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', color: '#aaa' }}>📍 {brand.address}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div style={{ textAlign: 'center' }}>
              <a href="https://linktr.ee/wizeguyzgrille" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: '#A70016', border: '2px solid #A70016', padding: '14px 36px', borderRadius: '9999px', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Explore the Family <ExternalLink size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section style={{ backgroundColor: '#A70016', padding: '88px 24px', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(32px, 6vw, 64px)', margin: '0 0 12px' }}>
            You Ready?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '18px', margin: '0 0 44px' }}>
            Four locations. One obsession. Big flavor.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <a href="#" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', backgroundColor: '#fff', color: '#A70016', padding: '18px 40px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Order Now
          </a>
        </Reveal>
      </section>

      {/* LOCATION FINDER */}
      <section style={{ backgroundColor: '#232323' }}>
        <StoreLocator />
      </section>
    </div>
  );
}
