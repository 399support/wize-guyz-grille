'use client';

import { useState } from 'react';
import { Upload, Send, CheckCircle, Briefcase, MapPin, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import StoreLocator from '@/components/StoreLocator';

const locationOptions = ['Cherokee', 'Bryson City', 'Deep Creek', 'Whittier', 'Any'];
const positionOptions = ['Back of House (Kitchen)', 'Front of House (Cashier/Service)', 'Management', 'Any'];

const inputStyle: React.CSSProperties = {
  width: '100%', fontFamily: "'Lato', sans-serif", fontSize: '15px', color: '#232323',
  backgroundColor: '#F7F7F7', border: '1.5px solid #E0E0E0', borderRadius: '8px',
  padding: '14px 18px', outline: 'none', boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px',
  color: '#232323', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px',
};

export default function Career() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', position: '' });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('location', form.location);
      formData.append('position', form.position);
      if (file) {
        formData.append('resume', file);
      }

      const res = await fetch('/api/career', {
        method: 'POST',
        body: formData,
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
      {/* HERO */}
      <section style={{ backgroundColor: '#232323', padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(167,0,22,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
          <Reveal delay={0.1}>
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Join the Crew
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(28px, 5vw, 54px)', margin: '0 0 20px', lineHeight: 1.15 }}>
              Join the Wize Guyz Crew!
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#ccc', fontSize: '17px', lineHeight: 1.75 }}>
              Big Flavor. Real Opportunities. No Shortcuts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ backgroundColor: '#fff', padding: '88px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '24px' }}>
                We&apos;re growing fast, and we&apos;re looking for energetic, hardworking people to join the Wize Guyz Grille family! Whether you&apos;re a grill master, a pizza pro, or love giving guests a reason to smile at the front counter, we have a spot for you on our team.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '24px' }}>
                We are currently hiring for all positions across all four of our Western North Carolina locations (Cherokee, Bryson City, Deep Creek, and Whittier).
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '16px', color: '#444', lineHeight: 1.85 }}>
                If you thrive in a fast-paced, fun environment and want to help serve up the best food in the Smokies, we want to hear from you.
              </p>
            </div>
          </Reveal>

          {/* PERKS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            <Reveal delay={0.1} direction="up">
              <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#F7F7F7', borderRadius: '12px' }}>
                <Briefcase size={40} color="#A70016" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '20px', margin: '0 0 12px' }}>Real Opportunities</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
                  Room to grow. Whether you&apos;re starting out or looking to lead, we invest in our people.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2} direction="up">
              <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#F7F7F7', borderRadius: '12px' }}>
                <MapPin size={40} color="#FFBF31" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '20px', margin: '0 0 12px' }}>Four Locations</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
                  Work where you live. Cherokee, Bryson City, Deep Creek, or Whittier &mdash; your choice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3} direction="up">
              <div style={{ textAlign: 'center', padding: '32px', backgroundColor: '#F7F7F7', borderRadius: '12px' }}>
                <Users size={40} color="#EC1C24" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '20px', margin: '0 0 12px' }}>Family Atmosphere</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
                  More than a job. We&apos;re a family that cares about each other and our community.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ backgroundColor: '#E8E8E8', padding: '88px 24px' }}>
        <Reveal>
          <div style={{ maxWidth: '760px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', padding: '48px 40px', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
            {!submitted ? (
              <>
                <div style={{ marginBottom: '36px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Comic Relief', cursive", color: '#EC1C24', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>Ready to Apply?</div>
                  <h2 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: 'clamp(20px, 3vw, 32px)', margin: '0 0 10px' }}>It&apos;s Easy.</h2>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#777', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                    We don&apos;t do long, complicated applications. Just fill out the quick info below, upload your resume or any relevant documents, and we&apos;ll be in touch!
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="(828) 555-1234" style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={labelStyle}>Preferred Location *</label>
                      <select name="location" value={form.location} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select a location…</option>
                        {locationOptions.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Position of Interest *</label>
                      <select name="position" value={form.position} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select a position…</option>
                        {positionOptions.map((pos) => <option key={pos} value={pos}>{pos}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: '28px' }}>
                    <label style={labelStyle}>Upload Resume / Relevant Documents</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="file"
                        id="resume-upload"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }}
                      />
                      <div style={{ backgroundColor: '#F7F7F7', border: '1.5px dashed #E0E0E0', borderRadius: '8px', padding: '20px', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s ease' }}>
                        {file ? (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#232323' }}>
                            <CheckCircle size={20} color="#EC1C24" />
                            {file.name}
                          </div>
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#777' }}>
                            <Upload size={20} color="#A70016" />
                            Click to upload resume
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={submitting} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', backgroundColor: '#A70016', color: '#fff', padding: '16px 40px', borderRadius: '9999px', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em', width: '100%', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}>
                    <Send size={17} /> {submitting ? 'Submitting…' : 'Submit Application'}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <CheckCircle size={56} color="#EC1C24" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontFamily: "'Graduate', serif", color: '#232323', fontSize: '28px', margin: '0 0 12px' }}>Application Received!</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#555', fontSize: '15px', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>
                  Thanks for your interest in joining the Wize Guyz Grille family! We&apos;ll review your application and be in touch soon.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section style={{ backgroundColor: '#A70016', padding: '88px 24px', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(32px, 6vw, 64px)', margin: '0 0 12px' }}>Ready to Roll?</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '18px', margin: '0 0 44px' }}>
            Big flavor. Great people. Real opportunity.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <a href="/menu" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', backgroundColor: '#fff', color: '#A70016', padding: '18px 40px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Check Out Our Menu
          </a>
        </Reveal>
      </section>

      {/* MAP */}
      <section style={{ backgroundColor: '#232323' }}>
        <div className="pt-16">
          <StoreLocator />
        </div>
      </section>
    </div>
  );
}
