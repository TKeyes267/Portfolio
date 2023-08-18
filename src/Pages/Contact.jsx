import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <main>
      <Typography className="w-full text-8xl mb-24" color="white">
        Contact Me
      </Typography>
      <div className=" justify-centre content-center justify-items-center items-center mt-8">
        {/* <Card
          color="transparent"
          shadow={false}
          className="mt-6 w-4/5 m-auto p-8 mb-8"
        >
          <Typography variant="h4" color="white" className="flex items-center">
            Get in touch
          </Typography>

          <form className="mb-2 w-auto p-8" color="white">
            <div className="mb-4 flex flex-col gap-6 white">
              <Input
                color="white"
                size="lg"
                label="Name"
                className="text-white "
              />
              <Input
                color="white"
                size="lg"
                label="Email"
                className="text-white"
              />
              <Input
                color="white"
                size="lg"
                label="Message"
                className="text-white"
              />
            </div>
            <Button className="mt-6" fullWidth color="white">
              Submit
            </Button>
          </form>
        </Card> */}
        <Card color="white" shadow={false} className="mt-6 w-4/5 m-auto p-8">
          <div className="mt-6" fullWidth>
            <a target="_blank" href="https://github.com/TKeyes267">
              Github
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
            >
              <LinkedInIcon color="black"></LinkedInIcon>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://tomkeyes26@gmail.com">
              tomkeyes26@gmail.com
            </a>
          </div>

          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
