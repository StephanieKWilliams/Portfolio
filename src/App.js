import React, {useState , useEffect} from "react";
import Navbar from "./components/Navbar.jsx"
import Carousel from "./components/carousel.jsx"
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx"
import Footer from "./components/footer.jsx"
import Hero from "./components/hero.jsx"
import Loading from "./components/loader.jsx";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Change 3000 to the actual time it takes to fetch your data
  }, []);

  if (loading) {
    return <Loading />;
  }
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
