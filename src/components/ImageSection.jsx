import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import img1 from "../assets/sample1.png";
import img2 from "../assets/sample2.png";
import img3 from "../assets/sample3.png";
import img4 from "../assets/sample4.png";
import img5 from "../assets/sample5.png";
import img6 from "../assets/sample6.png";
import img7 from "../assets/sample7.png";
import img8 from "../assets/sample8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const words = [
  "automation",
  "design",
  "technology",
  "ai",
  "image generation",
  "creativity",
  "innovation",
  "visuals",
];

const Gallery = () => {
  const refs = images.map(() => useRef(null));
  const visibilities = refs.map((ref) =>
    useIntersectionObserver(ref, { threshold: 0.2 })
  );

  return (
    <section className="py-12 bg-gray-100" id="gallery">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={refs[idx]}
              className={`overflow-hidden rounded-lg shadow-lg transform transition duration-700 ${
                visibilities[idx]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* 🔥 Marquee under the gallery */}
      <div className="overflow-hidden whitespace-nowrap border-t border-b border-gray-300 py-4 mt-12">
  <div className="inline-flex animate-marquee space-x-8">
    {[...words, ...words].map((word, idx) => (
      <span
        key={idx}
        className="flex items-center space-x-2 text-white text-xl font-semibold"
      >
        <span>{word}</span>
        <span className="animate-spin text-yellow-500">*</span>
      </span>
    ))}
  </div>
</div>


      </div>
    </section>
  );
};

export default Gallery;
