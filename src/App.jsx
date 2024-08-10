import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skill from "./Components/Skills/Skill";
import data from "./Components/Projects/data.js";
import Education from "./Components/Education/Education.jsx";
import Social from "./Components/Social Media/Social.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="position-fixed top-50 translate-middle-x translate-middle-y z-3">
        <Social />
      </div>
      <About />
      <Skill />
      <Projects data={data} activeSlide={2} />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
