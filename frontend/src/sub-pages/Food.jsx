import React from 'react';
import useGetReq from '../customHooks/useGetReq.js';
import { Link } from "react-router-dom";

function Food() {
  const {data} = useGetReq();
  const filterData = data.filter(d => d.category === "Food");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-[#0A192F] mb-6 relative inline-block">
          Food & Cuisine
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                        Read Recipe
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
                <p>Loading culinary articles...</p>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Food;