import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="h-[100dvh] w-[100dvw] bg-teal flex flex-col">
      <Typography className="text-6xl md:text-8xl px-5 md:px-10 pt-5 md:pt-20 pb-10 md:pb-20  text-moss font-tit flex justify-start tracking-wide">
        Projects
      </Typography>
      <div className="flex items-center h-full">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
