import React, { useState } from "react";
import { Edit2, Camera, Trash2 } from "lucide-react";

const userData = {
  name: "Yugal",
  age: 24,
  username: "yugal123",
  bio: "Love adventures, coding, coffee, and long chats under the stars.",
  interests: ["Music", "Travel", "Coding", "Photography", "Movies"],
  image: "https://images.unsplash.com/photo-1603415526960-f33c3a60728c?crop=faces&fit=crop&w=400&h=400",
};

function UserProfile() {
  const [profilePic, setProfilePic] = useState(userData.image);
  const [bio, setBio] = useState(userData.bio);
  const [interests, setInterests] = useState(userData.interests);
  const [editingBio, setEditingBio] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const toggleInterest = (item) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const allInterests = ["Music", "Travel", "Coding", "Gym", "Gaming", "Photography", "Movies", "Business", "Art", "Sports"];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Profile Image */}
        <div className="relative w-full h-64">
          <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          <label className="absolute bottom-4 right-4 bg-black/60 rounded-full p-3 cursor-pointer hover:bg-black/80 transition">
            <Camera size={20} className="text-white" />
            <input type="file" hidden accept="image/*" onChange={handleImageChange} />
          </label>
        </div>

        {/* User Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{userData.name}, {userData.age}</h2>
            <span className="text-gray-500">@{userData.username}</span>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">About Me</h3>
              <button onClick={() => setEditingBio(!editingBio)} className="flex items-center gap-1 text-gray-600 hover:text-black transition">
                <Edit2 size={16} /> {editingBio ? "Save" : "Edit"}
              </button>
            </div>
            {editingBio ? (
              <textarea
                rows="3"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none resize-none"
              />
            ) : (
              <p className="text-gray-700">{bio}</p>
            )}
          </div>

          {/* Interests */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center gap-1">
              Interests <Edit2 size={16} className="text-gray-500" />
            </h3>
            <div className="flex flex-wrap gap-2">
              {allInterests.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    interests.includes(item)
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Danger Section */}
          <div className="mt-6">
            <button className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition">
              <Trash2 size={18} /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
