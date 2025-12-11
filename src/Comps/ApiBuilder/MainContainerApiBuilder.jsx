import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import MenuItem from "@mui/material/MenuItem";
export default function MainContainerApiBuilder() {
  return (
    <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
      {/* <TextField select label="Project" fullWidth></TextField> */}
      <TextField select label="Project" fullWidth>
        <MenuItem value="create_new">+ Create new Project</MenuItem>
      </TextField>

      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
        <RightContainer />
        <LeftContainer />
      </Stack>
    </Stack>
  );
}
