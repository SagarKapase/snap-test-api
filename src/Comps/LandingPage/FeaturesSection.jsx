import { Box, Grid, Typography, Card, CardContent, Stack } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DataObjectIcon from "@mui/icons-material/DataObject";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SchemaIcon from "@mui/icons-material/Schema";
import SecurityIcon from "@mui/icons-material/Security";

const features = [
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
    title: "AI Mock API Builder",
    desc: "Create mock APIs instantly using natural language prompts.",
  },
  {
    icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
    title: "JSON & XML Tools",
    desc: "Format, validate, and convert JSON or XML with lightning speed.",
  },
  {
    icon: <UploadFileIcon sx={{ fontSize: 40 }} />,
    title: "File Upload Tester",
    desc: "Simulate file upload endpoints and inspect responses easily.",
  },
  {
    icon: <SchemaIcon sx={{ fontSize: 40 }} />,
    title: "GraphQL Playground",
    desc: "Explore and test GraphQL queries in an interactive UI.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 40 }} />,
    title: "API Playground",
    desc: "Test REST APIs with headers, params, and authentication.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Authentication",
    desc: "Protect your APIs with secure login, tokens, and API keys.",
  },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ py: 10, px: 4, background: "rgba(255,255,255,0.02)" }}>
      {/* Section Title */}
      <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 4 }}>
        Everything you need to build & test APIs
      </Typography>

      {/* Features Grid */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                p: 2,
                borderRadius: 3,
                backdropFilter: "blur(6px)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Box color="primary.main">{item.icon}</Box>

                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
