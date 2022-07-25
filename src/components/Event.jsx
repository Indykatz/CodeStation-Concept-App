import React from 'react';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic8 from '../assets/pic8.jpg';

const Event = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#E5FFEE] bg-[#0E6029]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#E5FFEE] border-[#17C24F]'>
            Events
          </p>
          <p className='py-6'>// Here are some upcoming events</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pic3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#E5FFEE] tracking-wider'>
                Nostalgia Nerds
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Info
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Add
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pic4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#E5FFEE] tracking-wider'>
                With Our Powers
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Info
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Add
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pic5})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#E5FFEE] tracking-wider'>
                Code Wars
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Info
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Add
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pic1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#E5FFEE] tracking-wider'>
                Team Academy
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Info
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Add
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pic2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#E5FFEE] tracking-wider'>
                Coding Thumb War
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Info
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Add
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${pic8})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-[#E5FFEE] tracking-wider'>
                Work of Else
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#17C24F] text-[#E5FFEE] font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
