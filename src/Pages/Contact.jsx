import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";

const Contact = () => {
  return (
    <main className="pt-8">
      <Typography className="w-full text-8xl mb-20 text-silver">
        Contact Me
      </Typography>
      <div className="justify-centre content-center justify-items-center items-center mt-8 gap-12 pb-12">
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
        <Card shadow={false} className="mt-6 w-4/5  p-8 rounded-none bg-silver">
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tom-keyes-5abb3815a/"
            >
              <i class="devicon-linkedin-plain "></i>
            </a>
          </div>

          {/* <Button className="mt-6 rounded-none bg-orange-500" fullWidth>
            Submit
          </Button> */}
        </Card>
        <Card shadow={false} className="mt-6 w-4/5  p-8 rounded-none bg-silver">
          <div className="mt-6" fullWidth>
            <a target="_blank" href="https://github.com/TKeyes267">
              <i class="devicon-github-original"></i>
            </a>
          </div>
        </Card>
        <Card shadow={false} className="mt-6 w-4/5  p-8 rounded-none bg-silver">
          <div>
            <a
              target="_blank"
              href="https://tomkeyes26@gmail.com"
              className="gap-20"
            >
              <MailOutlineSharpIcon> </MailOutlineSharpIcon>
              tomkeyes26@gmail.com
            </a>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
