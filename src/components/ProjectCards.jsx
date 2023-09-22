import { useEffect, useState } from "react";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import SingleProject from "../Pages/SingleProject";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  });

  return (
    <div className="snap-x snap-mandatory flex flex-row items-center h-full overflow-x-auto px-[calc(50%-140px)] no-scrollbar">
      {projects.map((project) => {
        const title = project.projectID;

        return (
          <Card
            key={project.projectID}
            className="w-[1000px] h-[500px] text-moss bg-moss rounded-none mx-20 shadow-none snap-center bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-60 "
          >
            <CardHeader className="bg-moss shadow-none rounded-none p-0 m-0 overflow-hidden">
              <img
                src={project.projectImage}
                alt="image 1"
                className="object-cover  object-center"
              />
            </CardHeader>

            <div className="w-[1000px]">
              <CardBody className=" bg-silver p-5 ">
                <Link
                  to={`/project/${project.projectID}`}
                  state={{ title }}
                  className="inline-block"
                >
                  <Typography
                    color="blue"
                    className=" bg-blue text-teal font-normal text-2xl md:text-4xl font-tit pb-5 hover:underline"
                  >
                    {project.projectTitle}
                  </Typography>
                </Link>
                <Typography
                  variant="lead"
                  className=" text-teal mb-2 font-normal text-lg md:text-xl leading-[1.8] font-tit"
                >
                  {project.projectSummary}
                </Typography>
              </CardBody>
              <CardFooter className=" flex flex-row justify-between items-center p-5 text-teal">
                <div className="flex flex-row items-center gap-5">
                  <Link
                    to={`${project.projectGitHubLink}`}
                    className="inline-block "
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="w-5 h-5 md:w-6 md:h-6 hover:text-moss hover:bg-teal"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </Link>
                  <Link to={`${project.projectLink}`} className="inline-block">
                    <LaunchSharpIcon className="hover:text-moss hover:bg-teal"></LaunchSharpIcon>
                  </Link>
                </div>
                <Link
                  to={`/${project.projectURL}`}
                  state={{ title }}
                  className="inline-block"
                >
                  <Typography className="bg-moss text-teal hover:text-moss hover:bg-teal p-2 text-xl md:text-xl">
                    Read More
                  </Typography>
                </Link>
              </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectCards;
