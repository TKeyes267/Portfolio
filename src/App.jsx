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
                  backgroundColor: "yellow",
                  // backgroundImage:
                  //   'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60")',
                  // backgroundSize: "cover",
                }}
              >
                <Header />
                <Landing />
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  <ArrowCircleDownIcon> </ArrowCircleDownIcon>
                </button>
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <About />
                <button onClick={() => fullpageApi.moveSectionUp()}>
                  <ArrowCircleUpIcon> </ArrowCircleUpIcon>
                </button>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  <ArrowCircleDownIcon> </ArrowCircleDownIcon>
                </button>
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <Projects />
                <button onClick={() => fullpageApi.moveSectionUp()}>
                  <ArrowCircleUpIcon> </ArrowCircleUpIcon>
                </button>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  <ArrowCircleDownIcon> </ArrowCircleDownIcon>
                </button>
              </div>
              <div className="section" style={{ backgroundColor: "black" }}>
                <Skills />
                <button onClick={() => fullpageApi.moveSectionUp()}>
                  <ArrowCircleUpIcon> </ArrowCircleUpIcon>
                </button>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  <ArrowCircleDownIcon> </ArrowCircleDownIcon>
                </button>
              </div>
              <div className="section" style={{ backgroundColor: "green" }}>
                <Contact />
                <button onClick={() => fullpageApi.moveSectionUp()}>
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
