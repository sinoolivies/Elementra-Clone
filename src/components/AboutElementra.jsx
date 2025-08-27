import React, { useRef } from "react";
import Masonry from "react-masonry-css";
import custom1 from "../assets/custom1.jpg";
import custom2 from "../assets/custom2.jpg";
import custom3 from "../assets/custom3.jpg";
import custom4 from "../assets/custom4.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const articles = [
  {
    image: custom1,
    title: "AI-Powered Creativity",
    category: "AI Technology",
    date: "Aug 27, 2025",
    comments: 12,
  },
  {
    image: custom2,
    title: "Design Tools for Creators",
    category: "Creative Software",
    date: "Aug 25, 2025",
    comments: 8,
  },
  {
    image: custom3,
    title: "Optimizing Visual Workflows",
    category: "Productivity",
    date: "Aug 23, 2025",
    comments: 5,
  },
  {
    image: custom4,
    title: "Next-Gen AI Tools",
    category: "Innovation",
    date: "Aug 20, 2025",
    comments: 3,
  },
];

const ElementraLayout = () => {
  const breakpointColumnsObj = {
    default: 4,
    1024: 2,
    640: 1,
  };

  // Create refs for each article
  const articleRefs = articles.map(() => useRef(null));
  const articleVisible = articleRefs.map((ref) => useIntersectionObserver(ref));

  return (
    <section className=" relative w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
            ABOUT ELEMENTRA
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed md:text-right">
            Elementra is dedicated to revolutionizing visual content creation
            through advanced AI technology. Our mission is to empower creators
            and businesses with innovative tools that enhance storytelling.
          </p>
        </div>

        {/* Masonry Cards */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-6 w-auto"
          columnClassName="pl-6 bg-clip-padding"
        >
          {articles.map((article, idx) => (
            <div
              key={idx}
              ref={articleRefs[idx]}
              className={`mb-6 bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-700
                ${articleVisible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:shadow-xl`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 hover:underline cursor-pointer">
                  {article.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                  <span>{article.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default ElementraLayout;
