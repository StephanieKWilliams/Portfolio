import React, {useState , useEffect} from "react";

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import About from "./components/about.jsx";
import Experience from "./components/Experience.jsx";
import Carousel from "./components/carousel.jsx"
import Footer from "./components/footer.jsx"
import Hero from "./components/hero.jsx"
import Loading from "./components/loader.jsx";
import Contact from "./components/contact.jsx";


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
  
  
    <Router>
      <Navbar/>
      <Routes>
      
      <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/footer" element={<Footer />} />
        <Route
        path="/Experience"
        element={
          
            <Experience />
          
        }
      />
      </Routes>
    </Router>
 
  );
}

export default App;
