import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const About = () => {
  return (
    <main>
      <div className=" bg-teal grid grid-cols-2 w-screen"></div>
      <main className="w-screen h-screen bg-silver grid grid-cols-2">
        <div className=" flex flex-col h-full justify-center">
          {/* <img
            src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2020/10/GettyImages-1207942316_410263602_683431482_0001.jpg"
            alt="image 1"
            className=" h-full w-full object-cover aspect-square"
          /> */}
          <img
            src="src/assets/images/practiceImage.png"
            alt="image 1"
            className=" h-full w-full object-cover aspect-square"
          />
        </div>
        <div className="bg-moss ">
          <div className="block ml-auto mr-auto px-20 py-20 text-teal">
            <Typography className="text-7xl mb-20 font-tit">About</Typography>
            <div className="">
              <Typography className="text-3xl font-tit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </main>
    // <div className="pt-8 ">
    //   {/* <Header className="w-full mx-auto px-4 fixed top-0" /> */}
    //   <Typography className="w-full text-9xl pl-8 text-silver font-light mb-12">
    //     Tom Keyes
    //   </Typography>
    //   <Typography className="w-full text-3xl pl-8 text-silver font-light">
    //     Front-end Software Developer
    //   </Typography>
    // </div>
  );
};

export default About;
