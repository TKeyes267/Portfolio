import "../App.css";
import Header from "./Header";
import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Skills from "../Pages/Skills";

function Main() {
  return (
    <main>
      <Header />
      <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden md:snap-mandatory snap-y scroll-smooth">
        <section
          id="homePage"
          className=" w-screen relative md:snap-mandatory snap-start overflow-auto z-0"
        >
          <Landing />
        </section>
        <section
          id="aboutPage"
          className=" w-screen relative md:snap-mandatory snap-start overflow-auto z-10"
        >
          <About />
        </section>
        <section
          id="projectPage"
          className=" w-screen relative md:snap-mandatory snap-start overflow-auto z-20"
        >
          <Projects />
        </section>
        <section
          id="skillsPage"
          className="h-[100dvh] w-screen relative md:snap-mandatory snap-start overflow-auto z-30"
        >
          <Skills />
        </section>
        <footer
          id="contactPage"
          className="h-full w-screen relative md:snap-mandatory md:snap-end overflow-auto z-40"
        >
          <Contact />
        </footer>
      </div>
    </main>
  );
}

export default Main;