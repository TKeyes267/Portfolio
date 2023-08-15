import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main>
      <Typography className="w-full text-7xl">Projects</Typography>
      <ProjectCards />
    </main>
  );
};

export default Projects;
