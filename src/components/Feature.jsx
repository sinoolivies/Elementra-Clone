import React, { useRef } from "react";
import feature1 from "../assets/features.jpg";
import feature2 from "../assets/features2.jpg";
import feature3 from "../assets/features3.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const features = [
  {
    title: "Style Model",
    desc: "Choose from a wide range of visual styles — from hyper-realistic to abstract — for your AI generations.",
    img: feature1,
  },
  {
    title: "Character Model",
    desc: "Bring characters to life with precision. Perfect for storytelling, game design, and digital art.",
    img: feature2,
  },
  {
    title: "Face & Object Model",
    desc: "Generate stunning faces and intricate objects that blend seamlessly with your creative projects.",
    img: feature3,
  },
];

const FeatureSection = () => {
  const featureRefs = features.map(() => useRef(null));
  const featureVisible = featureRefs.map((ref) => useIntersectionObserver(ref));

  return (
    <section className="relative bg-white py-20" id="features">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-12">
        
        {/* LEFT SIDE (Sticky narrative) */}
        <div className="md:w-1/3 lg:w-2/5 self-start md:sticky md:top-24 h-fit">
          <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">
            Unlock Creativity
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            What sets our{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text">
              AI generator
            </span>{" "}
            apart
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Elementra leverages advanced AI technology to convert text into
            immersive visuals. Seamlessly create breathtaking, high-quality
            outputs at speed — revolutionizing the visual content landscape.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition">
            EXPLORE OUR SERVICES
          </button>
        </div>

        {/* RIGHT SIDE (Text above image) */}
        <div className="md:w-2/3 lg:w-3/5 flex flex-col gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={featureRefs[index]}
              className={`transition-all duration-700 ${
                featureVisible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Text ABOVE image */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base max-w-xl">
                  {feature.desc}
                </p>
              </div>

              
              {/* Image */}
<div className="rounded-2xl overflow-hidden shadow-lg w-full">
  <img
    src={feature.img}
    alt={feature.title}
    className="w-full h-auto max-h-[500px] object-cover hover:scale-105 transition-transform duration-500"
  />
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
