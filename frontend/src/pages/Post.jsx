import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Edit3, FileText, User, Tag, Send, AlertCircle } from "lucide-react";

function Post() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  
  const formRef = useRef(null);
  const headerRef = useRef(null);

  const categories = ["Finance-Business", "Health", "Travel", "Food", "General"];

  function handleChanges(e) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post("http://localhost:3000/posts", blog);
      console.log("Post created: " + response.data);
      setStatus({
        type: "success",
        message: "Your post has been published successfully!"
      });
      // Reset form after successful submission
      setBlog({ title: "", content: "", author: "", category: "" });
    } catch (error) {
      console.error("Error creating post:", error);
      setStatus({
        type: "error",
        message: "Failed to create post. Please try again."
      });
    } finally {
      setIsSubmitting(false);
      // Scroll to top to show status message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    // Animation for page elements on load
    const header = headerRef.current;
    const form = formRef.current;

    if (header && form) {
      header.style.opacity = 0;
      form.style.opacity = 0;

      setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
      }, 200);

      setTimeout(() => {
        form.style.opacity = 1;
        form.style.transform = 'translateY(0)';
      }, 400);
    }
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className="max-w-3xl mx-auto mb-10 transition-all duration-700 ease-out"
          style={{ transform: 'translateY(20px)' }}
        >
          <div className="text-center">
            <span className="inline-block p-3 bg-[#FFD700] rounded-full mb-4">
              <Edit3 size={28} className="text-[#0A192F]" />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A192F] mb-4">Create New Blog Post</h1>
            <p className="text-lg text-[#0A192F]/70 mb-6">
              Share your elite thoughts with our community of thinkers and innovators
            </p>
          </div>

          {/* Status message */}
          {status.message && (
            <div 
              className={`mt-6 p-4 rounded-lg flex items-center ${
                status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              <AlertCircle size={20} className="mr-2" />
              <span>{status.message}</span>
            </div>
          )}
        </div>

        {/* Form Section */}
        <div 
          ref={formRef}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-out"
          style={{ transform: 'translateY(20px)' }}
        >
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <FileText size={18} className="text-[#0A192F]/70 mr-2" />
                  <label className="text-[#0A192F] font-medium">Blog Title</label>
                </div>
                <input
                  type="text"
                  placeholder="Enter a compelling title for your blog post"
                  name="title"
                  value={blog.title}
                  onChange={handleChanges}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <User size={18} className="text-[#0A192F]/70 mr-2" />
                  <label className="text-[#0A192F] font-medium">Author</label>
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  name="author"
                  value={blog.author}
                  onChange={handleChanges}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Tag size={18} className="text-[#0A192F]/70 mr-2" />
                  <label className="text-[#0A192F] font-medium">Category</label>
                </div>
                <select 
                  name="category" 
                  value={blog.category} 
                  onChange={handleChanges}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-white"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <Edit3 size={18} className="text-[#0A192F]/70 mr-2" />
                  <label className="text-[#0A192F] font-medium">Content</label>
                </div>
                <textarea
                  placeholder="Write your blog post content here..."
                  name="content"
                  value={blog.content}
                  onChange={handleChanges}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent min-h-64"
                  rows="10"
                  required
                ></textarea>
                <p className="text-sm text-[#0A192F]/50 mt-2">
                  Tips: Use clear paragraphs, engaging examples, and a strong conclusion
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-[#FFD700] text-[#0A192F] font-semibold rounded-full transition duration-300 ease-in-out shadow-md flex items-center justify-center min-w-40 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#FFD700]/90 transform hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0A192F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Publish Post
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;