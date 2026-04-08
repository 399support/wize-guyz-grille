'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { menuData, MenuCategory, MenuItem } from '@/data/menu';
import { Search, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('appetizers');
  const [searchTerm, setSearchTerm] = useState('');
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Filter items based on search
  const filteredData = menuData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  // Smooth scroll to category
  const scrollToCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const element = categoryRefs.current[categoryId];
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const category of menuData) {
        const element = categoryRefs.current[category.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setSelectedCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1569409611632-b87901f4c74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
          alt="Wize Guyz Menu"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/75" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <Reveal delay={0.1}>
            <div className="text-yellow-400 text-sm tracking-widest uppercase mb-3 font-bold">
              Made Fresh. Every Order.
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Graduate', serif" }}>
              Comfort Food Crafted<br />for Big Appetites
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-gray-200 text-lg max-w-2xl leading-relaxed">
              Fresh, made-to-order. Every time.<br />Pick your weapon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="py-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="pb-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max justify-center sm:justify-start">
              {menuData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredData.map((category) => (
          <div
            key={category.id}
            ref={(el) => { categoryRefs.current[category.id] = el; }}
            className="mb-12"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
              {category.note && (
                <p className="text-sm text-gray-600 italic">{category.note}</p>
              )}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Preserve existing "Feeding the Whole Crew?" banner */}
      <section className="bg-yellow-400 text-gray-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Feeding the Whole Crew?</h2>
            <p className="text-lg md:text-xl mb-8">
              We offer catering services for groups of all sizes. From office lunches to family gatherings, 
              we've got you covered with our delicious menu options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                Contact Us for Catering
              </a>
              <a
                href="tel:(828) 497-2838"
                className="inline-block bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors"
              >
                Call (828) 497-2838
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// Menu Item Card Component
function MenuItemCard({ item }: { item: MenuItem }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        {!imageError ? (
          <Image
            src={`/images/menu/${item.id}.jpg`}
            alt={item.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-500 text-sm">Image coming soon</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">{item.name}</h3>
          <span className="text-red-600 font-bold ml-2">{item.price}</span>
        </div>
        
        {item.description && (
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        )}
        
        {item.note && (
          <p className="text-xs text-gray-500 italic">{item.note}</p>
        )}
      </div>
    </div>
  );
}
