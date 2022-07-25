import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0E6029] text-[#E5FFEE]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#17C24F]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <h3>An online network to connect coders to coding contest.</h3>
            </div>
            <div>
              <p>
                <ul>
                  <li>A place to show off your coding skills</li>
                  <li>Network with other coders</li>
                  <li>Taking code wars to a new level</li>
                  <li>Register interest in coding contest</li>
                  <li>Compete for the chance to win amazing job opportunities.</li>
                </ul> 
          </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
