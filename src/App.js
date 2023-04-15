//import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="text-texto body-font">
      <Navbar />
      <Presentation/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
