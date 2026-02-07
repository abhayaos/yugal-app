import React from 'react';
import { MapPin, Edit3, Heart, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    
    const navigate = useNavigate();

    const handleEditProfile = () => {
      navigate('/edit-profile');
    };
  return (
    <div className="md:ml-20 min-h-screen bg-gray-50 p-4 md:p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <p className="text-gray-500 text-sm">
          This is how others see you 👀
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-pink-400 to-rose-500"></div>

        {/* Profile info */}
        <div className="relative px-6 pb-6">
          
          {/* Avatar */}
          <div className="absolute -top-16 left-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow">
                <Camera size={16} />
              </button>
            </div>
          </div>

          {/* Edit button */}
          <div className="flex justify-end pt-4">
            <button onClick={handleEditProfile} className="flex items-center gap-2 px-4 py-2 rounded-full border hover:bg-gray-100">
              <Edit3 size={16} />
              Edit Profile
            </button>
          </div>

          {/* User info */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold">
              Aarohi, 21
            </h2>

            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <MapPin size={16} />
              Kathmandu, Nepal
            </div>

            {/* Bio */}
            <p className="text-gray-600 mt-4 max-w-xl">
              Coffee addict ☕ | Late night talks | Looking for someone who can match my energy ✨
            </p>

            {/* Interests */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Travel', 'Music', 'Coffee', 'Photography', 'Movies'].map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full text-sm bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Heart className="mx-auto text-pink-500" />
                <p className="font-semibold mt-1">124</p>
                <p className="text-xs text-gray-500">Likes</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Heart className="mx-auto text-rose-500" />
                <p className="font-semibold mt-1">58</p>
                <p className="text-xs text-gray-500">Matches</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Heart className="mx-auto text-red-500" />
                <p className="font-semibold mt-1">12</p>
                <p className="text-xs text-gray-500">Super Likes</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
