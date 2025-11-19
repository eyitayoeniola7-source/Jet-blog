import React from 'react';
import Header from '../components/Header';
import Listing from '../components/Listing';
import Footer from '../components/Footer';

export const TagsPage = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-purple-50 flex flex-col">
      
      
      <main className="border-t border-gray-400 px-4 py-20 border-b border-gray-400 flex-1">
     

         <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Explore by Tag
              </span>
              
              
            </h1>
          </div>
          
          <div className='justify-end items-end'>
            <p className="text-black text-sm leading-relaxed">
               Looking for something specific? The tags below represent the<br /> granular topics, technologies, and concepts I discuss, Select a<br />tag to see all related posts.
            </p>
          </div>
        </div>
      </main>

      <section>
       <Listing title="Tag Listing" />
      </section>
      
      
    </div>
  );
};