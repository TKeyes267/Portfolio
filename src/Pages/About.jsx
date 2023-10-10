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
    <main className="w-[100dvw] md:h-[100dvh] no-scrollbar h-full bg-moss">
      <div className="md:grid grid-cols-2">
        <div className="bg-moss ">
          <div className="block ml-auto mr-auto text-teal">
            <Typography className="text-6xl md:text-8xl font-tit px-5 md:px-10 pt-5 md:pt-20 pb-10 md:pb-20 tracking-wide">
              About
            </Typography>
            <div className="px-5 md:px-10 ">
              <Typography className="text-xl md:text-2xl font-tit pb-10 md:pb-10 leading-loose">
                I'm a creative problem solver with a passion for green and
                sustainable solutions. As a designer and developer, I believe
                that technology should help us to make more informed decisions
                and let us communicate across boundaries. With an insatiable
                thirst for learning new skills, I thrive on tackling new
                challenges.
              </Typography>

              <Typography className="text-xl md:text-2xl font-tit pb-10 md:pb-10 leading-loose">
                I'm committed to using my skills to communicate pressing
                environmental issues and leveraging technology for good. When
                I'm not immersed in the world of web development, you'll find me
                nurturing house plants, tending to my shrimp tank, or exploring
                the endless possibilities of music technology. I'm excited to
                connect with like-minded professionals who share my passion for
                technology, creativity, and making a difference.
              </Typography>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center">
          <img
            src="src/assets/images/portfolioDuotoneGreen2.png"
            alt="image 1"
            className=" h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
