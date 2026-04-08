'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Send, CheckCircle, Star, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import StoreLocator from '@/components/StoreLocator';

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

const sisterBrands = [
  { name: "Mabel's Kitchen", desc: 'Southern comfort food done right.', address: 'Bryson City, NC', color: '#A70016', img: '/images/mabels.png', url: 'https://mabelskitchennc.com' },
  { name: 'Ice Cream Station & More', desc: 'Soft serve, shakes, sundaes, and seasonal scoops.', address: 'Cherokee, NC', color: '#FFBF31', img: '/images/ice-cream.png', url: 'https://icecreamstationandmore.com' },
  { name: 'All Fried Up', desc: 'Fried everything. Funnels to fish, corn dogs to cheese curds.', address: 'Whittier, NC', color: '#EC1C24', img: '/images/all-fried-up.png', url: 'https://allfriedupnc.com' },
];

const topicOptions = [
  'Food Quality', 'Customer Service', 'Wait Time / Speed', 'Cleanliness',
  'Order Accuracy', 'Pricing / Value', 'Catering Inquiry', 'Suggestion / Idea', 'Compliment', 'Other',
];

const inputStyle: React.CSSProperties = {
  width: '100%', fontFamily: "'Lato', sans-serif", fontSize: '15px', color: '#232323',
  backgroundColor: '#F7F7F7', border: '1.5px solid #E0E0E0', borderRadius: '8px',
  padding: '14px 18px', outline: 'none', boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px',
  color: '#232323', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px',
};

const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Outstanding!'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', receiptNumber: '', location: '', topic: '', message: '' });
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true); // Show success regardless
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <style>{`.wgg-card-hover:hover{transform:translateY(-4px);transition:transform 0.25s ease}.wgg-card-hover{transition:transform 0.25s ease}`}</style>

      {/* HERO */}
      <section style={{ backgroundColor: '#232323', padding: '88px 24px 72px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Reveal delay={0.1}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>We&apos;re Here for You</div>
          </Reveal>
          <Reveal delay={0.22}>
            <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(26px, 5vw, 48px)', margin: '0 0 18px', lineHeight: 1.15 }}>Let&apos;s Talk.</h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#bbb', fontSize: '16px', lineHeight: 1.75, margin: '0 0 28px' }}>
              Questions, feedback, catering, or just want to say hi — Thomas and Norma are right here. For any comments or concerns, reach us directly at{' '}
              <a href="mailto:info@wizeguyzgrille.com" style={{ color: '#FFBF31', textDecoration: 'underline' }}>info@wizeguyzgrille.com</a>.
            </p>
          </Reveal>
          <Reveal delay={0.46}>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:info@wizeguyzgrille.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '14px', color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 22px', borderRadius: '9999px', textDecoration: 'none' }}>
                <Mail size={16} color="#FFBF31" /> info@wizeguyzgrille.com
              </a>
              <a href="tel:+18284970000" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '14px', color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 22px', borderRadius: '9999px', textDecoration: 'none' }}>
                <Phone size={16} color="#FFBF31" /> Call Any Location
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEEDBACK FORM */}
      <section style={{ backgroundColor: '#E8E8E8', padding: '88px 24px' }}>
        <Reveal>
          <div style={{ maxWidth: '760px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '48px 40px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
            {!submitted ? (
              <>
                <div style={{ marginBottom: '36px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Comic Relief', cursive", color: '#EC1C24', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>Your Feedback Matters</div>
                  <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(20px, 3vw, 32px)', margin: '0 0 10px' }}>Tell Us How We&apos;re Doing</h2>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#777', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>We read every single one. Good or bad — we want to know.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Thomas Bynum" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={labelStyle}>Receipt Number <span style={{ color: '#aaa', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
                      <input name="receiptNumber" value={form.receiptNumber} onChange={handleChange} placeholder="#00000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Location *</label>
                      <select name="location" value={form.location} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select a location…</option>
                        <option value="Cherokee">Cherokee</option>
                        <option value="Bryson City">Bryson City</option>
                        <option value="Deep Creek">Deep Creek</option>
                        <option value="Whittier">Whittier</option>
                        <option value="General">General / Not Sure</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Topic *</label>
                    <select name="topic" value={form.topic} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">What&apos;s this about?</option>
                      {topicOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: '28px' }}>
                    <label style={labelStyle}>Rate Your Experience *</label>
                    <div style={{ backgroundColor: '#F7F7F7', border: '1.5px solid #E0E0E0', borderRadius: '8px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" className="star-btn" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} aria-label={`Rate ${star} out of 5`} style={{ transition: 'transform 0.15s ease' }}>
                            <Star size={34} fill={(hoverRating || rating) >= star ? '#FFBF31' : 'transparent'} color={(hoverRating || rating) >= star ? '#FFBF31' : '#CCC'} strokeWidth={1.5} />
                          </button>
                        ))}
                      </div>
                      {(hoverRating || rating) > 0 ? (
                        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: rating >= 4 ? '#2a9d3a' : rating >= 3 ? '#FFBF31' : '#EC1C24' }}>
                          {ratingLabels[hoverRating || rating]}
                        </div>
                      ) : (
                        <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#aaa' }}>Tap a star to rate</div>
                      )}
                    </div>
                  </div>
                  <div style={{ marginBottom: '28px' }}>
                    <label style={labelStyle}>Your Comments *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us what happened — great experience, something that could be better, a specific shout-out for a crew member…" style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }} />
                  </div>
                  <button type="submit" disabled={submitting} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', backgroundColor: '#A70016', color: '#fff', padding: '16px 40px', borderRadius: '9999px', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em', width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}>
                    <Send size={17} /> {submitting ? 'Sending…' : 'Submit Feedback'}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <CheckCircle size={56} color="#EC1C24" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '28px', margin: '0 0 12px' }}>Thanks for the Feedback!</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#555', fontSize: '15px', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>
                  Thomas and Norma will personally review it. You help us get better — and we appreciate that more than you know.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* ALL 4 LOCATIONS */}
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

      {/* SISTER BRANDS */}
      <section style={{ backgroundColor: '#fff', padding: '88px 24px', borderTop: '1px solid #E8E8E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#A70016', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>The Bynum Food Group Family</div>
            <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 38px)', margin: 0 }}>More Flavor. Same Family.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '48px' }}>
            {sisterBrands.map((brand) => (
              <a key={brand.name} href={brand.url} target="_blank" rel="noreferrer" className="wgg-card-hover" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E8E8E8', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', textDecoration: 'none', display: 'block' }}>
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
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://linktr.ee/wizeguyzgrille" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: '#A70016', border: '2px solid #A70016', padding: '14px 36px', borderRadius: '9999px', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Explore the Family <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CATERING CALLOUT */}
      <section style={{ backgroundColor: '#FFBF31', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>🎉</div>
          <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(22px, 3.5vw, 38px)', margin: '0 0 14px' }}>Planning Something Big?</h2>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#232323', lineHeight: 1.7, marginBottom: '32px' }}>
            Corporate events, reunions, game days, birthday parties — we cater them all. Wing platters, pizza spreads, burger bars. Let us handle the food so you can actually enjoy your own event.
          </p>
          <a href="mailto:catering@wizeguyzgrille.com" style={{ display: 'inline-block', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', backgroundColor: '#A70016', color: '#fff', padding: '18px 44px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            Request a Catering Quote
          </a>
        </div>
      </section>

      {/* MAP */}
      <section style={{ backgroundColor: '#232323' }}>
        <StoreLocator />
      </section>
    </div>
  );
}
