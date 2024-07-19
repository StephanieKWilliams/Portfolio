import React, {useState , useEffect} from "react";

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx"
import Carousel from "./components/carousel.jsx"
import About from "./components/about.jsx";
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
  const Experience = React.lazy(() => import("./components/Experience.jsx"));

  return (
    
  
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route
        path="/Experience"
        element={
          <React.Suspense fallback={<>...</>}>
            <Experience />
          </React.Suspense>
        }
      />
      </Routes>
    </Router>
  );
}

export default App;
