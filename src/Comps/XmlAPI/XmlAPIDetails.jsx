import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import GetAllUsers from "./GetAllUsers";
import GetSingleUser_XML from "./GetSingleUser_XML";
import AddUser_XML from "./AddUser_XML";
import UpdateUser_XML from "./UpdateUser_XML";
import DeleteUser_XML from "./DeleteUser_XML";

export default function XmlAPIDetails() {
  return (
    <Card variant="outlined" sx={{ overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Snap-Test.in ( V1.0.0 )
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Good for API or automation platforms.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={1}>
          <GetAllUsers />
          <Divider sx={{ mt: "40px", mb: "40px" }} />
          <AddUser_XML />
          <Divider sx={{ mt: "40px", mb: "40px" }} />
          <GetSingleUser_XML />
          <Divider sx={{ mt: "40px", mb: "40px" }} />
          <UpdateUser_XML />
          <Divider sx={{ mt: "40px", mb: "40px" }} />
          <DeleteUser_XML />
        </Stack>
      </Box>
    </Card>
  );
}
