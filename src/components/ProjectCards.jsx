import { useEffect, useState } from "react";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";

import { Typography, Card } from "@material-tailwind/react";

import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProjects(projectData);
  });

  return (
    <div className=" flex flex-col flex-wrap lg:h-full no-scrollbar pb-10 justify-center">
      {projects.map((project) => {
        const title = project.projectID;

        return (
          <Card
            key={project.projectID}
            className="w-fit lg:h-fit lg:w-fit text-moss bg-forest shadow-none rounded-none m-5 lg:mx-20 lg:my-10 "
          >
            <div className="px-5 lg:px-20 flex flex-row ">
              {project.projectID % 2 == 0 ? (
                <div className="flex flex-col-reverse lg:flex-row">
                  <div>
                    <div className="">
                      <Link
                        to={`/${project.projectURL}`}
                        state={{ title }}
                        aria-label="Link to project page"
                        className=" "
                      ></Link>
                      <Typography
                        color="blue"
                        className="lg:w-3/5 text-moss font-normal text-2xl md:text-4xl lg:text-8xl font-tit lg:my-20 my-5"
                      >
                        {project.projectTitle}
                      </Typography>
                      <Typography
                        variant="lead"
                        className="text-silver font-normal text-lg md:text-2xl leading-[1.8] font-tit lg:mr-20 mb-5"
                      >
                        {project.projectSummary}
                      </Typography>
                    </div>
                    <div className="flex flex-row justify-between bg-forest my-5 lg:items-end">
                      <div className="flex flex-row items-center gap-5 ">
                        <Link
                          to={`${project.projectGitHubLink}`}
                          aria-label="Link to project github page"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="w-5 h-5 md:w-6 md:h-6 hover:text-moss hover:bg-forest"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                          </svg>
                        </Link>
                        <Link
                          to={`${project.projectLink}`}
                          aria-label="Link to hosted project page"
                        >
                          <LaunchSharpIcon className="hover:text-moss hover:bg-forest"></LaunchSharpIcon>
                        </Link>
                      </div>
                      <Link
                        to={`/${project.projectURL}`}
                        state={{ title }}
                        aria-label="Link to project page"
                      >
                        <Typography className="bg-forest border-[1px] border-moss text-moss hover:text-teal hover:bg-moss text-md md:text-lg w-fit p-1 font-tit lg:mx-20">
                          Read more about this project
                        </Typography>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={project.projectImage}
                    alt="image 1"
                    className=" object-cover lg:w-2/4 relative"
                  />
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row h-fill">
                  <img
                    src={project.projectImage}
                    alt="image 1"
                    className=" object-cover lg:w-2/4 relative"
                  />
                  <div>
                    <div className="flex flex-col lg:items-end lg:text-right lg:ml-20">
                      <Link
                        to={`/${project.projectURL}`}
                        state={{ title }}
                        aria-label="Link to project page"
                        className=" "
                      >
                        <Typography
                          color="blue"
                          className=" text-moss font-normal text-2xl md:text-4xl lg:text-8xl font-tit my-5 lg:my-20 lg:mx-4"
                        >
                          {project.projectTitle}
                        </Typography>
                      </Link>
                      <Typography
                        variant="lead"
                        className="text-silver font-normal text-lg md:text-2xl leading-[1.8] font-tit mb-5 "
                      >
                        {project.projectSummary}
                      </Typography>
                    </div>
                    <div className="flex flex-row-reverse lg:flex-row justify-between bg-forest my-5">
                      <Link
                        to={`/${project.projectURL}`}
                        state={{ title }}
                        aria-label="Link to project page"
                      >
                        <Typography className="bg-forest border-[1px] border-moss text-moss hover:text-teal hover:bg-moss text-md md:text-lg w-fit p-1 font-tit lg:mx-20">
                          Read more about this project
                        </Typography>
                      </Link>
                      <div className="flex flex-row items-center gap-5 ">
                        <Link
                          to={`${project.projectGitHubLink}`}
                          aria-label="Link to project github page"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="w-5 h-5 md:w-6 md:h-6 hover:text-moss hover:bg-forest"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                          </svg>
                        </Link>
                        <Link
                          to={`${project.projectLink}`}
                          aria-label="Link to hosted project page"
                        >
                          <LaunchSharpIcon className="hover:text-moss hover:bg-forest"></LaunchSharpIcon>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectCards;
