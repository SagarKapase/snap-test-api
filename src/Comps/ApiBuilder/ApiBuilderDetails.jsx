import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function ApiBuilderDetails() {
  return (
    <Card variant="outlined" sx={{ overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Snap-Test Mock API Builder ( V1.0.0 )
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{ color: "red", mt: 1, fontWeight: "bold" }}
        >
          Note : “We’re still building a few features. The site is under
          development — sorry for the inconvenience and thanks for sticking with
          us!”
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={1}></Stack>
      </Box>
    </Card>
  );
}
