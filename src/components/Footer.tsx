import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const locations = [
  { name: 'Cherokee', label: 'Wize Guyz Grille', address: '68 Big Cove Rd Suite 8, Cherokee, NC 28719', phone: '(828) 497-2838' },
  { name: 'Bryson City', label: 'Wize Guyz Grille', address: '240 Main St, Bryson City, NC 28713', phone: '(828) 366-0013' },
  { name: 'Deep Creek', label: 'Wize Guyz Express', address: '1880 W Deep Creek Rd, Bryson City, NC 28713', phone: '(828) 488-6052' },
  { name: 'Whittier', label: 'Wize Guyz Express', address: '4732 US-74, Whittier, NC 28789', phone: '(828) 370-2084' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About & Locations', path: '/about' },
  { label: 'Wize Guyz Club', path: '/club' },
  { label: 'Contact', path: '/contact' },
];

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#232323', color: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 40px' }}>
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
              <Image
                src="/images/logo.png"
                alt="Wize Guyz Grille"
                width={160}
                height={56}
                style={{ height: '56px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#aaa', lineHeight: 1.7, marginBottom: '20px' }}>
              A Bynum Food Group Restaurant.<br />Serving Western North Carolina since 2012.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <a
                href="mailto:info@wizeguyzgrille.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#ccc', textDecoration: 'none' }}
              >
                <Mail size={14} color="#FFBF31" /> info@wizeguyzgrille.com
              </a>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="https://instagram.com/wizeguyzgrille" target="_blank" rel="noreferrer" style={{ color: '#FFBF31' }} aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="https://facebook.com/wizeguyzgrille" target="_blank" rel="noreferrer" style={{ color: '#FFBF31' }} aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://tiktok.com/@wizeguyzgrille" target="_blank" rel="noreferrer" style={{ color: '#FFBF31' }} aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', color: '#FFBF31', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{ display: 'block', fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.2s' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Locations */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', color: '#FFBF31', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Our Locations
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {locations.map((loc) => (
                <div key={loc.name}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <MapPin size={14} color="#EC1C24" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '14px', color: '#fff', marginBottom: '2px' }}>{loc.name}</div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '11px', color: '#FFBF31', marginBottom: '3px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{loc.label}</div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#aaa', lineHeight: 1.5, marginBottom: '3px' }}>{loc.address}</div>
                      <a
                        href={`tel:${loc.phone.replace(/\D/g, '')}`}
                        style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}
                      >
                        <Phone size={12} color="#FFBF31" /> {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #333',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#555' }}>
            © 2026 Wize Guyz Grille · A Bynum Food Group Restaurant · All Rights Reserved
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#555', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#555', textDecoration: 'none' }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
