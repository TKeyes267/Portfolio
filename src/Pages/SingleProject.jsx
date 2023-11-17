import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";
import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";

const SingleProject = () => {
  const location = useLocation();
  const data = location.state;
  const id = data.title;

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProjects(projectData);
    setIsLoading(true);
  });

  useEffect(() => {
    if (isLoading === true) {
      setProject(projects[id]);
    }
  });

  return (
    <main>
      <div className="bg-moss h-[full] w-[100dvw] ">
        <div className="bg-moss p-5 md:p-10">
          <Typography
            color="blue"
            className=" text-forest font-normal text-4xl md:text-7xl font-tit"
          >
            {project.projectTitle}
          </Typography>
        </div>

        <div className=" lg:grid lg:grid-cols-2 bg-forest">
          <div className="p-5 md:p-10 lg:p-20">
            <img
              src={project.projectImage2}
              alt="image 2"
              className="object-contain object-center"
            />
          </div>
          <Typography
            color="blue"
            className=" text-silver font-normal text-2xl md:text-3xl font-tit  p-10 md:p-10 lg:p-20 "
          >
            {project.projectDescription}
          </Typography>
        </div>

        <div className="p-2.5 md:p-5 lg:px-20">
          <ul className="p-2.5 md:p-5 flex flex-col">
            <Typography
              color="blue"
              className="bg-silver text-teal font-normal text-lg md:text-xl font-tit p-5 mb-5"
            >
              <b>{project.projectFeatureTitle1}</b> {project.projectFeature1}
            </Typography>

            <Typography
              color="blue"
              className="bg-silver text-teal font-normal text-lg md:text-xl font-tit p-5 mb-5 "
            >
              <b>{project.projectFeatureTitle2}</b> {project.projectFeature2}
            </Typography>
            <Typography
              color="blue"
              className="bg-silver text-teal font-normal text-lg md:text-xl font-tit p-5 mb-5 "
            >
              <b>{project.projectFeatureTitle3}</b> {project.projectFeature3}
            </Typography>
            <Typography
              color="blue"
              className="bg-silver text-teal font-normal text-lg md:text-xl font-tit p-5 mb-5 "
            >
              <b>{project.projectFeatureTitle4}</b> {project.projectFeature4}
            </Typography>
            <Typography
              color="blue"
              className="bg-silver text-teal font-normal text-lg md:text-xl font-tit p-5 mb-5 "
            >
              <b> Tech Stack:</b> {project.projectStack}
            </Typography>
          </ul>
        </div>
        <div className="bg-forest text-moss flex flex-row justify-between items-center p-5">
          <div className="flex flex-row items-center gap-5">
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
              aria-label="Link to hosted hosted project"
            >
              <LaunchSharpIcon className="hover:text-moss hover:bg-forest"></LaunchSharpIcon>
            </Link>
          </div>

          <Link to={`/#projectPage`} aria-label="Link back to main page">
            <Typography className="bg-forest text-moss hover:text-teal hover:bg-moss p-2 text-xl md:text-xl">
              Back
            </Typography>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
