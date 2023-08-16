import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <main>
      <Typography className="w-full text-7xl">Contact Me</Typography>
      <div className="flex ">
        <Card color="white" shadow={false} className="mt-6 w-2/5 m-auto p-8">
          <Typography variant="h4" color="black" className="flex items-center">
            Get in touch
          </Typography>

          <form className="mb-2 w-auto max-w-screen-lg p-8">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Textarea size="lg" label="Message" />
            </div>
            <Button className="mt-6" fullWidth>
              Submit
            </Button>
          </form>
        </Card>
        <Card color="white" shadow={false} className="mt-6 w-2/5 m-auto p-8">
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
          <Button className="mt-6" fullWidth>
            Submit
          </Button>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
