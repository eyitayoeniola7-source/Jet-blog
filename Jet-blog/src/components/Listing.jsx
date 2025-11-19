import React from 'react';
import office from '../assets/office.png';

const Listing = ({ title }) => {  
  const listingData = [  
    {
      id: 1,
      topic: "Latest in BlockChain",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 2,
      topic: "Latest in Technology",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 3,
      topic: "Latest in Web Engineering",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 4,
      topic: "Latest in Development",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 5,
      topic: "Latest in AI & Innovation",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 6,
      topic: "Latest in Design",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 7,
      topic: "Latest in Mobile",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 8,
      topic: "Latest in Cloud",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 9,
      topic: "Latest in Security",
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      </div>
      
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listingData.map((item) => (  
            <div key={item.id} className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition group">
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={office}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              
              
              <div className="p-6">
                {/* Topic Badge */}
                {item.topic && (
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {item.topic}
                    </span>
                  </div>
                )}
                
                {/* Author and Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{item.author}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                
                {/* Title with Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">{item.title}</h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                {/* Summary */}
                <p className="text-gray-600 mb-4">{item.summary}</p>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        index === 0 ? 'bg-blue-100 text-blue-600' :
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
      </div>
    </section>
  );
};

export default Listing;