import Logo from '../assets/logo.webp'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { navLinks } from '../constants';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick (!click);

  return (
    <div className="flex justify-between items-center w-full p-2 absolute z-10">
     
      <div>
      <img src={Logo} alt="logo" width={110} className='ml-3'/>
      </div>

      <ul className={click ? ("text-4xl flex flex-col justify-center gap-10 items-center nav-menu active  text-white")
      : (" max-lg:hidden   flex gap-10 text-white text-[19px] ")}>
          {navLinks.map((item) =>(
            <li key={item.label}
            className='f-cabin relative link-hover cursor-pointer'>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
      </ul>


      <div className='max-lg:hidden flex justify-center items-center gap-5 mr-6'>
      <a href="#contact" className='text-white hover:bg-orange-600 duration-300 bg-orange-500 p-2 f-roboto border-2 rounded text-sm '>
        RESERVATION
      </a>
        <h1 className='text-3xl text-white'><FaRegUserCircle/></h1>
      </div>

      {/* hamburger mobile  */}
      <div onClick={handleClick}
      className='lg:hidden'>
        {click?
        (       <h1 className=' text-3xl mr-5'> <FaTimes/></h1>
        ):(
             
              <h1 className=' text-3xl mr-5'> <GiHamburgerMenu/></h1>
        )
        }
      </div>
     
    </div>
  )
}

export default Navbar