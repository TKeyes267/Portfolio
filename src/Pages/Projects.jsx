import ProjectCards from "../components/ProjectCards";
import { Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
  return (
    <main className="h-screen p-20 bg-teal flex flex-col">
      <Typography className="text-7xl mb-20 text-moss font-tit">
        Projects
      </Typography>
      <div className=" w-fill ">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
