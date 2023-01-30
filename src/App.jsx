import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import mountains from './assets/mountains.jpg'

function App() {

  return (
    <div className="App min-w-[360px]">
      <Navbar />
      <div className="mx-auto bg-cover bg-center h-screen fixed top-0 left-0 w-full opacity-50 -z-10" style={{backgroundImage: `url(${mountains})`}}></div>
      <Banner />
      <Skills />
      
      
    </div>
  )
}

export default App
