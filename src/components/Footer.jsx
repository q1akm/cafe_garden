import logoImg from '../assets/logo.webp'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className="mt-20">
      <div className='max-md:flex-col max-md:gap-10 flex justify-between p-6 bg-gray text-white'>
        <div>
          <img src={logoImg} alt="" width={150} />
        </div>
        <div>
          <h1 className='text-orange-400 text-2xl f-roboto mb-5'>Contact</h1>
          <h2 className='flex items-center font-mono gap-4'><i><FaPhoneAlt/></i> +959 7777777</h2>
          <h2 className='flex items-center font-mono gap-4 my-1'><i><MdEmail/></i> cafegarden@gmail.com</h2>
          <h2 className='flex items-center font-mono gap-4'><i><FaTwitter/></i> @cafe_garden</h2>

        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-orange-400 text-2xl f-roboto '>Address</h1>
          <p className='font-mono'>19th street,Downtown <br /> Yangon</p>
          <div className='flex text-xl gap-4 cursor-pointer'>
            <i><FaFacebookSquare/></i>
            <i><RiInstagramFill/></i>
            <i><FaYoutube/></i>
          </div>
        </div>
      </div>
      <div className='text-white flex flex-col justify-center items-center gap-2 p-2 '>
        <h1>Made By akm.web</h1>
        <div className='flex gap-4 text-lg'>
        <a href="https://www.instagram.com/q1akm"><RiInstagramFill/></a>
        <a href="https://github.com/q1akm"><FaGithubSquare/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
