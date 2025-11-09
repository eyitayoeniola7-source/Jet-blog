import React from 'react';
import Header from '../components/Header';
import Listing from '../components/Listing';
import Footer from '../components/Footer';

export const CategoriesPage = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-purple-50 flex flex-col">
      
      
      <main className="border-t border-gray-400 px-4 py-20 border-b border-gray-400 flex-1">
     

         <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Explore by
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Category
              </span>
            </h1>
          </div>
          
          <div className='justify-end items-end'>
            <p className="text-black text-sm leading-relaxed">
               My articles cover a range of topics, from deep technical dives to <br /> reflections  on professional growth. Browse the categories below <br />to find the content that matters most to you.
            </p>
          </div>
        </div>
      </main>

      <section>
       <Listing title="Category Listing" />
      </section>
      
      
    </div>
  );
};