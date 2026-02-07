import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartCrack, Link2 } from 'lucide-react';

function NotFound() {
  const location = useLocation();

  return (
    <div className="ml-20 min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
            <HeartCrack className="text-pink-500" size={36} />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-xl font-semibold mt-2">
          This match doesn’t exist 💔
        </p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for ghosted you or never existed.
        </p>

        {/* Route Box */}
        <div className="mt-6 bg-white border rounded-xl p-4 shadow-sm text-left">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Link2 size={14} />
            Requested route
          </div>
          <code className="block bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-800 break-all">
            {location.pathname}
          </code>
        </div>

        {/* Action */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition"
        >
          Go back to Discover
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
