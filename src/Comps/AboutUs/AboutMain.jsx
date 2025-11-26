import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function AboutMain() {
  return (
    <Card variant="outlined" sx={{ overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          About Us – Snap-Test.in
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={1}>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Welcome to Snap-Test.in, a powerful and developer-friendly platform
            dedicated to providing fast, flexible, and fully customizable dummy
            APIs for testing, development, and automation. Whether you're
            building a mobile app, testing workflows, or prototyping a new
            feature, Snap-Test.in simplifies your backend simulation so you can
            focus on creating great user experiences.
          </Typography>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            Who We Are?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            We are a team of passionate developers and problem-solvers who
            understand the challenges of backend dependencies during
            development. Snap-Test.in was built to eliminate delays, simplify
            testing, and make API simulation effortless. Our goal is to empower
            developers, QA engineers, students, and rapid prototyping teams with
            an easy-to-use tool that provides real, usable endpoints without
            needing a real backend.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            We believe in speed, flexibility, and reliability — and everything
            we create is designed with developers in mind.
          </Typography>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            What We Offer?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            1. Dummy REST APIs that are quick, stable, and customizable <br />
            2. Support for JSON, XML, and file attachments <br />
            3. GraphQL mock APIs for modern frontend and full-stack projects
            <br />
            4. Auth Token generation for simulating authentication flows <br />
            5. Custom response codes, custom payloads, delays, and headers{" "}
            <br />
            6. A clean dashboard to create, manage, and test your mock endpoints{" "}
            <br />
            7. Zero setup — just generate, call, and integrate <br />
            <br />
          </Typography>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Our mission is to remove the complexity from testing and development
            by offering an on-demand backend simulation platform. We want
            developers to work smarter, prototype faster, and test without
            limitations.
          </Typography>

          <Typography variant="h5" sx={{ color: "text.primary" }}>
            Why Snap-Test.in?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            1. Built for developers, testers, and automation teams <br />
            2. Supports every major data format and request type <br />
            3. Scalable and always available mock endpoints
            <br />
            4. Designed for speed, simplicity, and reliability <br />
            5. No servers or configuration needed — everything works instantly{" "}
            <br />
            At Snap-Test.in, we make testing effortless by providing the most
            complete and flexible dummy API ecosystem for modern development.
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
