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
    <div className="grid grid-cols-6 gap-y-12 justify-items-center place-content-around text-silver ">
      {skills.map((skill) => {
        return (
          <Card
            key={skill.skillID}
            className=" h-40 w-40 rounded-none flex justify-center items-center bg-black"
          >
            <CardBody className="p-0  rounded-none">
              <i class={skill.skillLogo}></i>
            </CardBody>
            <Typography className="pt-6 text-2xl text-silver">
              {skill.skillName}
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};

export default SkillCards;
