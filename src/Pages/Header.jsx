import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState, useEffect } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-silver"
      >
        <a
          href="#aboutPage"
          className="flex items-center hover:text-moss transition-colors"
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
          href="#projectPage"
          className="flex items-center hover:text-moss transition-colors"
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
          href="#skillsPage"
          className="flex items-center hover:text-moss transition-colors"
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
          href="#contactPage"
          className="flex items-center hover:text-moss transition-colors"
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
      className="fixed w-full border-none rounded-none max-w-none z-50 text-silver"
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#homePage"
          variant="h6"
          className=" cursor-pointer "
        >
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
            <MenuOpenSharpIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <MenuSharpIcon className="h-6 w-6" strokeWidth={2} />
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
