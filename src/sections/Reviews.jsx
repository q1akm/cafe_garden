import { reviews } from "../constants"

const Reviews = () => {
  return (
    <div className=' pt-20 w-full h-full'>
        <div className="flex flex-col justify-center text-2xl gap-5 items-center">
          <h3 className='max-md:text-xl heading3 text-orange-400 '>
          REVIEWS</h3>
          <h1 className='heading1 max-md:text-2xl '>What Our Visitors Say</h1>
        </div>
       <div className='text-white mt-20'>
           <ul className="flex justify-around items-center gap-10  max-lg:flex-col">
              {reviews.map((item) => (
                <li key={item.title}
                className="h-full bg-gray p-7 rounded-xl border-white  ">
                    <h1 className="f-roboto text-2xl">{item.title}</h1>
                    <p className="w-64 my-7 font-mono">{item.paragraph}</p>
                    <div className="flex gap-10">
                        <h3 className="text-orange-400 f-roboto">{item.fella}</h3>
                        <p className="font-mono">{item.date}</p>
                    </div>
                </li>
              ) )}
           </ul>
       </div>
  </div>
  )
}

export default Reviews