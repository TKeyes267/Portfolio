import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import SkillCards from "../components/SkillCards";

const Skills = () => {
  return (
    <main className="h-screen block p-20 bg-silver">
      <div className="">
        <Typography className="w-full text-7xl mb-20 text-teal font-tit">
          Skills
        </Typography>

        <SkillCards />
      </div>
    </main>
  );
};

export default Skills;
