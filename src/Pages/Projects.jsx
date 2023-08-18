import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="p-none h-screen">
      <Typography className="w-full text-8xl mb-24" color="white">
        Projects
      </Typography>
      <ProjectCards className="m-8 h-auto" />
    </main>
  );
};

export default Projects;
