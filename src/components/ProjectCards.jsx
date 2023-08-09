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

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  });

  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
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
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
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
      <h2>Tom's Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project.projectID}>
            <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                floated={false}
                shadow={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none h-80"
              >
                <img
                  src="./IMG_7931.JBG"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="blue"
                  className="mb-4 uppercase"
                >
                  startups
                </Typography>
                <Typography variant="h4" color="green" className="mb-2">
                  {project.projectTitle}
                </Typography>

                <Typography color="gray" className="mb-8 font-normal">
                  {project.projectDescription}
                </Typography>
              </CardBody>
              <CardFooter>
                <Link
                  to={`${project.projectGitHubLink}`}
                  className="inline-block"
                >
                  <Button variant="text" className="flex items-center gap-2">
                    See GitHub Repo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </Carousel>
  );
};

export default ProjectCards;
