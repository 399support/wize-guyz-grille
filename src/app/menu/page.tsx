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
    <div className="min-h-screen bg-black">
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
            <div style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '14px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Made Fresh. Every Order.
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(32px, 6vw, 72px)', lineHeight: 1.1, margin: '0 0 24px', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
              Comfort Food Crafted<br />for Big Appetites
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#E8E8E8', fontSize: 'clamp(15px, 2vw, 19px)', maxWidth: '640px', lineHeight: 1.75, marginBottom: '40px' }}>
              Fresh, made-to-order. Every time.<br />Pick your weapon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div className="sticky top-0 z-40 bg-zinc-900 border-b border-zinc-700 shadow-sm">
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
                className="w-full pl-10 pr-4 py-2 border border-zinc-700 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap uppercase ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
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
              <h2 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: 'clamp(22px, 3.5vw, 38px)', margin: '0 0 12px', lineHeight: 1.25 }}>{category.name}</h2>
              {category.note && (
                <p style={{ fontFamily: "'Comic Relief', cursive", color: '#FFBF31', fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>{category.note}</p>
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

  // Map item IDs to available images
  const getImageSrc = (itemId: string): string | null => {
    const imageMap: { [key: string]: string } = {
      'mozzarella-sticks': '/images/Mozarella_Sticks.webp',
      'basket-of-fries': '/images/Basket_of_fries.webp',
      '6pc-wings': '/images/wings.png',
      '12pc-wings': '/images/Hot_Wings_12pc.webp',
      '24pc-wings': '/images/wings.png',
      '48pc-wings': '/images/wings.png',
   
   
     
     
      'omg-burger': '/images/OMG_Burger.webp',
      'diablo-burger': '/images/Diablo_Burger.webp',
      'guacamole-burger': '/images/burger-photo.png',
    
    
   
      'black-bleu-burger': '/images/Black_n_Blue_Cheese_Burger.webp',
      'mushroom-swiss-burger': '/images/Mushroom_Swiss_Burger.webp',
     
     
     
     
      




     
      'chili-dog': '/images/Chili_Cheese_Dog.webp',
      'grilled-chicken': '/images/Grilled_Chicken_Burger.webp',
     
     
      'buffalo-chicken': '/images/Fried_Chicken.webp',
  
      'fried-chicken': '/images/Fried_Chicken.webp',
      'philly-cheese-steak': '/images/Philly_Cheesesteak.webp',
      'italian-sub': '/images/Italian_Sub.webp',
     
      'meatball-sub': '/images/Meat_Ball_Sub.webp',
      'french-dip': '/images/French_Dip.webp',
  
      'ham-cheese': '/images/Ham_n_Cheese.webp',
      'grilled-cheese': '/images/Grilled_Cheese.webp',
      'garden-salad': '/images/Green_Salad.webp',
      'caesar-salad': '/images/Ceaser_Salad.webp',
      'jalapeno-poppers': '/images/Jalepeno_Poppers.webp',
      'seasoned-fries': '/images/Seasoned_fries.webp',
      'onion-rings': '/images/Onion_RIngs.webp',
     
      'stromboli': '/images/Stromboli.webp',

      'fish-n-chips': '/images/fish_n_chips.webp',
      'ultimate-nachos': '/images/ultimate_nachos.webp',
      'kids-burger': '/images/Kids-Burger.webp',
      'kids-hotdog': '/images/Hot_dog.webp',
      'smores-lava-cake': '/images/LavaCake.webp',
      'spaghetti-meat-sauce': '/images/Pasta.webp',
      'red-velvet-cake': '/images/Red_Velvet_Cupcake.webp',
      'tiramisu': '/images/Tiramisu.webp'
    };
    
    return imageMap[itemId] || null;
  };

  const imageSrc = getImageSrc(item.id);

  return (
    <div className="bg-zinc-900 rounded-lg shadow-sm border border-zinc-700 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-zinc-800">
        {!imageError && imageSrc ? (
          <Image
            src={imageSrc}
            alt={item.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-400 text-sm">Image coming soon</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 style={{ fontFamily: "'Graduate', serif", color: '#fff', fontSize: '17px', margin: '0 0 12px', lineHeight: 1.3 }}>{item.name}</h3>
          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', color: '#EC1C24', textTransform: 'uppercase', letterSpacing: '0.05em', marginLeft: '8px' }}>{item.price}</span>
        </div>
        
        {item.description && (
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '14px', color: '#bbb', lineHeight: 1.65, margin: '0 0 20px' }}>{item.description}</p>
        )}
        
        {item.note && (
          <p style={{ fontFamily: "'Comic Relief', cursive", fontSize: '11px', color: '#FFBF31', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>{item.note}</p>
        )}
        
        <a href="/store-locator" style={{ display: 'inline-block', fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '13px', backgroundColor: '#EC1C24', color: '#fff', padding: '10px 22px', borderRadius: '9999px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Call Now
        </a>
      </div>
    </div>
  );
}
