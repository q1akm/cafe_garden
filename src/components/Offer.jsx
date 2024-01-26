import { offers } from '../constants';


const Offer = () => 
   (
    <section id='offer' className='w-full h-full pt-10'>
      <div className="flex flex-col gap-5 justify-center max-md:text-xl items-center">
     <h3 className='max-md:text-xl heading3 text-orange-400  '>
      WHAT WE OFFER YOU</h3>
          <h1 className='heading1 max-md:text-2xl'>Our Best Offers ( This Week )</h1>
      </div>
         <div className='max-md:flex-col text-white mt-16 flex justify-around text-xl gap-10 items-center font-serif'>
         
           {offers.map((offer) => (
            <li key={offer.id}
            className="flex flex-col gap-3 items-center">
               <img src={offer.img} alt={offer.alt} 
               className="w-[23rem]"/>
               <h1 className="f-roboto text-2xl font-bold">{offer.tilte}</h1>
               <p className="f-cabin text-orange-400">{offer.price}</p>
            </li>
           ))}
         
         </div>
    </section>
  )


export default Offer