import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="text-5xl md:text-7xl font-extrabold text-white text-center"
      >
        हामी आउँदै छौँ 🚀
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-400 text-center max-w-xl"
      >
        YugalMeet मा चाँडै भेटौंला। नवीनतम अपडेट र रोमाञ्चक फिचरहरूको लागि तयार हुनुहोस्।
      </motion.p>

    </div>
  );
}

export default App;
