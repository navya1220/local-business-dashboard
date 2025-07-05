import React, { useState } from "react";
import { motion } from "framer-motion";

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) {
      alert("Please fill in both fields.");
      return;
    }
    onSubmit({ name, location });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
      >
        Submit
      </button>
    </motion.form>
  );
}

export default BusinessForm;
