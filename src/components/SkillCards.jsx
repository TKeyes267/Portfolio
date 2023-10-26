import { Typography, Card, CardBody } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { skillData } from "../data/skillData";

const SkillCards = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillData);
  });

  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 md:gap-15 justify-items-center place-content-around  bg-silver text-teal pb-10 lg:pb-0 ">
      {skills.map((skill) => {
        return (
          <Card
            key={skill.skillID}
            className="w-30 rounded-none shadow-none flex justify-center items-center bg-silver"
          >
            <CardBody className="p-0 rounded-none">
              <i className={skill.skillLogo}></i>
            </CardBody>
            <Typography className="py-4 md:py-8 text-md md:text-2xl text-forest font-tit">
              {skill.skillName}
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};

export default SkillCards;
