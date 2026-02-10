import React from 'react';
import { Heart, MapPin } from 'lucide-react';



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
          <h1>No matches yet</h1>
        </div>
      </div>

    </div>
  );
}

export default Matches;