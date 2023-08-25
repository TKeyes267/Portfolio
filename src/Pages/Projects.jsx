import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="p-none h-screen pt-8">
      <Typography className="w-full text-8xl mb-12 text-silver">
        Projects
      </Typography>
      <ProjectCards className="m-8 h-auto" />
    </main>
  );
};

export default Projects;
