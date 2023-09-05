import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { skillData } from "../data/skillData";

const SkillCards = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillData);
  });

  return (
    <div className="grid grid-cols-6 gap-16 justify-items-center place-content-around text-teal ">
      {skills.map((skill) => {
        return (
          <Card
            key={skill.skillID}
            className="w-30 rounded-none shadow-none  flex justify-center items-center bg-silver"
          >
            <CardBody className="p-0  rounded-none">
              <i class={skill.skillLogo}></i>
            </CardBody>
            <Typography className="pt-8 text-2xl text-forest font-tit">
              {skill.skillName}
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};

export default SkillCards;
