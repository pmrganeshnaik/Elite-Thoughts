import React, { useEffect, useRef } from 'react';
import { Users, BookOpen, Award, Globe, Coffee, Heart } from 'lucide-react';

function About() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Animation for page elements on load
    const title = titleRef.current;
    const content = contentRef.current;
    const team = teamRef.current;

    if (title && content && team) {
      title.style.opacity = 0;
      content.style.opacity = 0;
      team.style.opacity = 0;

      setTimeout(() => {
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
      }, 200);

      setTimeout(() => {
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
      }, 400);

      setTimeout(() => {
        team.style.opacity = 1;
        team.style.transform = 'translateY(0)';
      }, 600);
    }
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen">
      {/* Header Section */}
      <div className="bg-[#0A192F] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div 
            ref={titleRef}
            className="max-w-4xl mx-auto text-center transition-all duration-700 ease-out"
            style={{ transform: 'translateY(20px)' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Elite Thoughts</h1>
            <p className="text-xl text-white/80">A community built on passion for ideas and knowledge sharing</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out"
          style={{ transform: 'translateY(20px)' }}
        >
          <div>
            <h2 className="text-3xl font-bold text-[#0A192F] mb-6">Our Mission</h2>
            <p className="text-lg text-[#0A192F]/80 mb-6">
              Elite Thoughts was founded with a simple but powerful mission: to create a platform where the exchange of ideas flourishes and where thoughtful discourse is celebrated.
            </p>
            <p className="text-lg text-[#0A192F]/80 mb-6">
              We believe that great ideas deserve a voice, and that by sharing our thoughts and perspectives, we all grow together. Our platform exists to elevate insights across disciplines, from philosophy and science to art and culture.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center mr-3">
                  <BookOpen size={20} className="text-[#0A192F]" />
                </div>
                <span className="font-medium text-[#0A192F]">Quality Content</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center mr-3">
                  <Users size={20} className="text-[#0A192F]" />
                </div>
                <span className="font-medium text-[#0A192F]">Growing Community</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center mr-3">
                  <Globe size={20} className="text-[#0A192F]" />
                </div>
                <span className="font-medium text-[#0A192F]">Global Reach</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center mr-3">
                  <Award size={20} className="text-[#0A192F]" />
                </div>
                <span className="font-medium text-[#0A192F]">Excellence First</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-[#0A192F] to-[#0A192F]/70 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-pattern"></div>
              <img 
                src="/api/placeholder/600/800" 
                alt="Our mission" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FFD700] rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0A192F] rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div 
            ref={teamRef}
            className="transition-all duration-700 ease-out"
            style={{ transform: 'translateY(20px)' }}
          >
            <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-12">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-[#0A192F] relative">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Team Member" 
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-1">Alex Johnson</h3>
                  <p className="text-[#FFD700] font-medium mb-3">Founder & CEO</p>
                  <p className="text-[#0A192F]/70 mb-4">
                    Passionate about creating platforms that foster intellectual growth and meaningful connections.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-[#0A192F] hover:text-[#FFD700]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-[#0A192F] hover:text-[#FFD700]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-[#0A192F] relative">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Team Member" 
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-1">Sarah Martinez</h3>
                  <p className="text-[#FFD700] font-medium mb-3">Content Director</p>
                  <p className="text-[#0A192F]/70 mb-4">
                    With over a decade in publishing, Sarah ensures only the highest quality content makes it to our platform.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-[#0A192F] hover:text-[#FFD700]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-[#0A192F] hover:text-[#FFD700]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-[#0A192F] relative">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Team Member" 
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A192F] mb-1">David Patel</h3>
                  <p className="text-[#FFD700] font-medium mb-3">Tech Lead</p>
                  <p className="text-[#0A192F]/70 mb-4">
                    David ensures our platform runs smoothly, allowing our community to focus on what matters: sharing ideas.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-[#0A192F] hover:text-[#FFD700]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-[#0A192F] hover:text-[#FFD700]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
              <BookOpen size={24} className="text-[#0A192F]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Knowledge Sharing</h3>
            <p className="text-[#0A192F]/70">We believe that knowledge grows when shared, and that open exchange benefits everyone.</p>
          </div>
          
          {/* Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
              <Coffee size={24} className="text-[#0A192F]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Thoughtful Discourse</h3>
            <p className="text-[#0A192F]/70">We foster environments where ideas can be debated respectfully and thoroughly.</p>
          </div>
          
          {/* Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
              <Heart size={24} className="text-[#0A192F]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Inclusive Community</h3>
            <p className="text-[#0A192F]/70">We welcome diverse perspectives and believe that inclusion strengthens our collective wisdom.</p>
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

export default About;