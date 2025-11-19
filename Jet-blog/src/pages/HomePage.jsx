import React from 'react';
import blog from '../assets/blog.png';
import office from '../assets/office.png';
import OfficeGirl from '../assets/OfficeGirl.png';
import desktop from '../assets/desktop.png';
import Background from '../assets/Background.png';
import PostCard from '../components/PostCard';
import ExploreByTopic from '../components/ExploreByTopic';

 const HomePage = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Blog image */}
        <div className="w-full h-96 rounded-3xl overflow-hidden mb-12">
          <img 
            src={blog}
            alt="Blog workspace"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Welcome text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Welcome to My
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Digital Notebook
              </span>
            </h1>
          </div>
          
          <div>
            <p className="text-black text-lg leading-relaxed">
              I'm JET, an engineer and innovator. This is my corner of the internet, where I share my thoughts, 
              discoveries, and the lessons learned from my journey. You'll find in-depth articles on web & blockchain 
              development, practical tutorials, and reflections on technology and life. My goal is to demystify the 
              complex and empower you to build. Let's explore together.
            </p>
          </div>
        </div>


        
        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
  {/* LEFT SIDE - Large office image with title and summary below */}
  <div>
    <img src={office} alt="office image" />
    <h3 className="text-xl font-bold text-gray-900 mb-6 mt-10">Title of the post</h3>
    <p className="text-gray-600 text-sm mb-3">A brief, engaging summary of the post.</p>
  </div>
  
  {/* RIGHT SIDE - Two cards stacked vertically */}
  <div className="flex flex-col gap-8">
    
    {/* Card 1 - OfficeGirl image with text on right */}
    <div className="flex gap-6 bg-white  p-4">
      {/* Image - Left */}
      <div className="w-">
        <img
          src={OfficeGirl}
          alt="officegirl image"
          className="w-full h-48 object-cover "
        />
      </div>

      {/* Text - Right */}
      <div className="w-3/5 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
          <span>emmanueljet</span>
          <span>•</span>
          <span>1 Jan 2025</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">Title of the post</h3>
        <p className="text-gray-600 text-sm mb-3">A brief engaging summary of the post</p>

        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
            Web3
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-600">
            Development
          </span>
        </div>
      </div>
    </div>

    {/* Card 2 - Desktop image with text on right */}
    <div className="flex gap-6 bg-white p-4">
      {/* Image - Left */}
      <div className="w-">
        <img 
          src={desktop} 
          alt="desktop image" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text - Right */}
      <div className="w-3/5 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
          <span>emmanueljet</span>
          <span>•</span>
          <span>1 Jan 2025</span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">Title of the post</h3>
        <p className="text-gray-600 text-sm mb-3">A brief engaging summary of the post</p>

        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600">
            Web3
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-600">
            Development
          </span>
        </div>
      </div>
    </div>
    
  </div>
</div>
         <PostCard />
          <ExploreByTopic />

         <div className='relative w-full object-cover max-w-7xl mx-auto h-auto mt-10 sm:mt-20 p-4 sm:p-6 md:p-10 text-center justify-center items-center'>
           <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden'>
        <img src={Background} alt="background-image" className='w-full h-full'/>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-white px-4 '>
            <h2 className='text-xl sm:text-2xl md:text-4xl font-semibold text-center'>Can't Find an Answer? <br className='hidden sm:block' /> Ask J2.</h2>
            <p className='mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg lg:text-2xl leading-relaxed'>
              My AI assistant, J2, has been trained on my articles and   <br className='hidden md:block' /> projects. If you have a specific question or want a summary of   <br className='hidden md:block' /> a topic I've covered, J2 can provide instant answers and point   <br className='hidden md:block' /> you to the right resources.
            </p>
            <button className=" sm:w-auto px-4 py-2 sm:px-6 sm:py-2.5 lg:py-4 mt-4 sm:mt-6 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold hover:shadow-lg transition text-sm sm:text-base">
              CHAT WITH J2
            </button>
            </div>
          </div>
        </div>
        </div>
        
        
      </section>
      
      
    </div>
  );
};
export default HomePage;