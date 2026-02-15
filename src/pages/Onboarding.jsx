import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowLeft, ArrowRight } from "lucide-react";

const interestsList = [
  "Music",
  "Travel",
  "Coding",
  "Gym",
  "Gaming",
  "Photography",
  "Movies",
  "Business",
  "Art",
  "Sports",
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const toggleInterest = (item) => {
    if (interests.includes(item)) {
      setInterests(interests.filter((i) => i !== item));
    } else {
      setInterests([...interests, item]);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    console.log({
      profilePic,
      bio,
      interests,
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 transition-all duration-500">

        {/* Step Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            {step === 1 && "Add a Profile Photo"}
            {step === 2 && "Write a Short Bio"}
            {step === 3 && "Choose Your Interests"}
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Everything here is optional. You can skip anytime.
          </p>
        </div>

        {/* Step Content */}
        <div className="transition-all duration-500 ease-in-out">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex justify-center">
              <label className="relative cursor-pointer group">

                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-36 h-36 rounded-2xl object-cover shadow-md"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-2xl bg-gray-100 flex items-center justify-center shadow-inner">
                    <Upload size={30} className="text-gray-400" />
                  </div>
                )}

                {/* Upload Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Upload size={28} className="text-white" />
                </div>

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <textarea
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell something interesting about yourself..."
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none resize-none transition"
            />
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="flex flex-wrap gap-3 justify-center">
              {interestsList.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`px-5 py-2 rounded-full text-sm transition-all duration-200 border
                    ${
                      interests.includes(item)
                        ? "bg-black text-white border-black shadow-md"
                        : "bg-white hover:bg-gray-100 border-gray-300"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12">

          {step > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 px-5 py-2 border rounded-xl hover:bg-gray-100 transition"
            >
              <ArrowLeft size={16} />
              Previous
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow-lg"
            >
              Next
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow-lg"
            >
              Finish
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default Onboarding;
