import type React from 'react';


const Experience: React.FC = () => {

  return (
    <div id='experience' className='min-h-100'>
      <h2><span className='text-secondary'>*</span> Experience</h2>

      {/* <div className='hero bg-base-200'>
        <div className='hero-content justify-between items-start w-full flex-col lg:flex-row-reverse'>

        </div>
      </div> */}

      <div className="tabs tabs-box rounded-none">
        <input type="radio" name="experience-tabs" className="tab" aria-label="Novofinity" defaultChecked />
        
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p>
            Software Developer @ 
            <span className='text-primary'> Novofinity</span>
          </p>
          <p className='text-xs text-primary'>
            DEC 2023 - DEC 2025
          </p>
          <div className='block relative'>
            <ul className='text-sm custom-li'>
              <li>afas</li>
            </ul>
          </div>
        </div>

        {/* <input type="radio" name="experience-tabs" className="tab" aria-label="Tab 2"  />
        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

        <input type="radio" name="experience-tabs" className="tab" aria-label="Tab 3" />
        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div> */}
      </div>
    </div>
  );
}


export default Experience;