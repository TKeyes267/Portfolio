import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="h-[100dvh] w-[100dvw] bg-teal flex flex-col no-scrollbar">
      <Typography className="text-6xl md:text-8xl px-5 md:px-10 pt-5 md:pt-20 pb-10 md:pb-0 text-moss font-tit flex justify-start tracking-wide">
        Projects
      </Typography>
      <div className="flex lg:flex-row flex-col items-center h-full  bg-teal">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
