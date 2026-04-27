import Image from 'next/image';
import Link from 'next/link';

interface FeaturedCardProps {
  item: {
    label: string;
    desc: string;
    img: string;
    tag: string;
  };
}

export default function FeaturedCard({ item }: FeaturedCardProps) {
  return (
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
        
        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full px-2 mt-4">
          <a 
            href="#" 
            className="w-full sm:w-auto text-center justify-center"
            style={{ 
              display: 'inline-block', 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 700, 
              fontSize: '13px', 
              backgroundColor: '#EC1C24', 
              color: '#fff', 
              padding: '10px 22px', 
              borderRadius: '9999px', 
              textDecoration: 'none', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}
          >
            Call Now
          </a>
          <Link 
            href="/menu"
            className="w-full sm:w-auto text-center justify-center"
            style={{ 
              display: 'inline-block', 
              fontFamily: "'Lato', sans-serif", 
              fontWeight: 700, 
              fontSize: '13px', 
              backgroundColor: 'transparent', 
              color: '#fff', 
              border: '2px solid #fff', 
              padding: '10px 22px', 
              borderRadius: '9999px', 
              textDecoration: 'none', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              transition: 'all 0.2s'
            }}
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
