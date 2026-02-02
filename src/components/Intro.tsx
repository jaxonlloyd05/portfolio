import type React from 'react';
import Fractal from '../assets/KochFractal';
import { useState } from 'react';

const Intro: React.FC = () => {
  const [ introDone, setIntroDone ] = useState(false);

  return (
    <div id='intro' className='pt-8 md:pt-12'>
      <div className={ (!introDone ? 'pt-16 ' : '') + 'transition-[padding] duration-1000' }>
        <Fractal onDone={ () => setIntroDone(true) } />
      </div>
      { introDone && 
        <>
          <h1 className='text-center fade-in-section'>
            I'm <span className='text-primary'>Jaxon</span>, nice to meet you
          </h1>
          <div className='text-center fade-in-section'>
            I'm a software developer who loves to understand large-scale technologies and how they impact the world.
          </div>
        </>   
      }

    </div>
  );
}


export default Intro;