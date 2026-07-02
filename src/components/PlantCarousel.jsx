import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";

const PlantCarousel = () => {
  const plants = [
    {
      name: "Aglaonema",
      type: "Indoor Plant",
      img: "src/assets/Rose Gold Feminine Calligraphy Monogram Logo(15) 3.png"
    },
    {
      name: "Monstera",
      type: "Tropical Plant",
      img: "src/assets/monstera-deliciosa-plant-pot-lush-green-leaves-home-decor-indoor-plant-tropical-foliage-vibrant-green-potted-plant-houseplant-greenery-plant-photography.png"
    },
    {
      name: "Snake Plant",
      type: "Low Maintenance",
      img: "src/assets/snake-plant-stylish-gray-pot-transparent-background.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      id='cardHolder'
      className="
        relative w-75 h-100 rounded-[40px] p-6 flex flex-col mt-12 items-center
        border border-white/25
        shadow-xl
        backdrop-blur-[2px]
        bg-transparent
        overflow-visible
      "
  
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-22 z-20 pointer-events-none select-none  w-full flex justify-center ">
        <img
          src={plants[currentIndex].img}
          alt={plants[currentIndex].name}
          className="w-78 transition-all duration-500 transform hover:scale-105 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.32)]"
          style={{
            filter: "drop-shadow(0 8px 24px rgba(136, 218, 255, 0.23))",
            pointerEvents: "none", // so it doesn't capture hover/clicks
            userSelect: "none"
          }}
          draggable={false}
        />
      </div>

      {/* Content Section */}
      <div className="w-full text-left mt-auto z-10">
        <p className="text-gray-200/80 text-sm">{plants[currentIndex].type}</p>
        <h2 className="text-3xl font-light mb-2 flex justify-between items-center drop-shadow-md text-white">
          {plants[currentIndex].name}
          <span
            className="text-xl opacity-60 cursor-pointer rounded hover:bg-white/10 px-2 py-1 transition hover:opacity-90 z-20"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % plants.length)}
            tabIndex={0}
            aria-label="Next Plant"
          >
            <FaChevronRight size={16}/>
          </span>
        </h2>

        <button className="w-full py-2.5 mt-1.5 border border-gray-100/30 rounded-2xl text-lg font-medium bg-white/10 hover:bg-white/25 backdrop-blur-md text-white hover:text-gray-900 transition-colors duration-300 glass-btn shadow hover:shadow-lg">
          Buy Now
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-8 z-10">
        {plants.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 bg-[#ffff] ${
              currentIndex === index
                ? 'w-6  '   // white for active
                : 'w-1.5'                      // pure white for non-active
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PlantCarousel;
