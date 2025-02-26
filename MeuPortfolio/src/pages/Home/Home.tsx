import NavBar from "../../components/NavBar"
import About from "./sections/About/About"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"

function Home() {

    return (
      <>
          <NavBar/>
          <Hero />
          <About/>
          <Footer />
      </>
    )
  }
  
  export default Home