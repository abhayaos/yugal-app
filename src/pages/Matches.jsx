import React from 'react';
import { Heart, MapPin } from 'lucide-react';

const matches = [
  {
    id: 1,
    name: 'Rajesh',
    age: 24,
    bio: 'Adventure seeker 🏔️',
    location: 'Pokhara',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    matchedDate: '2 days ago'
  },
  {
    id: 2,
    name: 'Suman',
    age: 26,
    bio: 'Music lover 🎵',
    location: 'Lalitpur',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598',
    matchedDate: '1 week ago'
  }
];

function Matches() {
  return (
    <div className="md:ml-20 min-h-screen bg-gray-50 p-4 md:p-6">
      
      {/* Header */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-2xl font-bold">Your Matches</h1>
        <p className="text-gray-500 text-sm">
          People you've connected with 💕
        </p>
      </div>

      {/* Matches Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {matches.map(match => (
            <div 
              key={match.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex p-4">
                {/* Profile Image */}
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={match.image}
                    alt={match.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                
                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {match.name}, {match.age}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                        <MapPin size={14} />
                        <span>{match.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 truncate">
                        {match.bio}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                      {match.matchedDate}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition text-sm font-medium">
                      Message
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Matches;