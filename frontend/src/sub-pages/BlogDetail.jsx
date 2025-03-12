import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function BlogDetail() {
  const { category, id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/posts/" + id);
        const filterData = response.data.Data.filter(d => d.category === category);
        setData(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category, id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center h-64">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-[#0A192F] font-medium ml-2">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fadeIn">
      {data.length > 0 ? (
        data.map((blog) => (
          <article key={blog.id} className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-[#0A192F] text-3xl md:text-4xl font-serif font-bold mb-6 animate-fadeIn" 
                  style={{ animationDelay: '0.2s' }}>
                {blog.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6 text-sm text-[#0A192F]/70 animate-fadeIn"
                   style={{ animationDelay: '0.3s' }}>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {blog.author}
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </span>
                <span className="bg-[#FFD700] text-[#0A192F] px-2 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </span>
              </div>
              
              <div className="royal-divider my-6"></div>
              
              <div className="prose max-w-none text-[#0A192F]/90 leading-relaxed animate-fadeIn"
                   style={{ animationDelay: '0.4s' }}>
                <p className="whitespace-pre-line">{blog.content}</p>
              </div>
              
              <div className="royal-divider my-6"></div>
              
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200 animate-fadeIn"
                   style={{ animationDelay: '0.5s' }}>
                <span className="text-sm text-[#0A192F]/60">
                  Published in <span className="font-medium text-[#FFD700]">{blog.category}</span>
                </span>
                <button 
                  className="bg-[#0A192F] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#FFD700] hover:text-[#0A192F] transform hover:scale-105"
                  onClick={() => window.history.back()}>
                  Back to Articles
                </button>
              </div>
            </div>
          </article>
        ))
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <h1 className="text-2xl font-serif font-bold text-[#0A192F]">Blog was not found</h1>
          <p className="mt-4 text-[#0A192F]/70">The blog post you're looking for might have been moved or deleted.</p>
          <button 
            className="mt-6 bg-[#0A192F] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#FFD700] hover:text-[#0A192F] transform hover:scale-105"
            onClick={() => window.history.back()}>
            Return to Previous Page
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;