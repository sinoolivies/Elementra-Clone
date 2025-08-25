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

const images = [
  { src: img1, height: "200px" },
  { src: img2, height: "250px" },
  { src: img3, height: "180px" },
  { src: img4, height: "220px" },
  { src: img5, height: "240px" },
  { src: img6, height: "200px" },
  { src: img7, height: "260px" },
  { src: img8, height: "210px" },
];

const Gallery = () => {
  const refs = images.map(() => useRef(null));
  const visible = refs.map((ref) => useIntersectionObserver(ref, { threshold: 0.2 }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            ref={refs[index]}
            className={`overflow-hidden rounded-lg transform transition-all duration-500 ${
              visible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ height: img.height }}
          >
            <img
              src={img.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
