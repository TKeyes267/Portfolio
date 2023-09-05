import { useState } from "react";

import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./Pages/Header";
import Landing from "./Pages/Landing";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import { IconButton } from "@material-tailwind/react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function App() {
  return (
    <main class="max-h-screen max-w-screen overflow-y-scroll snap-proximity snap-y scroll-smooth ">
      <div id="homePage" className=" h-screen snap-start overscroll-y-auto">
        <Landing />
      </div>
      <div id="aboutPage" className="h-screen snap-start overscroll-y-auto">
        <About />
      </div>
      <div id="skillsPage" className="h-screen snap-start overscroll-y-auto">
        <Skills />
      </div>
      <div id="projectPage" className="h-screen snap-start overscroll-y-auto">
        <Projects />
      </div>
      <div id="contactPage" className="h-screen snap-start overscroll-y-auto">
        <Contact />
      </div>
    </main>
  );
}

export default App;
