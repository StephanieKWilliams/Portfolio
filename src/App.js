import React from "react";
import Navbar from "./components/Navbar.jsx"
import Carousel from "./components/carousel.jsx"
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx"
import Footer from "./components/footer.jsx"
import Hero from "./components/hero.jsx"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <About/>
      <Experience/>
      <Carousel/>       */}
      <Footer/>
      
    </div>
  );
}

export default App;
