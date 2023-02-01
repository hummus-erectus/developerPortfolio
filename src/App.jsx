import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import mountains from './assets/mountains.jpg'

function App() {

  return (
    <div className="App min-w-[360px]">
      <Navbar />
      <div className="mx-auto bg-cover bg-center h-screen fixed top-0 left-0 w-full opacity-50 -z-10" style={{backgroundImage: `url(${mountains})`}}></div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />   
      <ToastContainer />   
    </div>
  )
}

export default App
