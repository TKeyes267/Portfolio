import Header from "./Header";
import { Typography } from "@mui/material";
const Landing = () => {
  return (
    <main>
      <Header className="w-full mx-auto px-4 fixed top-0" />
      <Typography className="w-full" variant="h1">
        Welcome to Tom's Portfolio Site
      </Typography>
    </main>
  );
};

export default Landing;
