import { visitors } from "../constants"
import { FaPlus } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";


const Visitors = () => 
   (
   <section>
     <div className="bg-gray mt-20">
       <ul className="flex max-md:flex-col justify-around p-10  gap-10">
          {visitors.map((item) =>(
            <li key={item.people}
            className='flex flex-col items-center f-roboto'>
               <h1 className="flex items-center gap-1 text-2xl"> {item.people} 
               <i className="text-orange-400"><FaPlus/></i>
               </h1>
               <h1 className="text-xl">{item.visit}</h1>
            </li>
          ))}
           <li 
            className='flex flex-col items-center f-roboto'>
               <h1 className="flex items-center gap-1 text-2xl">100
               <i className="text-orange-400"><FaPercentage/></i>
               </h1>
               <h1 className="text-xl">Positive feedback</h1>
            </li>
        </ul>
      </div>
   </section>
  )


export default Visitors