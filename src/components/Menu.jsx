import menuImg from '../assets/menu-img.webp'
import Button from '../components/Button'
const Menu = () => 
   (
   <section id='menu'
    className='h-screen w-full flex flex-col justify-center '>
      <div className="flex justify-around gap-10  items-center max-md:flex-col-reverse">

          <div className='flex flex-col gap-5 items-center'>
          <h3 className='heading3 text-orange-400 '>COFFEE MENU</h3>
            <p className='w-[300px] lg:w-[400px] text-xl  bg-paragraph p-5 
            rounded-xl text-black f-cabin'>Our menu is a curated journey through the finest blends and flavors, all served in the cozy embrace of our charming coffee shop.</p>
            <Button name="VIEW MENU"/>
          </div>
          <div>
            <img src={menuImg} alt="menuimg" className='max-w-[27rem] max-lg:max-w-[20rem]'/>
          </div>

        </div>

     
   </section>
  )


export default Menu