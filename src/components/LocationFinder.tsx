'use client';

import { useState, useMemo } from 'react';
import {
  Search, MapPin, Phone, Clock, CheckCircle,
  ChevronLeft, ExternalLink, Navigation,
} from 'lucide-react';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const TODAY = DAYS[new Date().getDay()];

interface HoursMap { [day: string]: string; }

interface Location {
  id: number;
  name: string;
  tag: string;
  address: string;
  city: string;
  phone: string;
  hours: HoursMap;
  features: string[];
  lat: number;
  lng: number;
  isOpen: boolean;
  mapSrc: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Wize Guyz Grille',
    tag: 'CHEROKEE — FLAGSHIP',
    address: '68 Big Cove Rd Suite 8',
    city: 'Cherokee, NC 28719',
    phone: '(828) 497-2838',
    hours: {
      Monday: '11:00 AM – 9:00 PM', Tuesday: '11:00 AM – 9:00 PM',
      Wednesday: '11:00 AM – 9:00 PM', Thursday: '11:00 AM – 9:00 PM',
      Friday: '11:00 AM – 10:00 PM', Saturday: '11:00 AM – 10:00 PM',
      Sunday: '12:00 PM – 8:00 PM',
    },
    features: ['Dine-In', 'Takeout', 'Catering'],
    lat: 35.4788, lng: -83.3099, isOpen: true,
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=-83.320,35.470,-83.300,35.490&layer=mapnik&marker=35.4788,-83.3099',
  },
  {
    id: 2,
    name: 'Wize Guyz Grille',
    tag: 'BRYSON CITY — FLAGSHIP',
    address: '240 Main St',
    city: 'Bryson City, NC 28713',
    phone: '(828) 366-0013',
    hours: {
      Monday: '11:00 AM – 9:00 PM', Tuesday: '11:00 AM – 9:00 PM',
      Wednesday: '11:00 AM – 9:00 PM', Thursday: '11:00 AM – 9:00 PM',
      Friday: '11:00 AM – 10:00 PM', Saturday: '11:00 AM – 10:00 PM',
      Sunday: '12:00 PM – 8:00 PM',
    },
    features: ['Dine-In', 'Takeout', 'Catering'],
    lat: 35.4282, lng: -83.4496, isOpen: true,
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=-83.460,35.420,-83.440,35.440&layer=mapnik&marker=35.4282,-83.4496',
  },
  {
    id: 3,
    name: 'Wize Guyz Express',
    tag: 'DEEP CREEK',
    address: '1880 W Deep Creek Rd',
    city: 'Bryson City, NC 28713',
    phone: '(828) 488-6052',
    hours: {
      Monday: 'Closed', Tuesday: '11:00 AM – 8:00 PM',
      Wednesday: '11:00 AM – 8:00 PM', Thursday: '11:00 AM – 8:00 PM',
      Friday: '11:00 AM – 9:00 PM', Saturday: '10:00 AM – 9:00 PM',
      Sunday: '10:00 AM – 7:00 PM',
    },
    features: ['Takeout', 'Catering'],
    lat: 35.461, lng: -83.4558, isOpen: false,
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=-83.466,35.453,-83.446,35.473&layer=mapnik&marker=35.4610,-83.4558',
  },
  {
    id: 4,
    name: 'Wize Guyz Express',
    tag: 'WHITTIER',
    address: '4732 US-74',
    city: 'Whittier, NC 28789',
    phone: '(828) 370-2084',
    hours: {
      Monday: '11:00 AM – 8:00 PM', Tuesday: '11:00 AM – 8:00 PM',
      Wednesday: '11:00 AM – 8:00 PM', Thursday: '11:00 AM – 8:00 PM',
      Friday: '11:00 AM – 9:00 PM', Saturday: '11:00 AM – 9:00 PM',
      Sunday: '12:00 PM – 7:00 PM',
    },
    features: ['Dine-In', 'Takeout'],
    lat: 35.4423, lng: -83.2953, isOpen: true,
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=-83.305,35.435,-83.285,35.455&layer=mapnik&marker=35.4423,-83.2953',
  },
];

const WNC_MAP =
  'https://www.openstreetmap.org/export/embed.html?bbox=-83.5,35.3,-83.2,35.6&layer=mapnik';

