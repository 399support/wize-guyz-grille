import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import StoreLocator from '@/components/StoreLocator';

export const metadata: Metadata = {
  title: 'About & Locations',
  description:
    'Meet Thomas & Norma Bynum — the founders of Wize Guyz Grille. Learn our story, our manifesto, and find all four locations across Western North Carolina.',
};

const IMG_OWNERS = '/images/Thomas_and_Norma.webp';

const sisterBrands = [
  { name: "Mabel's Kitchen", desc: 'Southern comfort food done right. Home-style plates with all the fixings.', address: 'Bryson City, NC', color: '#A70016', img: '/images/mabels.png', url: 'https://mabelskitchennc.com' },
  { name: 'Ice Cream Station & More', desc: 'Soft serve, shakes, sundaes, and seasonal scoops. The perfect finish.', address: 'Cherokee, NC', color: '#FFBF31', img: '/images/ice-cream.png', url: 'https://icecreamstationandmore.com' },
  { name: 'All Fried Up', desc: 'Fried everything. Funnels to fish, corn dogs to cheese curds. Oh yeah.', address: 'Whittier, NC', color: '#EC1C24', img: '/images/all-fried-up.png', url: 'https://allfriedupnc.com' },
];

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section style={{ backgroundColor: '#232323', padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(167,0,22,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
          <Reveal delay={0.1}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Story
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(28px, 5vw, 54px)', margin: '0 0 20px', lineHeight: 1.15 }}>
              Built on Flavor.<br />For the Community.
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#ccc', fontSize: '17px', lineHeight: 1.75 }}>
              Since 2012, Wize Guyz Grille has been the spot where locals eat, tourists discover, and everyone leaves full.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEET THE OWNERS */}
      <section style={{ backgroundColor: '#fff', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <Reveal direction="left">
            <div style={{ borderRadius: '16px', overflow: 'hidden', maxHeight: '500px', boxShadow: '0 12px 40px rgba(0,0,0,0.15)', position: 'relative', height: '500px' }}>
              <Image src={IMG_OWNERS} alt="Thomas and Norma — Owners of Wize Guyz Grille" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)', padding: '32px 24px 20px' }}>
                <div style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: '16px' }}>Thomas &amp; Norma</div>
                <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', marginTop: '4px' }}>Founders, Wize Guyz Grille</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <div style={{ fontFamily: "'Comic Relief', cursive", color: '#EC1C24', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>
                Meet the Family
              </div>
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(24px, 3.5vw, 38px)', margin: '0 0 24px', lineHeight: 1.2 }}>
                Meet Thomas &amp; Norma.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
                Thomas and Norma didn&apos;t set out to build a restaurant empire. They set out to make food that made people happy — and they were very, very good at it. What started as one location in Cherokee in 2012 became a four-location operation rooted in Western North Carolina&apos;s mountains, rivers, and tight-knit communities.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>
                Every recipe, every location, and every hire reflects their belief that good food is a form of respect — for the ingredients, for the customers, and for the community that keeps showing up. Thomas runs the kitchen philosophy. Norma runs everything else.
              </p>
              <blockquote style={{ borderLeft: '4px solid #EC1C24', margin: 0, paddingLeft: '24px' }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '17px', fontStyle: 'italic', color: '#232323', lineHeight: 1.65, margin: '0 0 8px' }}>
                  &ldquo;We never wanted to be a chain. We wanted to be YOUR place. The spot where you take your family, your crew, your first date. Food should feel like home.&rdquo;
                </p>
                <cite style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', color: '#EC1C24', fontStyle: 'normal' }}>
                  — Thomas, Co-Founder
                </cite>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR MANIFESTO */}
      <section style={{ backgroundColor: '#232323', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <Reveal direction="left">
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.5)', position: 'relative', height: '520px' }}>
              <Image src="/images/burger-photo.png" alt="Wize Guyz Grille — real food, real flavor" fill style={{ objectFit: 'cover' }} />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Our Manifesto
              </div>
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(24px, 4vw, 42px)', margin: '0 0 28px', lineHeight: 1.2 }}>
                Flavor Should Never Be Boring.
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#ddd', lineHeight: 1.85, marginBottom: '20px' }}>
                Out here in the Smokies, the mountains don&apos;t do anything halfway. Neither do we. Wize Guyz Grille was built on the idea that the people who live and work and hike and raise families in Western North Carolina deserve food that matches the energy of where they live. Big. Bold. Real.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#ddd', lineHeight: 1.85, marginBottom: '20px' }}>
                We don&apos;t do frozen. We don&apos;t do shortcuts. We greet every burger, every wing, and every pizza like it&apos;s the most important meal that person&apos;s going to have all week — because for a lot of people, it is. A Saturday treat. A post-game meal. A birthday dinner. We take that seriously.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#ddd', lineHeight: 1.85 }}>
                Four locations, one family, one mission: make you forget you were ever going to eat anywhere else.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SISTER BRANDS */}
      <section style={{ backgroundColor: '#fff', padding: '88px 24px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ fontFamily: "'Comic Relief', cursive", color: '#A70016', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>The Bynum Food Group Family</div>
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 38px)', margin: 0 }}>More Flavor. Same Family.</h2>
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

      {/* CLOSING CTA */}
      <section style={{ backgroundColor: '#A70016', padding: '88px 24px', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(32px, 6vw, 64px)', margin: '0 0 12px' }}>You Ready?</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '18px', margin: '0 0 44px' }}>
            Four locations. One obsession. Big flavor.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <a href="/store-locator" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', backgroundColor: '#fff', color: '#A70016', padding: '18px 40px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Call Now
          </a>
        </Reveal>
      </section>

      {/* LOCATION FINDER */}
      <section style={{ backgroundColor: '#232323' }}>
        <div className="pt-16">
          <StoreLocator />
        </div>
      </section>
    </div>
  );
}
