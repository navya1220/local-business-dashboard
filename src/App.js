import React, { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/business-data", formData);
      setBusinessData({ ...formData, ...res.data });
    } catch (err) {
      alert("Failed to fetch business data.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = async (name, location) => {
    try {
      const res = await axios.get("http://localhost:5000/regenerate-headline", {
        params: { name, location },
      });
      setBusinessData((prev) => ({
        ...prev,
        headline: res.data.headline,
      }));
    } catch (err) {
      alert("Failed to regenerate headline.");
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-start py-10 px-4">
   <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
  {/* Dashboard Image */}
  <motion.img
    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    alt="Dashboard Icon"
    className="w-20 h-20 md:w-24 md:h-24 object-contain"
    initial={{ x: -40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  />

  <motion.h1
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 text-center md:text-left leading-tight tracking-tight"
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    📊 Local Business Dashboard
  </motion.h1>
</div>


    <BusinessForm onSubmit={handleFormSubmit} />

    {loading && (
      <p className="mt-6 text-gray-700 text-lg animate-pulse">⏳ Loading...</p>
    )}
      <AnimatePresence>
        {businessData && !loading && (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BusinessCard data={businessData} onRegenerate={handleRegenerate} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
