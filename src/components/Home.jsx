import React, { useState, useRef } from "react";
import { FaSlidersH } from "react-icons/fa";
import backgroundImg from "../assets/background.png";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Navbar from "../components/Navbar"; // ✅ external navbar
import ImageSection from "./ImageSection";

const Home = () => {
  const [mode, setMode] = useState("standard");
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [model, setModel] = useState("MidJourney");
  const [loraPrompt, setLoraPrompt] = useState("");
  const [size, setSize] = useState("1024x1024");

  const popularTags = ["Creative", "Hyperrealism", "Steampunk", "Illustration"];

  const toggleMode = () => setMode((prev) => (prev === "standard" ? "advanced" : "standard"));
  const handleTagClick = (tag) => setPrompt((prev) => (prev ? prev + " " + tag : tag));

  // Refs for sections
  const headingRef = useRef(null);
  const inputRef = useRef(null);
  const advancedRefs = {
    prompt: useRef(null),
    negative: useRef(null),
    model: useRef(null),
    lora: useRef(null),
    size: useRef(null),
    generate: useRef(null),
  };
  const tagsRef = useRef(null);
  const limitsRef = useRef(null);

  const headingVisible = useIntersectionObserver(headingRef);
  const inputVisible = useIntersectionObserver(inputRef);
  const advancedVisible = {
    prompt: useIntersectionObserver(advancedRefs.prompt),
    negative: useIntersectionObserver(advancedRefs.negative),
    model: useIntersectionObserver(advancedRefs.model),
    lora: useIntersectionObserver(advancedRefs.lora),
    size: useIntersectionObserver(advancedRefs.size),
    generate: useIntersectionObserver(advancedRefs.generate),
  };
  const tagsVisible = useIntersectionObserver(tagsRef);
  const limitsVisible = useIntersectionObserver(limitsRef);

  return (
    <div className="relative w-full min-h-screen" id="home">
   
      <Navbar />

      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className="fixed inset-0 bg-black/70 z-0"></div>

      {/* Heading */}
      <div
        ref={headingRef}
        className={`relative z-20 flex flex-col items-center justify-center text-center px-4 pt-36 md:pt-48 transition-all duration-1000 ${
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        id="home"
      >
        <h1 className="  heading text-5xl md:text-6xl font-bold text-white mb-2">
          Create <span className="text-[#A3FFB0]">incredible</span> images in seconds!
        </h1>
        <p className="text-xl md:text-2xl text-[#A0DFFF] max-w-2xl mb-6">
          Enter text, choose a style, and get a unique image created by AI
        </p>

        {/* Mode Toggle */}
        <div
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
            inputVisible ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <span
            className={`cursor-pointer text-lg font-medium ${mode === "standard" ? "text-white" : "text-gray-400"}`}
            onClick={toggleMode}
          >
            Standard
          </span>
          <div
            className="w-14 h-6 bg-gray-500 rounded-full relative cursor-pointer flex items-center"
            onClick={toggleMode}
          >
            <div
              className={`w-6 h-6 rounded-full absolute top-1/2 -translate-y-1/2 shadow-md transition-transform duration-300 ease-in-out ${
                mode === "advanced" ? "translate-x-8 bg-red-500" : "translate-x-0 bg-gray-800"
              }`}
            />
          </div>
          <span
            className={`cursor-pointer text-lg font-medium ${mode === "advanced" ? "text-white" : "text-gray-400"}`}
            onClick={toggleMode}
          >
            Advanced
          </span>
        </div>

        {/* Standard Mode Input */}
        {mode === "standard" && (
          <div
            ref={inputRef}
            className={`flex items-center w-full max-w-md gap-2 mb-3 flex-wrap sm:flex-nowrap transition-all duration-700 ${
              inputVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-1 min-w-[140px] items-center bg-gray-100 rounded-md shadow px-3 py-2 gap-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want or hit a tag below"
                className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg md:text-xl"
              />
              <FaSlidersH className="text-gray-500 hover:text-gray-700 cursor-pointer" size={22} />
            </div>
            <button className="px-4 md:px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-md text-white font-bold uppercase text-lg md:text-xl flex-shrink-0 whitespace-nowrap min-w-[100px] shadow-md transition-all duration-300">
              GENERATE
            </button>
          </div>
        )}

        {/* Advanced Mode */}
        {mode === "advanced" && (
          <div
            ref={advancedRefs.prompt}
            className={`overflow-hidden transition-all duration-700 ease-in-out w-full max-w-4xl ${
              advancedVisible.prompt ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 mt-2">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want or hit a tag below"
                  className="w-full bg-gray-100 text-gray-800 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
                  rows={5}
                />
                <textarea
                  ref={advancedRefs.negative}
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  placeholder="Negative prompt (optional)"
                  className="w-full bg-gray-100 text-gray-800 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
                  rows={3}
                />
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-4">
                <select
                  ref={advancedRefs.model}
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none"
                >
                  <option value="MidJourney">MidJourney</option>
                  <option value="DALL-E">DALL-E</option>
                </select>

                <input
                  ref={advancedRefs.lora}
                  type="text"
                  value={loraPrompt}
                  onChange={(e) => setLoraPrompt(e.target.value)}
                  placeholder="LoRA Prompt (optional)"
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none"
                />

                <select
                  ref={advancedRefs.size}
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none"
                >
                  <option value="512x512">512 x 512</option>
                  <option value="1024x1024">1024 x 1024</option>
                  <option value="2048x2048">2048 x 2048</option>
                </select>

                <button
                  ref={advancedRefs.generate}
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white font-bold uppercase text-lg md:text-xl mt-2"
                >
                  GENERATE
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popular Tags */}
        <div
          ref={tagsRef}
          className={`flex flex-wrap justify-center gap-3 mt-4 transition-all duration-700 ${
            tagsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-4 py-1 rounded-full bg-gray-700 text-white hover:bg-red-500 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Usage Limits */}
        <p
          ref={limitsRef}
          className={`text-sm text-gray-400 mt-4 text-center transition-all duration-700 ${
            limitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Limits per hour: 80 images for all visitors and up to 2 requests from a single visitor. Used: 0 images, 0 requests.
        </p>
      </div>
  

<ImageSection />

    </div>
    
  );
};

export default Home;
