import { Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const locations = [
  { tag: 'Cherokee — Flagship', address: '68 Big Cove Rd Suite 8', city: 'Cherokee, NC 28719', phone: '(828) 497-2838', color: '#EC1C24',
    hours: [{ days: 'Mon – Thu', time: '11:00 AM – 9:00 PM' }, { days: 'Fri – Sat', time: '11:00 AM – 10:00 PM' }, { days: 'Sunday', time: '12:00 PM – 8:00 PM' }] },
  { tag: 'Bryson City — Flagship', address: '240 Main St', city: 'Bryson City, NC 28713', phone: '(828) 366-0013', color: '#A70016',
    hours: [{ days: 'Mon – Thu', time: '11:00 AM – 9:00 PM' }, { days: 'Fri – Sat', time: '11:00 AM – 10:00 PM' }, { days: 'Sunday', time: '12:00 PM – 8:00 PM' }] },
  { tag: 'Deep Creek', address: '1880 W Deep Creek Rd', city: 'Bryson City, NC 28713', phone: '(828) 488-6052', color: '#FFBF31',
    hours: [{ days: 'Monday', time: 'Closed' }, { days: 'Tue – Thu', time: '11:00 AM – 8:00 PM' }, { days: 'Fri – Sat', time: '11:00 AM – 9:00 PM' }, { days: 'Sunday', time: '10:00 AM – 7:00 PM' }] },
  { tag: 'Whittier', address: '4732 US-74', city: 'Whittier, NC 28789', phone: '(828) 370-2084', color: '#232323',
    hours: [{ days: 'Mon – Thu', time: '11:00 AM – 8:00 PM' }, { days: 'Fri – Sat', time: '11:00 AM – 9:00 PM' }, { days: 'Sunday', time: '12:00 PM – 7:00 PM' }] },
];

export default function LocationCards() {
  return (
    <section style={{ backgroundColor: '#F7F7F7', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#EC1C24', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>4 Locations Across Western NC</div>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 36px)', margin: 0 }}>Find Your Nearest Wize Guyz</h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {locations.map((loc, i) => (
            <Reveal key={loc.tag} delay={i * 0.1} direction="up">
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #E8E8E8' }}>
                <div style={{ height: '6px', backgroundColor: loc.color }} />
                <div style={{ padding: '28px 24px' }}>
                  <div style={{ fontFamily: "'Comic Relief', cursive", fontSize: '11px', color: loc.color === '#FFBF31' ? '#A70016' : loc.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{loc.tag}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: '#232323', marginBottom: '4px' }}>{loc.address}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#777', marginBottom: '16px' }}>{loc.city}</div>
                  <a href={`tel:${loc.phone.replace(/\D/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '14px', color: '#EC1C24', textDecoration: 'none', marginBottom: '14px' }}>
                    <Phone size={14} /> {loc.phone}
                  </a>
                  <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {loc.hours.map((h) => (
                      <div key={h.days} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: "'Lato', sans-serif", fontSize: '12px' }}>
                        <span style={{ color: '#555', fontWeight: 700, minWidth: '80px' }}>{h.days}</span>
                        <span style={{ color: h.time === 'Closed' ? '#EC1C24' : '#888' }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
