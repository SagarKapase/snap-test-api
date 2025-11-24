import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function BlogMain() {
  return (
    <Card variant="outlined" sx={{ overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          Coming Soon: Blogs
        </Typography>
      </Box>
      <Divider />
    </Card>
  );
}
