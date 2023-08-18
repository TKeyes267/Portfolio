import { useState } from "react";

import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./Pages/Header";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import { IconButton } from "@material-tailwind/react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function App() {
  return (
    <main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
      <Header className="w-full px-8 fixed top-0" />
      <div
        className="w-full h-screen p-8 snap-start overscroll-y-auto"
        style={{
          backgroundColor: "orange",
        }}
      >
        <Landing />
        {/* <div>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionDown()}
          >
            <ArrowCircleDownIcon> </ArrowCircleDownIcon>
          </button>
        </div> */}
      </div>
      <div
        className="w-full h-screen p-8 snap-start overscroll-y-auto"
        style={{ backgroundColor: "purple" }}
      >
        <About />
        {/* <div>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionUp()}
          >
            <ArrowCircleUpIcon> </ArrowCircleUpIcon>
          </button>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionDown()}
          >
            <ArrowCircleDownIcon> </ArrowCircleDownIcon>
          </button>
        </div> */}
      </div>
      <div
        className="w-full h-screen p-8 snap-start overscroll-y-auto"
        style={{ backgroundColor: "blue" }}
      >
        <Projects />
        {/* <div>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionUp()}
          >
            <ArrowCircleUpIcon> </ArrowCircleUpIcon>
          </button>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionDown()}
          >
            <ArrowCircleDownIcon> </ArrowCircleDownIcon>
          </button>
        </div> */}
      </div>
      <div
        className="w-full h-screen p-8 snap-start overscroll-y-auto"
        style={{ backgroundColor: "green" }}
      >
        <Skills class="m-1" />
        {/* <div>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionUp()}
          >
            <ArrowCircleUpIcon> </ArrowCircleUpIcon>
          </button>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionDown()}
          >
            <ArrowCircleDownIcon> </ArrowCircleDownIcon>
          </button>
        </div> */}
      </div>
      <div
        className="w-full h-screen p-8 snap-start overscroll-y-auto"
        style={{ backgroundColor: "black" }}
      >
        <Contact />
        {/* <div>
          <button
            className="hover:text-green-500 transition-colors"
            onClick={() => fullpageApi.moveSectionUp()}
          >
            <ArrowCircleUpIcon> </ArrowCircleUpIcon>
          </button>
        </div> */}
      </div>
    </main>
  );
}

export default App;
