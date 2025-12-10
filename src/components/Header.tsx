import type React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';


const Header: React.FC = () => {
  return (
    <div id='header'>
      <div className='navbar max-w-[1280px] m-auto'>
        <div className='flex-none'>
          <a className='link link-hover text-primary px-3 hidden md:block' href='/#intro' aria-label='link-intro'>Jaxon Lloyd</a>
        </div>
        <div className='flex-3'>
          <ul className="menu menu-horizontal rounded-box hidden md:inline-flex">
            <li><a className='link link-hover' href='/#aboutme' aria-label='link-aboutme'>About me</a></li>
            <li><a className='link link-hover' href='/#experience' aria-label='link-aboutme'>Experience</a></li>
          </ul>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a className='link hover:text-primary' href='https://github.com/jaxonlloyd05' target='_blank' aria-label='redirect-github'>
                <FaGithub size={'24px'}/>
              </a>
            </li>
            <li>
              <a className='link hover:text-primary' href='https://www.linkedin.com/in/jaxon-lloyd-6577832a3/' target='_blank' aria-label='redirect-linkedin'>
                <FaLinkedin size={'24px'}/>
              </a>
            </li>
            <li>
              <a className='link hover:text-primary' href='mailto:jaxonlloyd05@gmail.com' aria-label='redirect-mailto'>
                <FaEnvelope size={'24px'}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Header;