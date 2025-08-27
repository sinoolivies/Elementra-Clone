import React, { useRef } from "react";
import footer1 from "../assets/footer1.jpg";
import footer2 from "../assets/footer2.jpg";
import footer3 from "../assets/footer3.jpg";
import footer4 from "../assets/footer4.jpg";
import footer5 from "../assets/footer5.jpg";
import footer6 from "../assets/footer6.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Footer = () => {
  const galleryImages = [footer1, footer2, footer3, footer4, footer5, footer6];

  // Refs for Intersection Observer
  const galleryRefs = galleryImages.map(() => useRef(null));
  const galleryVisible = galleryRefs.map((ref) => useIntersectionObserver(ref));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <p className="text-gray-300">Email: info@elementra.ai</p>
            <p className="text-gray-300">Phone: +250 789 123 456</p>
            <p className="text-gray-300">Address: Kigali, Rwanda</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-bold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com/sino_olivies" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors text-white text-lg">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/sino_olivies" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors text-white text-lg">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/sino_olivies" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors text-white text-lg">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com/in/sino_olivies" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors text-white text-lg">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/250794477622" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition-colors text-white text-lg">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:items-end space-y-2 text-gray-400 text-sm">
            <p>© 2025 Elementra. All rights reserved.</p>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>

        {/* Instagram Gallery with Intersection Observer */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              ref={galleryRefs[idx]}
              className={`w-full aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-500
                ${galleryVisible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:scale-105`}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Yellow Horizontal Line */}
        <hr className="border-t-2 border-yellow-400 mb-4" />

        {/* Footer Branding */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>Developed by <span className="text-white font-semibold">sino_olivies</span></p>
          <div className="flex space-x-4 mt-2 md:mt-0">
  <a
    href="https://facebook.com/sino_olivies"
    className="transition-colors"
    style={{ color: '#1877F2' }} 
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>
  <a
    href="https://instagram.com/sino_olivies"
    className="transition-colors"
    style={{ color: '#E1306C' }} 
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>
  <a
    href="https://twitter.com/sino_olivies"
    className="transition-colors"
    style={{ color: '#1DA1F2' }} 
    target="_blank"
    rel="noopener noreferrer"
  >
    Twitter
  </a>
  <a
    href="https://linkedin.com/in/sino_olivies"
    className="transition-colors"
    style={{ color: '#0077B5' }} 
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
  <a
    href="https://wa.me/250794477622"
    className="transition-colors"
    style={{ color: '#25D366' }} 
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp
  </a>
</div>

        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute  right-6 bottom-6 p-3 bg-yellow-400 text-gray-900 rounded shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
