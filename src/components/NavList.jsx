import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState, useEffect } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";

const NavList = () => {
  return (
    <div className="w-screen h-screen flex ">
      <ul className=" pl-20 flex flex-col gap-10 ">
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
      <ul className=" flex flex-col gap-2 ">
        <li>
          <div className="mt-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
              className="gap-20 flex flex-row"
            >
              <i class="devicon-linkedin-plain "></i>
              LinkedIn
            </a>
          </div>
        </li>
        <li>
          <div className="mt-6">
            <a
              target="_blank"
              href="https://github.com/TKeyes267"
              className="gap-20 flex flex-row"
            >
              <i class="devicon-github-original"></i>
              Github
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              target="_blank"
              href="https://tomkeyes26@gmail.com"
              className="gap-20 flex flex-row"
            >
              <MailOutlineSharpIcon> </MailOutlineSharpIcon>
              tomkeyes26@gmail.com
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
