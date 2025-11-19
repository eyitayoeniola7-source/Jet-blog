import React from 'react';
import office from '../assets/office.png';

 const ExploreByTopic = ({ title = "Explore by Topic" }) => {
  const articles = [
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
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between  mb-8">
        <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
        <p className="font-semibold text-lg  mt-20 flex-start"></p>
        <button className="px-6 mt-20 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition">
          VIEW ALL ARTICLES
        </button>
      </div>
      
      {/* 2 columns on desktop (different from BlogSection) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white overflow-hidden ">
            <div className="h-48 overflow-hidden relative">
                {article.topic && (
                  <div className=" text-black px-3 absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent  px-4 py-3 font-semibold text-lg">
                    {article.topic}
                  </div>
                )}
              <img 
                src={office}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-purple-600 mb-3">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 flex-1">{article.title}</h3>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
              <p className="text-gray-600 mb-4">{article.summary}</p>
              
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
export default ExploreByTopic;

