import "../App.css";

import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";

function Main() {
  return (
    <main>
      <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden snap-mandatory snap-y scroll-smooth">
        <section
          id="homePage"
          className="h-[100dvh] w-screen snap-mandatory snap-start overflow-auto"
        >
          <Landing />
        </section>
        <section
          id="aboutPage"
          className=" h-[100dvh] w-screen snap-mandatory snap-start overflow-auto"
        >
          <About />
        </section>
        <section
          id="projectPage"
          className="h-[100dvh] w-screen snap-mandatory snap-start overflow-auto"
        >
          <Projects />
        </section>
        <section
          id="skillsPage"
          className="h-[100dvh] w-screen snap-mandatory snap-start overflow-auto"
        >
          <Skills />
        </section>
        <section
          id="contactPage"
          className="h-[100dvh] w-screen snap-mandatory snap-start overflow-auto"
        >
          <Contact />
        </section>

        {/* <footer
          id="contactPage"
          className="h-[100dvh] w-screen snap-mandatory snap-start overflow-auto"
        >
          <Contact />
        </footer> */}
      </div>
    </main>
  );
}

export default Main;
