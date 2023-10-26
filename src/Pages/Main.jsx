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
      <div id="pageTop"></div>
      <Header />
      <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden lg:snap-mandatory snap-y scroll-smooth">
        <section
          id="homePage"
          className=" w-screen relative lg:snap-mandatory snap-start scroll-smooth overflow-auto z-0"
        >
          <Landing />
        </section>
        <section
          id="aboutPage"
          className=" w-screen relative lg:snap-mandatory snap-start scroll-smooth overflow-auto z-10"
        >
          <About />
        </section>
        <section
          id="projectPage"
          className=" w-screen relative lg:snap-mandatory snap-start scroll-smooth overflow-auto z-20"
        >
          <Projects />
        </section>
        <section
          id="skillsPage"
          className=" w-screen relative lg:snap-mandatory snap-start scroll-smooth overflow-auto z-30"
        >
          <Skills />
        </section>
        <footer
          id="contactPage"
          className="h-full w-screen relative lg:snap-mandatory lg:snap-end scroll-smooth overflow-auto z-40"
        >
          <Contact />
        </footer>
      </div>
    </main>
  );
}

export default Main;
