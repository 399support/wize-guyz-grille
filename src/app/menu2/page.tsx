import React from 'react';

export default function Menu2Page() {
  return (
    <div className="bg-[#111111] text-gray-100 font-sans selection:bg-[#E31837] selection:text-white min-h-screen">
      {/* TopAppBar - Note: You might want to hide your global Nav.tsx on this page later so they don't overlap! */}
      <header className="fixed top-0 w-full z-50 bg-[#111111]/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(227,24,55,0.05)] border-b border-zinc-800/50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-black uppercase tracking-tighter text-[#E31837]">
            MIDNIGHT UMAMI
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-gray-400 hover:text-red-400 transition-colors duration-300 font-medium uppercase text-sm tracking-widest" href="#">Home</a>
            <a className="text-orange-500 font-bold hover:text-red-400 transition-colors duration-300 uppercase text-sm tracking-widest active:scale-95 transition-transform" href="#">Menu</a>
            <a className="text-gray-400 hover:text-red-400 transition-colors duration-300 font-medium uppercase text-sm tracking-widest" href="#">Orders</a>
            <a className="text-gray-400 hover:text-red-400 transition-colors duration-300 font-medium uppercase text-sm tracking-widest" href="#">Profile</a>
          </nav>
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center bg-zinc-900 rounded-full px-4 py-2 border border-zinc-800">
              <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-gray-600 outline-none" placeholder="Crave something..." type="text" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative h-[409px] md:h-[512px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/menu/hero-banner.jpg')] bg-cover bg-center"></div>
          <div className="relative z-20 text-center px-6">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
              OUR DELICIOUS <span className="text-[#E31837]">MENU</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-medium">
              The intersection of late-night hunger and culinary obsession. High-contrast flavors for the night owls.
            </p>
          </div>
        </section>

        {/* Category Sticky Nav */}
        <div className="sticky top-[72px] z-40 bg-[#111111]/80 backdrop-blur-md border-b border-zinc-800">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-6">
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-orange-500 hover:text-red-400 transition-colors" href="#appetizers">Appetizers</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#burgers">Burgers</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#hot-dogs">Hot Dogs</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#chicken">Chicken</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#tenders">Tenders</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#sandwiches">Sandwiches</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#wings">Wings</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#sides">Sides</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#salads">Salads</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#for-kids">Kids</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#drinks">Drinks</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#desserts">Desserts</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#pasta">Pasta</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#seafood">Seafood</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#specialty-pizza">Specialty Pizza</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#single-slice">Single Slice</a>
              <a className="whitespace-nowrap uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-red-400 transition-colors" href="#pizza-sizes">Pizza Custom</a>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 mt-12 space-y-24">
          
          {/* 1. Appetizers */}
          <section id="appetizers">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 border-l-4 border-[#E31837] pl-4">Appetizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="h-48 bg-zinc-800 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mozzarella Sticks" src="/images/menu/mozzarella-sticks.jpg" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors leading-tight">Mozzarella Sticks</h3>
                    <span className="text-lg font-bold text-[#E31837]">$6.59</span>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-2">Crispy golden breading on the outside, gooey melted cheese on the inside.</p>
                </div>
              </div>

              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="h-48 bg-zinc-800 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Basket of Fries" src="/images/menu/basket-of-fries.jpg" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors leading-tight">Basket of Fries</h3>
                    <span className="text-lg font-bold text-[#E31837]">$10.99</span>
                  </div>
                </div>
              </div>

              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors leading-tight">Cheese Curds</h3>
                    <span className="text-lg font-bold text-[#E31837]">$7.99</span>
                  </div>
                </div>
              </div>

              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors leading-tight">Jalapeno Poppers</h3>
                    <span className="text-lg font-bold text-[#E31837]">$4.49</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Burgers */}
          <section id="burgers">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 border-l-4 border-orange-500 pl-4">The Chief Burgers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors">Chief Burger</h3>
                    <span className="text-lg font-bold text-[#E31837]">$8.95</span>
                  </div>
                </div>
              </div>
              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors">Chief Burger w/ Cheese</h3>
                    <span className="text-lg font-bold text-[#E31837]">$9.19</span>
                  </div>
                </div>
              </div>
              <div className="group bg-zinc-900 border border-zinc-800/50 rounded-lg overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="uppercase text-xl font-bold group-hover:text-orange-500 transition-colors">O.M.G. Burger</h3>
                    <span className="text-lg font-bold text-[#E31837]">$12.79</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Banner */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-24 mt-24">
          <div className="bg-[#E31837] rounded-xl p-12 text-center relative overflow-hidden shadow-[0_10px_30px_rgba(227,24,55,0.2)]">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Feeding the Whole Crew?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium opacity-90">
              Check out our bundle deals and party platters for office events, game nights, or just big families.
            </p>
            <button className="bg-white text-[#E31837] px-12 py-4 rounded-md font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
              View Platters
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}