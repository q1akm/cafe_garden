import shopImg from '../assets/shop.png'
const Contact = () => {
  return (
    <section id='contact' 
    className="flex justify-around items-center mt-28 max-md:flex-col gap-10">
      <div>
        <img src={shopImg}
        width={450} alt="shopimg" />
      </div>
      <div className="bg-gray p-10 rounded-xl h-full flex flex-col gap-7 ">
       <div className='flex flex-col items-center'>
       <h1 className="text-orange-400 text-3xl  f-roboto">CONTACT US</h1>
        <p className='text-white text-lg '>How can we help ?</p>
       </div>
          <div className="gap-10  flex justify-center ">
            <div className="text-white flex flex-col w-full">
              <label htmlFor="first-name"
              className="text-xl font-mono">Name</label>
              <input type="text"
              className="p-2  rounded text-black f-roboto"/>
            </div>
          </div>
          <div className="gap-10  flex justify-center  max-lg:flex-col">
            <div className="text-white flex flex-col">
              <label htmlFor="email"
              className="text-xl font-mono">Email Address</label>
              <input type="email"
              className="p-2 rounded text-black f-roboto"/>
            </div>
            <div className="text-white flex flex-col">
            <label htmlFor="phone"
              className="text-xl font-mono">Phone Number</label>
              <input type="text"
              className="p-2 rounded text-black f-roboto"/>
            </div>
          
          </div>
          <div className="text-white flex flex-col ">
              <label htmlFor="first-name"
              className="text-xl font-mono">Message</label>
              <textarea name="message" id="" 
                className=" h-36 p-2 rounded text-black f-roboto"
              cols="30" rows="10"></textarea>
          </div>
        <button className='border-2 font-mono rounded hover:bg-orange-500 bg-orange-400 p-2' 
        type='submit'>Submit</button>
     </div>
    </section>
    
  )
  
}


export default Contact