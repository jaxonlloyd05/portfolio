import type React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';


const Header: React.FC = () => {
  return (
    <div id='header'>
      <div className='navbar gap-4 max-w-[1280px] m-auto'>
        <div className='flex-none'>
          <a className='link link-hover text-primary px-3 hidden md:block'>Jaxon Lloyd</a>
        </div>
        <div className='flex-3'>
          <ul className='menu menu-horizontal px-1 hidden md:block'>
            <li>asdas</li>
          </ul>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a className='link hover:text-primary' href='https://github.com/jaxonlloyd05' target='_blank'>
                <FaGithub size={'24px'}/>
              </a>
            </li>
            <li>
              <a className='link hover:text-primary' href='https://www.linkedin.com/in/jaxon-lloyd-6577832a3/' target='_blank'>
                <FaLinkedin size={'24px'}/>
              </a>
            </li>
            <li>
              <a className='link hover:text-primary' href='mailto:jaxonlloyd05@gmail.com'>
                <FaEnvelope size={'24px'}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Header;