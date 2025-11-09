import React from 'react';
import office from '../assets/office.png';

 const Listing = () => {
  const Listing = [
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
     
      
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 3,
       topic:"Latest in Web Engineering",
     
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 4,
      
      author: "emmanueljet",
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 5,
      topic:"Latest in AI & Innovation",
     
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    {
      id: 6,
      
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    
    {
      id: 7,
      
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },
    
    {
      id: 8,
      
      date: "1 Jan 2025",
      title: "Title of the post",
      summary: "A brief, engaging summary of the post.",
      tags: ["Web3", "Web3", "Web3"]
    },


    {
      id: 9,
      
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
        <h2 className="text-4xl font-bold text-gray-800">{Listing.title}</h2>
        
        
      </div>
      
      {/*  Container - Horizontal scroll on mobile, grid on desktop */}
      <div className="relative">
     

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Listing.map((Listing) => (
            <div key={Listing.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              {/* Article Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={office}
                  alt={Listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center gap-2 text-sm text-purple-600 mb-3">
                  <span>{Listing.author}</span>
                  <span>•</span>
                  <span>{Listing.date}</span>
                </div>
                
                {/* Title with Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 flex-1">{Listing.title}</h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                
                {/* Summary */}
                <p className="text-gray-600 mb-4">{Listing.summary}</p>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {Listing.tags.map((tag, index) => (
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
