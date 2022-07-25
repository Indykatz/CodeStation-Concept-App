import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0E6029]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#E5FFEE]'>Welcome to</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#17C24F]'>
          Code Station
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#E5FFEE]'>
          Over 10,000 coding events at your finger tips
        </h2>
        <p className='text-[#438759] py-4 max-w-[700px]'>
        Your one stop for coding and community is coming soon...       
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-400 hover:border-green-400'>
            View Events
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
