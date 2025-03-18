import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#0A192F] text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        {/* Wave Animation */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-1 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-[#FFD700] mr-2">•</span> About Blog
            </h3>
            <p className="text-gray-300 mb-4">
              A thoughtful collection of articles on technology, design, and personal growth.
              Subscribe to our newsletter to stay updated with our latest posts.
            </p>
            <div className="mt-6">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[#1A2942] text-white px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-[#FFD700]"
                />
                <button className="bg-[#FFD700] text-[#0A192F] px-4 py-2 rounded-r font-medium hover:bg-opacity-80 transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-[#FFD700] mr-2">•</span> Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Categories", "Contact", "Privacy Policy"].map((link, index) => (
                <li key={index} className="transform hover:translate-x-2 transition-transform duration-300">
                  <a href="#" className="text-gray-300 hover:text-[#FFD700]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-[#FFD700] mr-2">•</span> Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Finance-Business", "Health", "Travel", "Food", "General", "Technology", "Lifestyle"].map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="bg-[#1A2942] text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-[#FFD700] hover:text-[#0A192F] transition-all duration-300"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 my-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: <Github size={20} />, label: "GitHub" },
            { icon: <Twitter size={20} />, label: "Twitter" },
            { icon: <Linkedin size={20} />, label: "LinkedIn" },
            { icon: <Mail size={20} />, label: "Email" }
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              aria-label={social.label}
              className="bg-[#1A2942] p-3 rounded-full text-gray-300 hover:text-[#FFD700] hover:bg-[#0A192F] transform hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center mb-4 md:mb-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <span>© {new Date().getFullYear()} Your Blog. Made with</span>
            <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
            <span>All rights reserved.</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-[#FFD700] text-[#0A192F] p-2 rounded-full hover:bg-opacity-80 transform hover:scale-110 transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

    </footer>
  );
}

export default Footer;