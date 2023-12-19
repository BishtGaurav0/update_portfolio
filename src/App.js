import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Project";
import Publication from "./Components/Publication/Publication";
import bg from "./Assests/bg.jpg";
import Education from "./Components/Education/Education";

const myStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "space",
  backgroundSize: "6px auto",
};

function App() {
  return (
    <div className="App" style={myStyle}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Publication />
      <Contact />
    </div>
  );
}

export default App;
