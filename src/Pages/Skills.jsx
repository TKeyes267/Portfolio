import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import SkillCards from "../components/SkillCards";

const Skills = () => {
  return (
    <div className="pt-8">
      <Typography className="w-full text-8xl mb-12 text-silver">
        My Skills
      </Typography>
      <Typography className="w-full text-xl mb-12 text-silver">
        "Delcatty sleeps anywhere it wants without keeping a permanent nest. If
        other Pokémon approach it as it sleeps, this Pokémon will never fight—it
        will just move away somewhere else.Kyogre is said to be the
        personification of the sea itself. Legends tell of its many clashes
        against Groudon, as each sought to gain the power of nature.Its a
        stuffed toy that was thrown away and became possessed, ever searching
        for the one who threw it away so it can exact its revenge. Entei
        embodies the passion of magma.
      </Typography>
      <SkillCards />
    </div>
  );
};

export default Skills;
