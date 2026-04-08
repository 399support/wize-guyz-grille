'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

// Type definitions for Instagram post data
interface InstagramPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO';
  isReel?: boolean;
  mediaUrl: string;
  thumbnailUrl?: string;
  sizes: {
    small: { mediaUrl: string; height: number; width: number };
    medium: { mediaUrl: string; height: number; width: number };
    large: { mediaUrl: string; height: number; width: number };
    full: { mediaUrl: string; height: number; width: number };
  };
  caption?: string;
  hashtags: string[];
}

interface InstagramData {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string;
  followersCount: number;
  followsCount: number;
  posts: InstagramPost[];
}

export default function InstagramFeed() {
  const [instagramData, setInstagramData] = useState<InstagramData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://feeds.behold.so/JXUm4ZnYqqOY7fCHP376', {
          next: { revalidate: 3600 }, // ISR: Revalidate every hour
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram data');
        }
        
        const data = await response.json();
        setInstagramData(data);
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #2a2a2a' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Instagram size={24} color="#fff" />
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '15px', color: '#fff' }}>
            {instagramData?.username || '@wizeguyzgrille'}
          </div>
          <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '13px', color: '#888' }}>
            {instagramData?.biography || 'Wize Guyz Grille · Western NC'}
          </div>
        </div>
        <a 
          href={instagramData?.website || 'https://instagram.com/wizeguyzgrille'} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ marginLeft: 'auto', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', backgroundColor: '#E1306C', color: '#fff', padding: '8px 20px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}
        >
          Follow
        </a>
      </div>

      {/* Dynamic Instagram Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3px' }}>
        {loading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, index) => (
            <div key={`skeleton-${index}`} style={{ backgroundColor: '#2a2a2a', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ color: '#555', fontSize: '12px' }}>Loading...</div>
            </div>
          ))
        ) : instagramData?.posts?.map((post: InstagramPost) => (
          <a 
            key={post.id} 
            href={post.permalink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#1a1a1a', 
              aspectRatio: '1', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              textDecoration: 'none', 
              position: 'relative', 
              overflow: 'hidden', 
              cursor: 'pointer' 
            }}
          >
            <Image
              src={post.mediaType === 'VIDEO' ? (post.thumbnailUrl || '') : post.mediaUrl}
              alt={`Instagram post: ${post.caption?.slice(0, 50) || 'Wize Guyz Grille'}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {post.isReel && (
              <div style={{ 
                position: 'absolute', 
                top: '8px', 
                right: '8px', 
                width: '24px', 
                height: '24px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0,0,0,0.7)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>▶</span>
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: '20px 24px', borderTop: '1px solid #2a2a2a', textAlign: 'center' }}>
        <a 
          href={instagramData?.website || 'https://instagram.com/wizeguyzgrille'} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            fontFamily: "'Lato', sans-serif", 
            fontWeight: 700, 
            fontSize: '14px', 
            color: '#E1306C', 
            textDecoration: 'none', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            letterSpacing: '0.04em', 
            textTransform: 'uppercase' 
          }}
        >
          <Instagram size={16} /> View All Posts on Instagram
        </a>
      </div>
    </div>
  );
}