export function LocationFinder() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'DINE-IN' | 'CATERING'>('ALL');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [detailId, setDetailId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        loc.city.toLowerCase().includes(q) ||
        loc.tag.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q);
      const matchesFilter =
        activeFilter === 'ALL' ||
        (activeFilter === 'DINE-IN' && loc.features.includes('Dine-In')) ||
        (activeFilter === 'CATERING' && loc.features.includes('Catering'));
      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  const detailLoc = detailId ? locations.find((l) => l.id === detailId) : null;
  const activeLoc = selectedId ? locations.find((l) => l.id === selectedId) : null;
  const mapSrc = activeLoc ? activeLoc.mapSrc : WNC_MAP;

  const mapsUrl = (loc: Location) =>
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address + ', ' + loc.city)}`;

  return (
    <div style={{ backgroundColor: '#232323', paddingBottom: '56px' }}>
      <div className="wgg-mobile-margin" style={{ margin: '0 24px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.45)' }}>
        
        {/* LOCATION LIST SECTION */}
        <div className="wgg-map-sidebar" style={{ width: '100%', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
          {detailLoc ? (
            /* DETAIL VIEW */
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ backgroundColor: '#A70016', padding: '24px' }}>
                <button
                  onClick={() => setDetailId(null)}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', fontFamily: "'Lato', sans-serif", fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0, marginBottom: '14px' }}
                >
                  <ChevronLeft size={16} /> Back to All Locations
                </button>
                <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{detailLoc.tag}</div>
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: '22px', margin: 0 }}>{detailLoc.name}</h3>
              </div>
              <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                  <a href="/store-locator" style={{ flex: 1, textAlign: 'center', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', backgroundColor: '#EC1C24', color: '#fff', padding: '11px 8px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Call Now
                  </a>
                  <a href={mapsUrl(detailLoc)} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', backgroundColor: 'transparent', color: '#EC1C24', padding: '11px 8px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em', border: '2px solid #EC1C24', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <Navigation size={13} /> Directions
                  </a>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', color: '#A70016', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Address</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#333', lineHeight: 1.5 }}>
                    <MapPin size={15} color="#EC1C24" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{detailLoc.address}<br />{detailLoc.city}</span>
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', color: '#A70016', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Phone</div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#333' }}>
                    <Phone size={15} color="#EC1C24" />
                    <a href={`tel:${detailLoc.phone}`} style={{ color: '#333', textDecoration: 'none' }}>{detailLoc.phone}</a>
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', color: '#A70016', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Services</div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {detailLoc.features.map((f) => (
                      <span key={f} style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '11px', color: '#fff', backgroundColor: '#EC1C24', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', color: '#A70016', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Hours</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif", fontSize: '14px' }}>
                    <tbody>
                      {DAYS.map((day) => (
                        <tr key={day}>
                          <td style={{ padding: '8px 4px', borderBottom: '1px solid #eee', fontWeight: 700, color: '#333', width: '80px' }}>{day}</td>
                          <td style={{ padding: '8px 4px', borderBottom: '1px solid #eee', color: '#555' }}>
                            {detailLoc.hours[day] || 'Closed'}
                            {day === TODAY && (
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '6px', fontFamily: "'Lato', sans-serif", fontSize: '11px', fontWeight: 700, color: detailLoc.isOpen ? '#2ecc71' : '#aaa' }}>
                                <Clock size={11} />
                                {detailLoc.isOpen ? 'Open Now' : 'Closed'}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* LIST VIEW */
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ padding: '20px', borderBottom: '1px solid #E8E8E8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F4F4F4', borderRadius: '9999px', padding: '10px 16px', marginBottom: '14px' }}>
                  <Search size={16} color="#999" />
                  <input type="text" placeholder="Search by city or zip code" value={query} onChange={(e) => setQuery(e.target.value)}
                    style={{ border: 'none', background: 'none', outline: 'none', fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#232323', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {(['ALL', 'DINE-IN', 'CATERING'] as const).map((f) => (
                    <button key={f} onClick={() => setActiveFilter(f)}
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '11px', padding: '7px 16px', borderRadius: '9999px', cursor: 'pointer', letterSpacing: '0.05em', border: activeFilter === f ? 'none' : '2px solid #E8E8E8', backgroundColor: activeFilter === f ? '#EC1C24' : 'transparent', color: activeFilter === f ? '#fff' : '#555', transition: 'all 0.18s' }}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ overflowY: 'auto', flex: 1, WebkitOverflowScrolling: 'touch' }}>
                {filtered.length === 0 && (
                  <div style={{ padding: '40px 24px', textAlign: 'center', fontFamily: "'Lato', sans-serif", color: '#999', fontSize: '14px' }}>
                    No locations found. Try a different search.
                  </div>
                )}
                {filtered.map((loc) => {
                  const isActive = selectedId === loc.id;
                  return (
                    <div key={loc.id} onClick={() => setSelectedId(loc.id)}
                      style={{ padding: '20px 20px 20px 16px', borderBottom: '1px solid #E8E8E8', backgroundColor: isActive ? '#FFF5F5' : '#fff', borderLeft: isActive ? '4px solid #EC1C24' : '4px solid transparent', cursor: 'pointer', transition: 'background-color 0.15s' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ fontFamily: "'Graduate', serif", fontSize: '16px', color: '#EC1C24', letterSpacing: '0.02em' }}>{loc.tag}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: "'Lato', sans-serif", fontSize: '12px', fontWeight: 700, color: loc.isOpen ? '#2ecc71' : '#aaa' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: loc.isOpen ? '#2ecc71' : '#bbb', display: 'inline-block' }} />
                          {loc.isOpen ? 'Open Now' : 'Closed'}
                        </div>
                      </div>
                      <div style={{ fontFamily: "'Graduate', serif", fontSize: '20px', color: '#232323', marginBottom: '8px', lineHeight: 1.3 }}>{loc.name}</div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', marginBottom: '8px', lineHeight: 1.6 }}>{loc.address}</div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', marginBottom: '12px', lineHeight: 1.6 }}>{loc.city}</div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); setDetailId(loc.id); }}
                          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', padding: '8px 16px', borderRadius: '9999px', cursor: 'pointer', letterSpacing: '0.05em', border: '2px solid #EC1C24', backgroundColor: '#EC1C24', color: '#fff', transition: 'all 0.18s' }}
                        >
                          View Details
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(mapsUrl(loc), '_blank'); }}
                          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', padding: '8px 16px', borderRadius: '9999px', cursor: 'pointer', letterSpacing: '0.05em', border: '2px solid #EC1C24', backgroundColor: 'transparent', color: '#EC1C24', transition: 'all 0.18s' }}
                        >
                          📍 Directions
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); window.open(`tel:${loc.phone}`, '_self'); }}
                          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '12px', padding: '8px 16px', borderRadius: '9999px', cursor: 'pointer', letterSpacing: '0.05em', border: '2px solid #EC1C24', backgroundColor: '#EC1C24', color: '#fff', transition: 'all 0.18s' }}
                        >
                          📞 {loc.phone}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        {/* MAP SECTION */}
        <div className="wgg-map-panel" style={{ width: '100%', minHeight: '400px', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&h=600"
              alt="Wize Guyz Locations Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(236,28,36,0.1) 0%, rgba(35,35,35,0.05) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '16px', maxWidth: '400px', margin: '20px' }}>
                <MapPin size={48} color="#EC1C24" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '24px', margin: '0 0 12px' }}>4 Locations Across Western NC</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#555', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                  Serving Cherokee, Bryson City, Sylva, and Waynesville with the best wings, burgers, and pizza in the mountains.
                </p>
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {locations.slice(0, 3).map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      style={{ 
                        fontFamily: "'Lato', sans-serif", 
                        fontWeight: 700, 
                        fontSize: '12px', 
                        padding: '8px 16px', 
                        borderRadius: '9999px', 
                        cursor: 'pointer', 
                        letterSpacing: '0.05em', 
                        border: '2px solid #EC1C24', 
                        backgroundColor: selectedId === loc.id ? '#EC1C24' : 'transparent', 
                        color: selectedId === loc.id ? '#fff' : '#EC1C24',
                        transition: 'all 0.18s',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {loc.tag.split(' — ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
