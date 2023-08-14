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
    <div>
      <ReactFullpage
        //fullpage options
        // licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                style={{
                  height: "100%",
                  backgroundColor: "black",
                }}
              >
                {/* <Header /> */}
                <Landing />
                <button
                  className="hover:text-green-500 transition-colors"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <ArrowCircleDownIcon> </ArrowCircleDownIcon>
                </button>
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <About />
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
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <Projects />
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
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <Skills class="m-1" />
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
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <Contact />
                <button
                  className="hover:text-green-500 transition-colors"
                  onClick={() => fullpageApi.moveSectionUp()}
                >
                  <ArrowCircleUpIcon> </ArrowCircleUpIcon>
                </button>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
