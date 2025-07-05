import React from "react";
import { motion } from "framer-motion";

function BusinessCard({ data, onRegenerate }) {
  const { name, location, rating, reviews, headline } = data;

  return (
    <motion.div
      className="mt-6 w-full max-w-lg bg-white p-6 rounded-xl shadow-md space-y-4 text-center border border-blue-100"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-blue-700">{name} ({location})</h2>
      <p className="text-yellow-500 font-semibold text-xl">⭐ {rating} / 5</p>
      <p className="text-gray-600">{reviews} Reviews</p>
      <p className="italic text-gray-800 mt-2">“{headline}”</p>
      <button
        onClick={() => onRegenerate(name, location)}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
      >
        🔁 Regenerate SEO Headline
      </button>
    </motion.div>
  );
}

export default BusinessCard;
