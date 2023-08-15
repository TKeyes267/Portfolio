import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState, useEffect } from "react";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      style={{ backgroundColor: "black" }}
      className="max-w-screen border-none "
    >
      <div className="flex items-center justify-between">
        <Typography as="a" href="#" variant="h6" className=" cursor-pointer ">
          Tom Keyes - Software Developer
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <ArrowCircleUpIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <ArrowCircleDownIcon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
export default Header;
