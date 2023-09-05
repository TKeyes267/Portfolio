import { useEffect, useState } from "react";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";
import { Paper, Button } from "@mui/material";

import {
  Typography,
  Carousel,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  });

  return (
    <div className="flex justify-center overflow-x-hidden">
      <Carousel
        transition={{ duration: 0.75 }}
        className="h-auto overflow-y-visible"
        loop="true"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-1 mt-20 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-none transition-all content-[''] ${
                  activeIndex === i ? "w-12 bg-moss" : "w-4 bg-teal"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => {
          return (
            <IconButton
              variant="text"
              ripple="false"
              size="xl"
              onClick={handlePrev}
              className="!absolute top-2/4 left-5 -translate-y-2/4 rounded-none text-moss hover:bg-moss hover:text-teal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          );
        }}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            ripple="false"
            size="xl"
            onClick={handleNext}
            className="!absolute top-2/4 !right-5 -translate-y-2/4 rounded-none text-moss hover:bg-moss hover:text-teal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {projects.map((project) => {
          return (
            <Card className="text-moss bg-teal w-5/6 rounded-none pl-20 pr-20 shadow-none ">
              <div className="flex flex-row justify-center content-center bg-silver">
                <CardBody
                  floated={false}
                  shadow={false}
                  color="orange"
                  className="w-2/6 h-fit m-0 shrink-0 rounded-none pr-0"
                >
                  <img
                    src="src/assets/images/practiceImage2.png"
                    alt="image 1"
                    className="object-cover aspect-square"
                  />
                </CardBody>
                <CardBody>
                  <CardHeader className="bg-silver shadow-none rounded-none ml-0 pb-8 pt-8 flex content-center">
                    <Typography
                      color="blue"
                      className=" bg-blue text-teal font-normal text-5xl font-tit"
                    >
                      {project.projectTitle}
                    </Typography>
                  </CardHeader>
                  <Typography
                    variant="lead"
                    className=" text-teal mb-2 font-normal leading-[1.8] font-tit"
                  >
                    {project.projectDescription}
                  </Typography>
                  <div className="flex flex-row content-center gap-4 text-teal ">
                    <Link
                      to={`${project.projectGitHubLink}`}
                      className="inline-block "
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="w-5 h-5 md:w-6 md:h-6 hover:text-moss hover:bg-teal"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                    </Link>
                    <Link
                      to={`${project.projectLink}`}
                      className="inline-block"
                    >
                      <LaunchSharpIcon className="hover:text-moss hover:bg-teal"></LaunchSharpIcon>
                    </Link>
                  </div>
                </CardBody>
              </div>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectCards;
