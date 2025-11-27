import type React from 'react';
// import MountainSketch from '../assets/MountainSketch';

const Intro: React.FC = () => {
    
    
    return (
        <div id='intro' className='pt-[144px] md:pt-[288px]'>
            {/* <MountainSketch /> */}
            <h1 className='text-center'>Hi, I'm <span className='text-primary'>Jaxon</span></h1>
            <div className='text-center fade-in-section'>
                I'm a software developer in Sydney who is fascinated by large-scale software and learning new things.
                So far I've worked on large database migrations, data management apps, client facing demos
                and AI integrations.
                <br /> <br />
                In my own time I've worked with robotics, machine learning and further exploring web frameworks.
            </div>
        </div>
    );
}


export default Intro;