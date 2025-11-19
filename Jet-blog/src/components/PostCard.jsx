import React from 'react';
import office from '../assets/office.png';

const PostCard = ({ title = "Latest from the Blog" }) => {
  
  const articles = [
    {
      id: 1,
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 2,
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
 ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header - Title and "View All" button */}
      <div className="flex justify-between items-center mb-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
        
        {/* View All Articles Button */}
        <button className=" py-2 px-8 flex md:px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition">
          VIEW ALL ARTICLES
        </button>
      </div>
     
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              {/* Article Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={office}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center gap-2 text-sm text-purple-600 mb-3">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                
                {/* Title with Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">{article.title}</h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                {/* Summary */}
                <p className="text-gray-600 mb-4">{article.summary}</p>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 ? 'bg-purple-100 text-purple-600' :
                        index === 1 ? 'bg-blue-100 text-blue-600' :
                        'bg-pink-100 text-pink-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};
export default PostCard;
