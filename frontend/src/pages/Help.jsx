import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle, Book, Edit3, User, MessageSquare, Search, ChevronDown, ChevronUp } from 'lucide-react';

function Help() {
  const [openFaq, setOpenFaq] = useState(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);
  const faqRef = useRef(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "How do I create a new blog post?",
      answer: "To create a new blog post, click on the 'New Blog' button in the navigation bar. You'll be directed to our editor where you can write your post, add images, format text, and add tags to categorize your content. Once you're satisfied with your post, click 'Publish' to share it with our community."
    },
    {
      question: "What types of content are allowed on Elite Thoughts?",
      answer: "Elite Thoughts welcomes thoughtful, original content across a wide range of topics including science, technology, philosophy, arts, culture, and more. We encourage in-depth analysis, personal perspectives, and well-researched articles. However, we do not allow content that promotes hate speech, harassment, misinformation, or violates our community guidelines."
    },
    {
      question: "How can I update or edit my published posts?",
      answer: "You can edit your published posts by navigating to your profile page, selecting the post you wish to edit, and clicking the 'Edit' button. Make your changes in the editor, then click 'Update' to save your revisions. All edits are timestamped for transparency."
    },
    {
      question: "How does the commenting system work?",
      answer: "Comments are enabled on all published posts by default. Readers can leave comments at the bottom of each post. As the author, you'll receive notifications for new comments and have the ability to respond, moderate, or disable comments on your posts if needed."
    },
    {
      question: "Can I save drafts of my posts?",
      answer: "Yes! When writing a new post, your content is automatically saved as a draft every few minutes. You can also manually save by clicking the 'Save Draft' button. Access your drafts anytime from your profile page under the 'Drafts' section."
    },
    {
      question: "How do I format my text in the editor?",
      answer: "Our editor supports Markdown formatting as well as rich text editing tools. You can use the toolbar to add headings, lists, links, and emphasis. For advanced users, we also support direct Markdown input for more precise control over your formatting."
    }
  ];

  useEffect(() => {
    // Animation for page elements on load
    const title = titleRef.current;
    const categories = categoriesRef.current;
    const faq = faqRef.current;

    if (title && categories && faq) {
      title.style.opacity = 0;
      categories.style.opacity = 0;
      faq.style.opacity = 0;

      setTimeout(() => {
        title.style.opacity = 1;
        title.style.transform = 'translateY(0)';
      }, 200);

      setTimeout(() => {
        categories.style.opacity = 1;
        categories.style.transform = 'translateY(0)';
      }, 400);

      setTimeout(() => {
        faq.style.opacity = 1;
        faq.style.transform = 'translateY(0)';
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Help Center</h1>
            <p className="text-xl text-white/80 mb-8">Find answers to your questions and learn how to get the most out of Elite Thoughts</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-[#0A192F]/50" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 rounded-full bg-white text-[#0A192F] placeholder-[#0A192F]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                placeholder="Search for help topics..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 py-16">
        <div 
          ref={categoriesRef}
          className="transition-all duration-700 ease-out"
          style={{ transform: 'translateY(20px)' }}
        >
          <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-12">How can we help you today?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit3 size={28} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Posting & Editing</h3>
              <p className="text-[#0A192F]/70">Learn how to create, edit, and publish your thoughts.</p>
            </div>
            
            {/* Category 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={28} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Account Settings</h3>
              <p className="text-[#0A192F]/70">Manage your profile, notifications, and preferences.</p>
            </div>
            
            {/* Category 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={28} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Community & Engagement</h3>
              <p className="text-[#0A192F]/70">Discover ways to connect with other thinkers.</p>
            </div>
            
            {/* Category 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Book size={28} className="text-[#0A192F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0A192F] mb-2">Content Guidelines</h3>
              <p className="text-[#0A192F]/70">Understanding our standards and practices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div 
            ref={faqRef}
            className="max-w-3xl mx-auto transition-all duration-700 ease-out"
            style={{ transform: 'translateY(20px)' }}
          >
            <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md transition-all duration-300"
                >
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-lg text-[#0A192F]">{faq.question}</span>
                    <span className="text-[#0A192F]">
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 pb-4 ${openFaq === index ? 'block' : 'hidden'}`}
                  >
                    <p className="text-[#0A192F]/80">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block p-3 bg-[#FFD700] rounded-full mb-6">
            <HelpCircle size={32} className="text-[#0A192F]" />
          </div>
          <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Still need help?</h2>
          <p className="text-lg text-[#0A192F]/80 mb-8">
            Our support team is ready to assist you with any questions or issues you might have.
          </p>
          <button className="px-8 py-3 bg-[#0A192F] text-white font-semibold rounded-full hover:bg-[#0A192F]/90 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;