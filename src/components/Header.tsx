import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";


function Header() {
  return (
    <div className="navbar gap-4 max-w-[1280px] m-auto">
      <div className="flex-none">
        <a className="link link-hover text-xl text-primary px-3 hidden md:block">Jaxon Lloyd</a>
      </div>
      <div className="flex-3">
        <ul className="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li><a>Link</a></li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="link hover:text-primary"><FaGithub size={'24px'}/></a>
          </li>
          <li>
            <a className="link hover:text-primary"><FaLinkedin size={'24px'}/></a>
          </li>
          <li>
            <a className="link hover:text-primary"><FaEnvelope size={'24px'}/></a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Header;