import React, { useRef } from "react";
import { FaBrain, FaLightbulb, FaLaptopCode, FaTools } from "react-icons/fa";
import CountUp from "react-countup";
import aboutImage from "../assets/about.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AboutSection = () => {
  const cards = [
    { icon: <FaBrain className="text-3xl text-pink-500 mb-4" />, title: "AI Creativity", desc: "We are an AI image company that builds tools." },
    { icon: <FaLightbulb className="text-3xl text-pink-500 mb-4" />, title: "Innovative Services", desc: "Our mission is to empower visual storytelling." },
    { icon: <FaLaptopCode className="text-3xl text-pink-500 mb-4" />, title: "Digital Solutions", desc: "We specialize in AI-driven image and design." },
    { icon: <FaTools className="text-3xl text-pink-500 mb-4" />, title: "AI Tools for Creators", desc: "We empower creators with advanced AI tools." },
  ];

  const cardRefs = cards.map(() => useRef(null));
  const cardVisible = cardRefs.map((ref) => useIntersectionObserver(ref));
  const about4Ref = useRef(null);
const about4Visible = useIntersectionObserver(about4Ref);


  const metrics = [
    { label: "Customers", value: 1500000 },
    { label: "Generations", value: 2300000000 },
    { label: "Rating", value: 4.9 },
    { label: "Trends Hit", value: 25 },
  ];

  const metricRefs = metrics.map(() => useRef(null));
  const metricVisible = metricRefs.map((ref) => useIntersectionObserver(ref));

  const bannerRef = useRef(null);
  const bannerVisible = useIntersectionObserver(bannerRef);

  const imagesRefs = [useRef(null), useRef(null), useRef(null)];
  const imagesVisible = imagesRefs.map((ref) => useIntersectionObserver(ref));

  return (
    <section className="relative bg-white py-16" id="about">
      <div className="  container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left Image */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left leading-tight md:leading-snug">
              Explore <span className="text-green-600">Elementra</span>
            </h2>
            <img
              src={aboutImage}
              alt="About us"
              className={`rounded-2xl w-full md:w-[90%] h-full object-cover max-h-[500px] shadow-lg transition-all duration-700 ${
                bannerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              ref={bannerRef}
            />
          </div>

          {/* Cards */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Innovations that{" "}
              <span className="bg-gradient-to-r from-green-300 to-green-700 text-transparent bg-clip-text">
                transform
              </span>{" "}
              the industry
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={cardRefs[index]}
                  className={`bg-white rounded-2xl p-6 shadow-md transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-105 ${
                    cardVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ minHeight: "220px" }}
                >
                  {card.icon}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={metricRefs[index]}
              className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${
                metricVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-gray-600 mb-2 text-sm md:text-base">{metric.label}</p>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-800">
                {metricVisible[index] ? (
                  <CountUp
                    start={0}
                    end={metric.value}
                    duration={2}
                    formattingFn={(value) => {
                      if (value >= 1e9) return (value / 1e9).toFixed(1) + "B";
                      if (value >= 1e6) return (value / 1e6).toFixed(1) + "M";
                      if (value >= 1e3) return (value / 1e3).toFixed(1) + "K";
                      return value;
                    }}
                  />
                ) : (
                  0
                )}
              </h4>
            </div>
          ))}
        </div>

        {/* Promotional Banner */}
        <div
          ref={bannerRef}
          className={`mt-16 bg-gray-100 py-16 rounded-2xl px-6 md:px-12 text-center flex flex-col items-center gap-8 transition-all duration-700 ${
            bannerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm md:text-base uppercase font-medium text-gray-500 tracking-widest">
            Elevate Your Visual Storytelling
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug max-w-3xl">
            Empower creativity through innovation and AI-driven visual solutions.
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            At Elementra, we combine advanced AI tools with modern design principles to help creators and businesses bring their vision to life effortlessly.
          </p>
          <div className="flex justify-center md:justify-end w-full">
            <button className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold uppercase hover:bg-red-700 transition-colors duration-300">
              Discover Our Solutions
            </button>
          </div>
        </div>

        {/* New 3-Image Row */}
  <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {[about1, about2, about3].map((img, idx) => (
    <div
      key={idx}
      ref={imagesRefs[idx]}
      className={`rounded-2xl overflow-hidden shadow-md transition-all duration-700 transform hover:scale-105 ${
        imagesVisible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <img src={img} alt={`About ${idx + 1}`} className="w-full h-full object-cover" />
    </div>
  ))}
</div>
{/* New Single Banner Image */}
<div
  ref={about4Ref}
  className={`mt-16 relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ${
    about4Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
  <img
    src={about4}
    alt="Transforming visuals with AI innovation"
    className="w-full h-full object-cover max-h-[500px]"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
    {/* Top-left text */}
    <div className="text-white text-left">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
  Transforming visuals with AI innovation
</h2>

      
    </div>

    {/* Bottom-right button */}
    <div className="flex justify-end mt-4">
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase px-6 py-3 rounded-lg transition-colors duration-300">
        JOIN US NOW
      </button>
    </div>
  </div>
</div>

<div className="marque-body relative overflow-hidden w-full bg-white">
  <div className="marquee-track flex whitespace-nowrap">
    {Array(20).fill("Your Visual Storytelling").map((text, index) => (
      <span key={index} className="mx-4 text-xl font-heading text-brand-dark">
        {text}
      </span>
    ))} 
  </div>
</div>




      </div>
    </section>
  );
};

export default AboutSection;
