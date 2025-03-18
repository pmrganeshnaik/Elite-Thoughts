import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, TrendingUp, BookOpen, Award } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const featureRef = useRef(null);

  useEffect(() => {
    // Simple animation on load
    const heading = headingRef.current;
    const text = textRef.current;
    const btn = btnRef.current;
    const features = featureRef.current;

    if (heading && text && btn && features) {
      heading.style.opacity = 0;
      text.style.opacity = 0;
      btn.style.opacity = 0;
      features.style.opacity = 0;

      setTimeout(() => {
        heading.style.opacity = 1;
        heading.style.transform = 'translateY(0)';
      }, 200);

      setTimeout(() => {
        text.style.opacity = 1;
        text.style.transform = 'translateY(0)';
      }, 400);

      setTimeout(() => {
        btn.style.opacity = 1;
        btn.style.transform = 'translateY(0)';
      }, 600);

      setTimeout(() => {
        features.style.opacity = 1;
        features.style.transform = 'translateY(0)';
      }, 800);
    }
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-10 pb-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A192F] leading-tight transition-all duration-700 ease-out"
              style={{ transform: 'translateY(20px)' }}
            >
              Welcome to <span className="text-[#FFD700]">Elite Thoughts</span>
            </h1>
            
            <p 
              ref={textRef}
              className="text-lg md:text-xl text-[#0A192F]/80 mt-6 max-w-lg mx-auto md:mx-0 transition-all duration-700 ease-out"
              style={{ transform: 'translateY(20px)' }}
            >
              A premier platform for thinkers, creators, and innovators to share ideas that shape our world. Discover thought-provoking content or create your own masterpiece.
            </p>
            
            <div 
              ref={btnRef}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 ease-out"
              style={{ transform: 'translateY(20px)' }}
            >
              <button 
                onClick={() => navigate('/views')}
                className="px-8 py-3 bg-[#FFD700] text-[#0A192F] font-semibold rounded-full hover:bg-[#FFD700]/90 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center"
              >
                Explore Blogs <ChevronRight size={20} className="ml-2" />
              </button>
              
              <button 
                onClick={() => navigate('/new-post')}
                className="px-8 py-3 bg-transparent border-2 border-[#0A192F] text-[#0A192F] font-semibold rounded-full hover:bg-[#0A192F] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                Start Writing 
              </button>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-[#0A192F] to-[#0A192F]/70 rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/oAoi0nhfRt2kdPYgHQPWgA" 
                  alt="Elite Thoughts" 
                  className="w-full h-full object-cover "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] to-transparent h-1/3"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs text-[#FFD700]">FEATURED</div>
                  <div className="text-lg font-semibold">The Art of Critical Thinking</div>
                </div>
              </div>
              
              {/* Floating elements for decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FFD700] rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0A192F] rounded-full opacity-30 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div 
        ref={featureRef}
        className="bg-white py-16 transition-all duration-700 ease-out"
        style={{ transform: 'translateY(20px)' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-12">Why Choose Elite Thoughts?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Thought Leadership</h3>
              <p className="text-[#0A192F]/70">Access insights from leading thinkers and innovators across various domains.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Quality Content</h3>
              <p className="text-[#0A192F]/70">Curated, well-researched articles that spark inspiration and learning.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Community Driven</h3>
              <p className="text-[#0A192F]/70">Join a community of like-minded individuals passionate about sharing ideas.</p>
            </div>
          </div>
        </div>
      </div>

      
      {/* CSS for background pattern */}
      <style jsx>{`
        .bg-pattern {
          background-image: radial-gradient(#FFD700 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}

export default Home;