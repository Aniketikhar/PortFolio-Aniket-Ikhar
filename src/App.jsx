import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skill from './Components/Skills/Skill';
import data from "./Components/Projects/data.js"
import Education from './Components/Education/Education.jsx'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects data={data} activeSlide={2} />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
