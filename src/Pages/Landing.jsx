import Header from "./Header";
import NavList from "../components/NavList";
import { useState, useEffect } from "react";
import { Typography, Collapse, IconButton } from "@mui/material";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";

const Landing = () => {
  const [openNav, setOpenNav] = useState(false);

  // const handleWindowResize = () =>
  //   window.innerWidth >= 960 && setOpenNav(false);

  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  return (
    <main>
      <div className="w-screen h-screen bg-teal grid grid-rows-2 ">
        <Header openNav={openNav} setOpenNav={setOpenNav} className="" />

        {openNav ? (
          <div className="hidden"></div>
        ) : (
          <div className="flex flex-col justify-between">
            <div className="mx-20  text-moss font-extralight text-[12rem] font-tit">
              Tom Keyes
            </div>

            <div className="flex flex-row justify-between mb-20 mx-20">
              <div className="justify-start text-moss font-extralight text-4xl font-tit">
                Front-end Developer
              </div>
              <a
                href="#aboutPage"
                className="flex items-center justify-end transition-colors text-moss bg-teal hover:text-teal hover:bg-moss scroll-smooth	"
              >
                <ArrowDownwardSharpIcon fontSize="large" />
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Landing;
