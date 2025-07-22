import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import ContactForm from "../components/ContactForm"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
    </div>
  )
}

export default Home