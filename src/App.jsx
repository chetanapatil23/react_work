
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Hero from './Hero'
import About from './About'
import Navbar from "./Navbar";
import { useState } from "react";

function App() {

const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Router>
        <nav>
             <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          {/*<Link to="/Hero">Hero</Link>|*/}
      
        </nav>
        <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
