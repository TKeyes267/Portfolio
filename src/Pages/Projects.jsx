import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="h-full  w-[100dvw] bg-forest  no-scrollbar">
      <Typography className="text-6xl md:text-8xl px-5 md:px-20 md:pt-20 py-5 md:pb-10 text-moss font-tit flex justify-start tracking-wide">
        Projects
      </Typography>
      <div>
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
