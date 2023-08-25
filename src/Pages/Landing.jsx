import Header from "./Header";
import { Typography } from "@mui/material";
const Landing = () => {
  return (
    <div className="pt-8">
      {/* <Header className="w-full mx-auto px-4 fixed top-0" /> */}
      <Typography className="w-full text-8xl pl-8 text-silver font-light">
        Tom Keyes
      </Typography>
      <Typography className="w-full text-xl pl-8 text-silver font-light">
        Front-end Software Developer
      </Typography>
    </div>
  );
};

export default Landing;
