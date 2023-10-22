import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import SkillCards from "../components/SkillCards";

const Skills = () => {
  return (
    <main className="w-[100dvw] md:h-[100dvh] h-full block bg-silver no-scrollbar">
      <div className="">
        <Typography className="w-full text-6xl md:text-8xl px-5 md:px-10 md:pt-20 py-10 md:pb-20 text-teal font-tit tracking-wide">
          Skills
        </Typography>

        <SkillCards />
      </div>
    </main>
  );
};

export default Skills;
