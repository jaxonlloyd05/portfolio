import type React from 'react';
import MountainLine from '../assets/MountainSketch';

const greetings = [
    <>Hey, <span className='text-primary'>Jaxon</span> here</>,
    <>Hi! my name is <span className='text-primary'>Jaxon</span></>,
    <>I'm <span className='text-primary'>Jaxon</span>, nice to meet you</>
]

const Intro: React.FC = () => {
    return (
        <div id='intro' className='pt-[144px] md:pt-[288px]'>
            <MountainLine />

            {/* <h1 className='text-center'><span className='text-primary'>Jaxon Lloyd,</span> first of his name</h1> */}
            <h1 className='text-center'>
                {greetings[Math.floor(Math.random() * greetings.length)]}
            </h1>
            <div className='text-center fade-in-section'>
                I'm a software developer who loves learning about science, maths, and computers. I currently live in Sydney, Australia, 
                where I've had the pleasure of working on large database migrations, enterprise-focused website applications, 
                rapid client-facing demos, and much more.
                
                {/* I've worked on large database migrations, enterprise focused website applications, rapid client-facing demos,
                optimising REST APIs, and much more. */}
                {/* <br /> <br />
                In my own I've also experimented with robotics, machine learning and web frameworks. */}
            </div>
        </div>
    );
}


export default Intro;