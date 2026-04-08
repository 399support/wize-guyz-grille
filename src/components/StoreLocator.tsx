'use client';

import React, { useEffect, useRef, useState } from 'react';

// Google Maps type declarations
declare global {
  interface Window {
    google: {
      maps: {
        importLibrary: (library: string) => Promise<any>;
        Map: new (element: HTMLElement, options: any) => any;
        AdvancedMarkerElement: new (options: any) => any;
        LatLngBounds: new () => any;
      };
    }
  }
}

// --- Interfaces ---
interface Location {
  id: string;
  title: string;
  name: string;
  address: string;
  phone: string;
  status: 'Open Now' | 'Closed';
  lat: number;
  lng: number;
}

// --- Data ---
const locations: Location[] = [
  {
    id: 'cherokee',
    title: 'CHEROKEE - FLAGSHIP',
    name: 'WIZE GUYZ GRILLE',
    address: '68 Big Cove Rd Suite 8, Cherokee, NC 28719',
    phone: '(828) 497-2838',
    status: 'Open Now',
    lat: 35.4770,
    lng: -83.3206,
  },
  {
    id: 'bryson-city',
    title: 'BRYSON CITY - FLAGSHIP',
    name: 'WIZE GUYZ GRILLE',
    address: '240 Main St, Bryson City, NC 28713',
    phone: '(828) 366-0013',
    status: 'Open Now',
    lat: 35.4276,
    lng: -83.4474,
  },
  {
    id: 'deep-creek',
    title: 'DEEP CREEK',
    name: 'WIZE GUYZ EXPRESS',
    address: '1880 W Deep Creek Rd, Bryson City, NC 28713',
    phone: '(828) 488-6052',
    status: 'Closed',
    lat: 35.4550,
    lng: -83.4420,
  },
  {
    id: 'whittier',
    title: 'WHITTIER',
    name: 'WIZE GUYZ EXPRESS',
    address: '4732 US-74, Whittier, NC 28789',
    phone: '(828) 370-2084',
    status: 'Open Now',
    lat: 35.4328,
    lng: -83.3596,
  },
];

export default function StoreLocator() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // 1. Check if map container exists
    if (!mapRef.current) return;

    // 2. Initialize the map function
    const initMap = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
          console.error("Google Maps API key is missing.");
          setMapError(true);
          return;
        }

        // Import libraries required for Next.js hydration safety
        const { Map } = await (window as any).google.maps.importLibrary("maps") as any;
        const { AdvancedMarkerElement } = await (window as any).google.maps.importLibrary("marker") as any;

        // Create the map instance (mapId is REQUIRED for Advanced Markers)
        const map = new Map(mapRef.current!, {
          mapId: 'DEMO_MAP_ID',
          zoom: 10,
          center: { lat: 35.45, lng: -83.4 }, // Rough center of all locations
          disableDefaultUI: true,
          zoomControl: true,
        });

        // Create map bounds to automatically zoom/fit all pins
        const bounds = new window.google.maps.LatLngBounds();

        // Loop through data and create pins
        locations.forEach((loc) => {
          const position = { lat: loc.lat, lng: loc.lng };
          
          new AdvancedMarkerElement({
            map,
            position,
            title: loc.name,
          });

          bounds.extend(position);
        });

        // Fit map to show all pins
        map.fitBounds(bounds);

      } catch (error) {
        console.error("Error loading Google Maps:", error);
        setMapError(true);
      }
    };

    // 3. Inject the script safely to avoid Next.js routing bugs
    if (!window.google || !window.google.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker&v=weekly`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => setMapError(true);
      document.head.appendChild(script);
    } else {
      // If script is already there (from client-side routing), just draw the map
      initMap();
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto border border-gray-200 rounded-xl overflow-hidden bg-white min-h-[600px]">
      
      {/* LEFT COLUMN: LOCATIONS LIST */}
      <div className="w-full md:w-1/2 flex flex-col h-full md:h-[600px] overflow-y-auto">
        
        {/* Search & Filters */}
        <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
          <input 
            type="text" 
            placeholder="Search by city or zip code" 
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg mb-4 text-sm focus:outline-none focus:border-red-600"
          />
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-[#E31837] text-white text-xs font-bold rounded-full uppercase tracking-wider">All</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs font-bold rounded-full uppercase tracking-wider">Dine-In</button>
            <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs font-bold rounded-full uppercase tracking-wider">Catering</button>
          </div>
        </div>

        {/* Location Cards */}
        <div className="flex flex-col">
          {locations.map((loc) => (
            <div key={loc.id} className="p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[#E31837] text-sm font-bold tracking-widest uppercase">{loc.title}</span>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${loc.status === 'Open Now' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span className={`text-xs font-semibold ${loc.status === 'Open Now' ? 'text-green-600' : 'text-gray-500'}`}>{loc.status}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{loc.name}</h3>
              <p className="text-sm text-gray-600 mb-6">{loc.address}</p>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-[#E31837] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-red-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-white text-[#E31837] border border-[#E31837] px-4 py-2 rounded-md text-sm font-bold hover:bg-red-50 transition-colors flex justify-center items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Directions
                </button>
                <button className="flex-1 bg-[#E31837] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-red-700 transition-colors flex justify-center items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {loc.phone}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: GOOGLE MAP */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[600px] bg-gray-100 relative">
        {mapError && (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="text-gray-500">Map could not be loaded. Please check your API key configuration.</p>
          </div>
        )}
        <div ref={mapRef} className="w-full h-full" id="map" />
      </div>

    </div>
  );
}