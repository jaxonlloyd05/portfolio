import type React from 'react';


const AboutMe: React.FC = () => {

  return (
    <div id='aboutme' className='min-h-100'>
      <h2><span className='text-secondary'>*</span> About me</h2>
      
      <div className='hero bg-base-200'>
        <div className='hero-content justify-between items-start w-full flex-col lg:flex-row-reverse'>
          <div className='hover-3d place-self-center'>
            <img
              src='/imgs/me.jpg'
              className='max-w-sm rounded-lg shadow-2xl w-50'
            />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div>
            <p>I am human</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AboutMe;