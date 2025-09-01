
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Projects from "./components/Projects";
import About from "./components/About";
import AccordionUsage from "./components/AccordionUsage";


function App() {
  return (
    <>
      <Header/>
      
      <Hero/>
      <About/>
      <AccordionUsage/>
      <Skills/>
      <LogoCarousel/>
      
      {/* <Projects/> */}
    
      <Footer/>
    </>
  );
}

export default App;
