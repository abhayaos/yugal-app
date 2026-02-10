import React from 'react';
import { UserX, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  // toggle this later with real data
  const hasProfile = false;

  if (!hasProfile) {
    return (
      <div className="md:ml-20 min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">
          
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <UserX size={40} className="text-gray-400" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-2">
            No profile available
          </h2>

          <p className="text-gray-500 mb-6">
            You haven’t created your profile yet.  
            No profile = no vibes 😬
          </p>

          <button
            onClick={() => navigate('/edit-profile')}
            className="flex items-center justify-center gap-2 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
          >
            <PlusCircle size={18} />
            Create Profile
          </button>
        </div>
      </div>
    );
  }

  return null; // later replace with real profile UI
}

export default Profile;
