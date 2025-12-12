import {
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function WhySnapTestSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: 4,
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* Section Title */}
      <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 4 }}>
        Why developers choose Snap-Test
      </Typography>

      {/* Bullet Points */}
      <Stack
        spacing={2}
        sx={{
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Built for speed — zero setup required" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="AI assistance for faster mock generation" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Clean UI designed for productivity" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Perfect for testing, prototyping, and demos" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Free to start — upgrade as you scale" />
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}
