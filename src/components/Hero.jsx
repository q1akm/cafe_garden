const Hero = () => {
  return (
    <section id="hero">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-screen hero-bg">
         <div>
         <h3 className="text-center text-orange-400 text-[30px] f-roboto ">Welcome</h3>
          <h1 className="text-center text-white f-nofex text-[40px]   mt-7 ">Rise and grind, it's coffee time! </h1>
         </div>
          <div className="flex gap-4">
            <a href="#contact">
              <button className="p-2 border-2 f-roboto   hover:bg-orange-500 duration-300 text-white text-sm">
                BOOK A TABLE
              </button>
            </a>
            <a href="#menu" className="text-white f-roboto relative p-1 link-hover">
              Open Menu
            </a>
          </div>
    </div>
   
    </section>
  )
}

export default Hero