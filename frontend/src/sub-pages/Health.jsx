import React from 'react';
import useGetReq from '../customHooks/useGetReq.js';
import { Link } from 'react-router';

function Health() {
  const data = useGetReq();
  const filterData = data.filter(d => d.category === "Health");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#0A192F] mb-6 relative inline-block">
          Health & Wellness
          <span className="absolute bottom-0 left-0 h-1 bg-[#FFD700] w-full"></span>
        </h2>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filterData.length > 0 ? (
            filterData.map((item, index) => (
              <Link to={item.id.toString()} key={item.id} className="group">
                <li className="royal-card animate-card" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="p-5">
                    <div className="flex items-start mb-3">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#0A192F] flex items-center justify-center text-white mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h1 className="text-[#0A192F] text-xl font-serif font-bold group-hover:text-[#FFD700] transition-colors duration-300">
                        {item.title}
                      </h1>
                    </div>
                    
                    <p className="text-[#0A192F]/80 mb-3">{item.content.slice(0,80)}...</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <small className="text-[#0A192F]/70 italic flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {item.author}
                      </small>
                      <span className="bg-[#FFD700] text-[#0A192F] text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read Article
                      </span>
                    </div>
                  </div>
                  <div className="h-1 w-0 bg-[#FFD700] group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </li>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="flex justify-center items-center">
                <div className="loader mr-3"></div>
                <p>Loading health articles...</p>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Health;