import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useState } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";

function NavList() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <div className="grid grid-cols-2 h-fit w-full m-12 self-center">
        <ul className="h-full flex flex-col flex-wrap origin-center gap-16 md:pl-40 ">
          <Typography
            as="li"
            variant="small"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-6xl md:text-8xl content-center font-tit tracking-wide"
          >
            <Link
              href="Portfolio/#aboutPage"
              className="flex items-center transition-colors"
            >
              About
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-6xl md:text-8xl content-centerm font-tit tracking-wide"
          >
            <Link
              href="Portfolio/#projectPage"
              className="flex items-center transition-colors"
            >
              Projects
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-6xl md:text-8xl content-center font-tit tracking-wide"
          >
            <Link
              href="Portfolio/#skillsPage"
              className="flex items-center transition-colors"
            >
              Skills
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="h-fit font-light text-teal transition ease-in-out hover:-translate-x-20 text-6xl md:text-8xl content-center font-tit tracking-wide"
          >
            <Link
              href="Portfolio/#contactPage"
              className="flex items-center transition-colors"
            >
              Contact
            </Link>
          </Typography>
        </ul>
        <ul className="text-forest h-80 pl-40 sm:flex flex-col justify-center self-center ml-12 gap-12 hidden  ">
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit tracking-wide"
          >
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
              className="gap-12 flex flex-row items-center "
            >
              <i className="devicon-linkedin-plain "></i>
              LinkedIn
            </Link>
          </Typography>
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit tracking-wide"
          >
            <Link
              target="_blank"
              href="https://github.com/TKeyes267"
              className="gap-12 flex flex-row items-center "
            >
              <i className="devicon-github-original"></i>
              Github
            </Link>
          </Typography>
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit tracking-wide"
          >
            <Link
              target="_blank"
              href="https://tomkeyes26@gmail.com"
              className="gap-12 flex flex-row items-center"
            >
              <MailOutlineSharpIcon fontSize="medium" />
              tomkeyes26@gmail.com
            </Link>
          </Typography>
          <Typography
            as="li"
            color="white"
            className="gap-12 flex flex-row items-center font-light text-teal text-xl font-tit tracking-wide"
          >
            <LocationCitySharpIcon fontSize="medium" />
            Manchester, UK
          </Typography>
        </ul>
      </div>
    </div>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <main>
      <div className="bg-teal border-none z-50 flex flex-row justify-end lg:hidden">
        {openNav ? (
          <Button
            variant="text"
            className=" bg-moss hover:bg-moss active:bg-moss py-0 px-0 rounded-none transition-all normal-case"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <div className="h-screen w-screen flex flex-row-reverse justify-end ">
              <MenuOpenSharpIcon
                className="m-2.5 md:m-10 w-12 h-12 text-teal bg-moss"
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
            className=" bg-teal py-0 px-0 rounded-none transition-all normal-case h-[7dvh]"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            <MenuSharpIcon
              className="m-2.5 md:m-10 w-12 h-12 text-moss bg-transparent"
              strokeWidth={4}
              viewBox="0 0 24 24"
              fontSize="large"
            />
          </Button>
        )}
      </div>
      <div className="fixed z-50">
        <div className="bg-teal pr-10 h-[5dvh] w-screen lg:flex flex-row justify-end hidden ">
          <ul className=" h-full flex flex-row flex-wrap origin-center items-center gap-16 md:pl-40">
            <Typography
              as="li"
              variant="small"
              className="h-fit font-light text-moss md:text-2xl content-center font-tit tracking-wide hover:underline"
            >
              <Link
                href="/#aboutPage"
                className="flex items-center transition-colors"
              >
                About
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="white"
              className="h-fit font-light text-moss md:text-2xl content-centerm font-tit tracking-wide hover:underline"
            >
              <Link
                href="/#projectPage"
                className="flex items-center transition-colors"
              >
                Projects
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="white"
              className="h-fit font-light text-moss md:text-2xl content-center font-tit tracking-wide hover:underline"
            >
              <Link
                href="/#skillsPage"
                className="flex items-center transition-colors"
              >
                Skills
              </Link>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="white"
              className="h-fit font-light text-moss md:text-2xl content-center font-tit tracking-wide hover:underline"
            >
              <Link
                href="/#contactPage"
                className="flex items-center transition-colors"
              >
                Contact
              </Link>
            </Typography>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default Header;
