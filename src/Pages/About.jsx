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
      <Typography className="w-full text-8xl mb-20 pt-8" color="white">
        About Tom
      </Typography>
      <div className="w-1/2">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h6" color="white" className="leading-none">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="white"
                className="font-normal text-white"
              >
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h6" color="white" className="leading-none">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="white"
                className="font-normal text-white"
              >
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon color="white" />
              <Typography variant="h6" color="white" className="leading-none">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-white"
              >
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
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
