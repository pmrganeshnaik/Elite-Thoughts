import React, { useState, useEffect } from "react";
import useGetById from "../customHooks/useGetById";
import axios from "axios";
import {
  Save,
  ArrowLeft,
  Pencil,
  FileText,
  User,
  Tag,
  MessageSquare,
} from "lucide-react";

function EditBlog() {
  const categories = [
    "Finance-Business",
    "Health",
    "Travel",
    "Food",
    "General",
  ];
  const { data, loading, id } = useGetById();
  // const url = `http://localhost:3000/posts/${id}`;
  const url = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  // Ensure data is properly structured before setting state
  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setBlog({
        title: data[0].title || "",
        content: data[0].content || "",
        author: data[0].author || "",
        category: data[0].category || "",
      });
    }
  }, [data]);

  function handleChanges(e) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.patch(`${url}/posts/${id}`, blog);
      alert("Blog successfully updated!");
      console.log("Updated Data:", response.data);
      window.history.back();
    } catch (error) {
      console.error("Blog update failed:", error);
      alert(`Blog update failed: ${error.message}`);
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center h-64">
        <div className="flex items-center space-x-2">
          <div
            className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-4 h-4 bg-[#FFD700] rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <p className="text-[#0A192F] font-medium ml-2">
            Loading blog data...
          </p>
        </div>
      </div>
    );
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-2xl font-serif font-bold text-[#0A192F]">
          Blog not found
        </h1>
        <p className="mt-4 text-[#0A192F]/70">
          The blog post you're trying to edit might have been moved or deleted.
        </p>
        <button
          className="mt-6 flex items-center justify-center mx-auto bg-[#0A192F] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-[#FFD700] hover:text-[#0A192F] transform hover:scale-105"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Previous Page
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <Pencil className="h-6 w-6 text-[#FFD700] mr-3" />
            <h1 className="text-[#0A192F] text-2xl md:text-3xl font-serif font-bold">
              Edit Blog Post
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="flex items-center text-sm font-medium text-[#0A192F]"
              >
                <FileText className="h-4 w-4 mr-2" />
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={blog.title}
                onChange={handleChanges}
                placeholder="Enter blog title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="author"
                className="flex items-center text-sm font-medium text-[#0A192F]"
              >
                <User className="h-4 w-4 mr-2" />
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={blog.author}
                onChange={handleChanges}
                placeholder="Enter author name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="category"
                className="flex items-center text-sm font-medium text-[#0A192F]"
              >
                <Tag className="h-4 w-4 mr-2" />
                Category
              </label>
              <select
                id="category"
                name="category"
                value={blog.category}
                onChange={handleChanges}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="content"
                className="flex items-center text-sm font-medium text-[#0A192F]"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={blog.content}
                onChange={handleChanges}
                placeholder="Enter blog content"
                rows="10"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex items-center px-4 py-2 border border-[#0A192F] text-[#0A192F] rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center bg-[#0A192F] text-white px-4 py-2 rounded-md hover:bg-[#FFD700] hover:text-[#0A192F] transition-colors duration-300"
              >
                <Save className="mr-2 h-4 w-4" />
                Update Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
