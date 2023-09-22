import Header from "./Header";

import { useState, useEffect } from "react";

import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";

const Landing = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <main className="bg-teal">
      <div className="w-[100dvw] h-[100dvh] bg-teal bg-cover grid grid-rows-2 ">
        {/* <Header openNav={openNav} setOpenNav={setOpenNav} /> */}
        <div></div>

        {openNav ? (
          <div className="hidden"></div>
        ) : (
          <div className="flex flex-col justify-between mb-5 mx-5 sm:mb-10 sm:mx-10">
            <div className=" text-moss font-extralight text-8xl sm:text-9xl md:text-[10rem] xl:text-[13rem] font-tit tracking-wide">
              Tom Keyes
            </div>

            <div className="flex flex-row justify-between ">
              <div className="justify-start text-moss font-extralight text-2xl md:text-4xl font-tit tracking-wide">
                Front-end Developer
              </div>
              <a
                href="#aboutPage"
                className="flex items-center justify-end transition-colors text-moss hover:text-teal hover:bg-moss scroll-smooth	"
              >
                <span className="sr-only">Scroll down to About section</span>
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
