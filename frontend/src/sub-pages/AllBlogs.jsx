import React from "react";
import { Link } from "react-router-dom";
import useGetReq from "../customHooks/useGetReq.js";

function AllBlogs() {
  const {data, loading} = useGetReq();
  
  return (
    <div className="container mx-auto px-4 py-8 ">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          
          data.map((item, index) => (
            <Link 
              to={`${item.category.toString()}/${item.id.toString()}`} 
              key={item.id}
              className="group"
            >
              <li className={`royal-card animate-card bg-white`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-5">
                  <h1 className="text-[#0A192F] text-xl md:text-2xl font-serif font-bold mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                    {item.title}
                  </h1>
                  <p className="text-[#0A192F]/80 mb-4">{item.content.slice(0, 80)}...</p>
                  <div className="flex justify-between items-center">
                    <small className="text-[#0A192F]/70 italic">By {item.author}</small>
                    <span className="bg-[#FFD700] text-[#0A192F] text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read More
                    </span>
                  </div>
                </div>
                <div className="h-1 w-0 bg-[#FFD700] group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </li>
            </Link>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-40">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
              <p className="text-[#0A192F] font-medium ml-2">Loading...</p>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

export default AllBlogs;