import AboutImg from '../assets/about-img.png'
import Button from './Button'


const AboutUs = () => 
   (
   <section id='aboutus' className='h-screen flex justify-center flex-col w-full pt-10'>
      <div className="flex max-md:flex-col gap-10  justify-around items-center ">
          <div>
            <img src={AboutImg} alt="AboutImg" className='max-w-[27rem] max-lg:max-w-[20rem] ' />
          </div>
          <div className=' flex flex-col gap-5 items-center '>
            <h3 className=' text-orange-400 heading3'>ABOUT US</h3>
            <p className='w-[300px] lg:w-[400px] text-xl bg-paragraph p-5 
            rounded-xl text-black f-cabin'>Welcome to Cafe Garden, where every sip is a journey through lush flavors and aromatic bliss.Our coffee shop is a haven for those seeking a tranquil escape.</p>
            <Button name="VIEW MORE"/>
          </div>
      </div>
   </section>
  )

export default AboutUs