import { Hero,
  AboutUs,
  Contact,
  Offer,
  Reviews,
  Menu} from './sections/Index'

  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  import Visitors from './components/Visitors'

const App = () => 
   (
    <main>

        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Menu/>
        <Offer/>
        <Visitors/>
        <Reviews/>
        <Contact/>
        <Footer/>
     
    </main>
  )


export default App