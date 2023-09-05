import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";

const Contact = () => {
  return (
    <main className="w-screen h-screen  grid grid-cols-2 ">
      <div className="bg-moss pl-20 flex flex-col justify-between py-20">
        <Typography className="w-full text-9xl mb-16 text-teal font-tit">
          Get in <br></br> touch
        </Typography>
        <ul className=" flex flex-col gap-12 ">
          <Typography
            as="li"
            color="white"
            className=" font-light text-teal text-xl font-tit"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
              className="gap-12 flex flex-row items-center"
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
              className="gap-12 flex flex-row items-center"
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
            <LocalPhoneSharpIcon fontSize="medium" />
            +44 744 922 1752
          </Typography>
        </ul>
      </div>
      <div className="bg-silver pr-20 py-20 flex flex-col justify-end">
        <div className=" flex flex-row justify-end">
          <a
            href="#homePage"
            className=" transition-colors text-teal bg-silver hover:text-silver hover:bg-teal scroll-smooth	"
          >
            <ArrowUpwardSharpIcon fontSize="large" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;

//  <main>
//    <div className="w-screen h-screen bg-teal grid grid-rows-2 ">
//      <Header openNav={openNav} setOpenNav={setOpenNav} className="" />

//      <div className="flex flex-col justify-between">
//        <div className="mx-20  text-moss font-extralight text-[15rem] font-tit">
//          Tom Keyes
//        </div>

//        <div className="flex flex-row justify-between mb-20 mx-20">
//          <div className="justify-start text-moss font-extralight text-4xl font-tit">
//            Front-end Developer
//          </div>
//          <a
//            href="#aboutPage"
//            className="flex items-center justify-end transition-colors text-moss bg-teal hover:text-teal hover:bg-moss scroll-smooth	"
//          >
//            <ArrowDownwardSharpIcon fontSize="large" />
//          </a>
//        </div>
//      </div>
//    </div>
//  </main>;
