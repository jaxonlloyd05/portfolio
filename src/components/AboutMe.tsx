import type React from 'react';
import { FaJs, FaReact, FaCircle, FaPython } from 'react-icons/fa6';

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

          <div className='flex flex-col gap-4'>
            <p className='text-sm'>
              Ever since I was a kid I had always been fascinated by how computers work. From low level computations to full stack applications,
              understanding how it all works has been a passion of mine. This passion led me into studying computer science and working at Novofinity, 
              and I'm excited to continue learning more in the future!
            </p>

            <ul className='grid grid-cols-3 text-xs'>
              <li><FaJs/> JavaScript & TypeScript</li>
              <li><FaReact/> React</li>
              <li><FaCircle/>SvelteKit</li>
              <li><FaPython/>Python</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AboutMe;