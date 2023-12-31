import { Typography } from "@material-tailwind/react";

import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";

const Contact = () => {
  return (
    <main>
      <div className="w-[100dvw] h-[100dvh] grid grid-rows-2 bg-forest">
        <div className="p-5 md:pl-10 md:py-10 flex flex-col justify-center bg-forest">
          <Typography className="w-full text-9xl md:text-[12rem] xl:text-[15rem] text-moss font-tit flex ">
            Get in touch
          </Typography>
        </div>
        <div>
          <div className="bg-moss h-full w-screen p-5 md:px-10 md:py-10 flex flex-row justify-between">
            <ul className=" flex flex-col justify-between  ">
              <Typography
                as="li"
                color="white"
                className=" font-light text-teal text-md md:text-xl font-tit"
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
                  className="gap-10 flex flex-row items-center"
                >
                  <span className="sr-only">LinkedIn</span>
                  <i className="devicon-linkedin-plain "></i>
                  LinkedIn
                </a>
              </Typography>
              <Typography
                as="li"
                color="white"
                className=" font-light text-teal text-md md:text-xl font-tit"
              >
                <a
                  target="_blank"
                  href="https://github.com/TKeyes267"
                  className="gap-10 flex flex-row items-center"
                >
                  <span className="sr-only">GitHub</span>
                  <i className="devicon-github-original"></i>
                  Github
                </a>
              </Typography>
              <Typography
                as="li"
                color="white"
                className=" font-light text-teal text-md md:text-xl font-tit"
              >
                <a
                  target="_blank"
                  href="mailto:tomkeyes26@gmail.com.com"
                  className="gap-10 flex flex-row items-center"
                >
                  <span className="sr-only">Email</span>
                  <MailOutlineSharpIcon fontSize="medium" />
                  tomkeyes26@gmail.com
                </a>
              </Typography>
              <Typography
                as="li"
                color="white"
                className="gap-10 flex flex-row items-center font-light text-teal text-md md:text-xl font-tit"
              >
                <LocalPhoneSharpIcon fontSize="medium" />
                +44 744 922 1752
              </Typography>
              <Typography
                as="li"
                color="white"
                className="gap-10 flex flex-row items-center font-light text-teal text-md md:text-xl font-tit"
              >
                <LocationCitySharpIcon fontSize="medium" />
                Manchester, UK
              </Typography>

              <Typography
                as="li"
                color="white"
                className="gap-10 flex flex-row items-center font-light text-teal text-md md:text-xl font-tit"
              >
                <CopyrightIcon fontSize="medium" />
                Designed and built by Tom Keyes, 2023
              </Typography>
            </ul>
            <div className="flex justify-end">
              <a
                href="#homePage"
                className="flex items-end justify-end transition-colors scroll-smooth	"
              >
                <span className="sr-only">Scroll down to About section</span>
                <div className=" text-teal hover:text-moss hover:bg-teal">
                  <ArrowUpwardSharpIcon fontSize="large" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
