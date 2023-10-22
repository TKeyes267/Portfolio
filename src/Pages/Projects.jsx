import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="h-full md:h-[100dvh] w-[100dvw] bg-teal flex flex-col no-scrollbar">
      <Typography className="text-6xl md:text-8xl px-5 md:px-10 md:pt-20 py-10 md:pb-10 text-moss font-tit flex justify-start tracking-wide">
        Projects
      </Typography>
      <div className="flex  items-center h-full  bg-teal">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
