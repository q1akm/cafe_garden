import { FaArrowAltCircleRight } from "react-icons/fa";


const Button = (props) => 
   (
      <a href="#contact"
       className='text-white ml-40 flex items-center gap-4 link-hover relative p-2 f-roboto text-sm '>
        {props.name}
        <FaArrowAltCircleRight className="text-xl"/>
      </a>
    
  )


export default Button;