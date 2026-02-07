import React, { useState } from 'react';
import { Heart, X, MapPin, SlidersHorizontal } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: 'Aarohi',
    age: 21,
    bio: 'Coffee, late night talks & bad jokes ☕',
    location: 'Kathmandu',
    distance: '2 km away',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
  },
  {
    id: 2,
    name: 'Nisha',
    age: 23,
    bio: 'Mountains > Beaches 🏔️',
    location: 'Bhaktapur',
    distance: '8 km away',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1'
  }
];

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
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
              activeFilter === filter
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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map(profile => (
          <div
            key={profile.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-full w-full object-cover"
              />

              {/* Distance badge */}
              <div className="absolute top-3 left-3 bg-white/90 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin size={12} />
                {profile.distance}
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {profile.name}, {profile.age}
              </h2>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                <MapPin size={14} />
                {profile.location}
              </div>

              <p className="text-gray-500 text-sm mt-2">
                {profile.bio}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border hover:bg-gray-100">
                  <X className="text-gray-500" />
                </button>

                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-500 hover:bg-pink-600">
                  <Heart className="text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
