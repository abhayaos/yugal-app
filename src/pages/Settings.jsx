import React, { useState } from "react";
import { LogOut, User, Moon, Bell, Lock, Trash2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [teenMode, setTeenMode] = useState(false);

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      console.log("Account deleted");
      navigate("/register");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <p className="text-gray-500 text-sm">Manage your account preferences</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="font-semibold text-lg">Profile</h2>

          <div
            className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-xl p-3 transition"
            onClick={() => navigate("/edit-profile")}
          >
            <div className="flex items-center gap-2">
              <User size={20} className="text-gray-700" />
              <span>Edit Profile</span>
            </div>
            <User size={20} className="text-gray-400 rotate-90" />
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          <h2 className="font-semibold text-lg">Preferences</h2>

          {/* Dark Mode */}
          <Toggle
            label="Dark Mode"
            description="Toggle app appearance"
            enabled={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
            icon={<Moon size={20} />}
          />

          {/* Notifications */}
          <Toggle
            label="Notifications"
            description="Receive app notifications"
            enabled={notifications}
            onToggle={() => setNotifications(!notifications)}
            icon={<Bell size={20} />}
          />

          {/* Private Account */}
          <Toggle
            label="Private Account"
            description="Only approved users can see your profile"
            enabled={privateAccount}
            onToggle={() => setPrivateAccount(!privateAccount)}
            icon={<Lock size={20} />}
          />

          {/* Teen Mode / Age Restriction */}
          <Toggle
            label="Teen Mode"
            description="Restrict your profile visibility to teens"
            enabled={teenMode}
            onToggle={() => setTeenMode(!teenMode)}
            icon={<Users size={20} />}
          />
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="font-semibold text-lg text-red-600">Danger Zone</h2>

          <button
            onClick={handleDeleteAccount}
            className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition"
          >
            <Trash2 size={18} />
            Delete Account
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

// Smooth sliding toggle component
function Toggle({ label, description, enabled, onToggle, icon }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="font-medium">{label}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
          enabled ? "bg-black justify-end" : "bg-gray-300 justify-start"
        }`}
      >
        <div className="w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300"></div>
      </button>
    </div>
  );
}

export default Settings;
