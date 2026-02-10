import React, { useState } from 'react';
import { Heart, X, MapPin, SlidersHorizontal } from 'lucide-react';



function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Nearby', 'Your District', 'More'];

  return (
    <div className="md:ml-20 min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Discover</h1>
        <p className="text-gray-500 text-sm">
          Find someone who matches your vibe ✨
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${activeFilter === filter
                ? 'bg-black text-white'
                : 'bg-white border hover:bg-gray-100'
              }`}
          >
            {filter}
          </button>
        ))}

        {/* Extra filter icon */}
        <button className="p-2 rounded-full bg-white border hover:bg-gray-100">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h2>No content yet</h2>
      </div>

    </div>
  );
}

export default Home;
