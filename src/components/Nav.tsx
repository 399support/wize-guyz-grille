'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About & Locations', path: '/about' },
  { label: 'Wize Guyz Club', path: '/club' },
  { label: 'Contact', path: '/contact' },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#fff',
        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/logo.png"
            alt="Wize Guyz Grille — Pizza, Burgers, Wings"
            width={180}
            height={52}
            style={{ height: '52px', width: 'auto', display: 'block' }}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex" style={{ gap: '28px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                color: isActive(link.path) ? '#EC1C24' : '#232323',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
                borderBottom: isActive(link.path) ? '2px solid #EC1C24' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call Now Button (desktop) */}
        <div className="hidden lg:block">
          <a
            href="/store-locator"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '14px',
              backgroundColor: '#EC1C24',
              color: '#fff',
              padding: '11px 26px',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#EC1C24',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            backgroundColor: '#fff',
            borderTop: '3px solid #EC1C24',
            padding: '16px 24px 28px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                color: isActive(link.path) ? '#EC1C24' : '#232323',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid #E8E8E8',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/store-locator"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              backgroundColor: '#EC1C24',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '9999px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
