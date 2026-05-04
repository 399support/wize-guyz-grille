import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Wize Guyz Grille — Pizza, Burgers, Wings in Western NC',
    template: '%s | Wize Guyz Grille',
  },
  description:
    'Juicy Black Angus burgers, flavor-loaded wings, and NY-style pizza made fresh. Four locations across Western North Carolina — Cherokee, Bryson City, Deep Creek, and Whittier.',
  keywords: [
    'Wize Guyz Grille',
    'burgers',
    'wings',
    'pizza',
    'Western North Carolina',
    'Cherokee NC',
    'Bryson City NC',
    'restaurant',
  ],
  metadataBase: new URL('https://wizeguyzgrille.com'),
  openGraph: {
    type: 'website',
    url: 'https://wizeguyzgrille.com',
    siteName: 'Wize Guyz Grille',
    title: 'Wize Guyz Grille — Pizza, Burgers, Wings in Western NC',
    description:
      'Big flavor. Real beef. No shortcuts. Four locations across the NC Smokies.',
    images: [{ url: '/images/burger-hero.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wize Guyz Grille',
    description: 'Big flavor. Real beef. No shortcuts.',
    images: ['/images/burger-hero.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Ch6QqANzdk69tW01LzKqmUX30xpBrdVZ5s0XRinF6BI" />
      </head>

      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-R3LX8N59P6`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-R3LX8N59P6');
  `}
        </Script>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
