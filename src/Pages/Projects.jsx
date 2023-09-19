import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="h-[100dvh] w-[100dvw] py-5 md:py-10 bg-teal flex flex-col">
      <Typography className="text-5xl md:text-8xl mb-5 md:mb-10 ml-5 md:ml-10 text-moss font-tit flex justify-start">
        Projects
      </Typography>
      <div className="flex items-center h-full">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
