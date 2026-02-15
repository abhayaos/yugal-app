import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);

    try {
      // 👉 Replace with real backend API
      console.log("Register Data:", form);

      setTimeout(() => {
        setLoading(false);
        navigate("/login"); // redirect to login after register
      }, 1500);

    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md  p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="logo" className="h-10" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              autocomplete="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              autocomplete="email"  
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              autocomplete="current-password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              autocomplete="current-password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;
