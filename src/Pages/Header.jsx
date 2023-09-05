import { Navbar, Collapse, Typography, Button } from "@material-tailwind/react";

import { useState, useEffect } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";

function NavList() {
  return (
    <div className="h-screen w-screen flex">
      <div className="grid grid-cols-2 h-fit w-full m-12 self-center">
        <ul className=" h-full flex flex-col flex-wrap origin-center gap-16 pl-40 ">
          <Typography
            as="li"
            variant="small"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-8xl content-center font-tit"
          >
            <a
              href="#aboutPage"
              className="flex items-center transition-colors"
            >
              About
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-8xl content-center font-tit"
          >
            <a
              href="#skillsPage"
              className="flex items-center transition-colors"
            >
              Skills
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-8xl content-centerm font-tit"
          >
            <a
              href="#projectPage"
              className="flex items-center transition-colors"
            >
              Projects
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-8xl content-center font-tit"
          >
            <a
              href="#contactPage"
              className="flex items-center transition-colors"
            >
              Contact
            </a>
          </Typography>
        </ul>
        <ul className="text-forest h-80 pl-40 flex flex-col justify-center self-center ml-12 gap-12 ">
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
              className="gap-12 flex flex-row items-center "
            >
              <i class="devicon-linkedin-plain "></i>
              LinkedIn
            </a>
          </Typography>
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit"
          >
            <a
              target="_blank"
              href="https://github.com/TKeyes267"
              className="gap-12 flex flex-row items-center "
            >
              <i class="devicon-github-original"></i>
              Github
            </a>
          </Typography>
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit"
          >
            <a
              target="_blank"
              href="https://tomkeyes26@gmail.com"
              className="gap-12 flex flex-row items-center"
            >
              <MailOutlineSharpIcon fontSize="medium" />
              tomkeyes26@gmail.com
            </a>
          </Typography>
          <Typography
            as="li"
            color="white"
            className="gap-12 flex flex-row items-center font-light text-teal text-xl font-tit"
          >
            <LocationCitySharpIcon fontSize="medium" />
            Manchester, UK
          </Typography>
        </ul>
      </div>
    </div>
  );
}

const Header = ({ openNav, setOpenNav }) => {
  // const [openNav, setOpenNav] = useState(false);

  // const handleWindowResize = () =>
  //   window.innerWidth >= 960 && setOpenNav(false);

  //   useEffect(() => {
  //     window.addEventListener("resize", handleWindowResize);

  //     return () => {
  //       window.removeEventListener("resize", handleWindowResize);
  //     };
  //   }, []);

  return (
    <main>
      <div className=" bg-inherit border-none z-50  flex flex-row justify-end	">
        {/* <Button
          variant="text"
          className=" bg-moss hover:bg-moss active:bg-moss py-0 px-0 rounded-none transition-all normal-case"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          uppercase={false}
        > */}
        {openNav ? (
          <Button
            variant="text"
            className=" bg-moss hover:bg-moss active:bg-moss py-0 px-0 rounded-none transition-all normal-case"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            uppercase={false}
          >
            <div className="h-screen w-screen flex flex-row-reverse justify-end ">
              <MenuOpenSharpIcon
                className="m-20 w-12 h-12 text-teal bg-moss"
                strokeWidth={4}
                viewBox="0 0 24 24"
                fontSize="large"
              />
              <NavList />
            </div>
          </Button>
        ) : (
          <Button
            variant="text"
            className=" bg-teal hover:bg-teal active:bg-teal py-0 px-0 rounded-none transition-all normal-case"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            uppercase={false}
          >
            <MenuSharpIcon
              className="m-20 w-12 h-12 text-moss bg-teal"
              strokeWidth={4}
              viewBox="0 0 24 24"
              fontSize="large"
            />
          </Button>
        )}

        {/* 
        // <Collapse open={openNav} className="bg-moss">
        //   <NavList />
        // </Collapse> */}
      </div>
    </main>
  );
};
export default Header;
