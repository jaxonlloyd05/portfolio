import type React from "react";
// import MountainSketch from "../assets/MountainSketch";

const Intro: React.FC = () => {
    
    
    return (
        <div id='intro' className="pt-[144px] lg:pt-[288px]">
            {/* <MountainSketch /> */}
            <h1>Hi I'm <span className="text-primary">Jaxon</span></h1>
            <p className="opacity-65 text-center fade-in-section">
                I'm a software developer based in Sydney Australia
            </p>
        </div>
    )
}


export default Intro;