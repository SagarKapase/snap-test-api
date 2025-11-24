import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import RequestArea from "./RequestArea";

const methods = [
  { value: "GET", label: "GET", color: "#4caf50" },
  { value: "POST", label: "POST", color: "#1976d2" },
  { value: "PUT", label: "PUT", color: "#ff9800" },
  { value: "PATCH", label: "PATCH", color: "#9c27b0" },
  { value: "DELETE", label: "DELETE", color: "#f44336" },
];

export default function MainArea() {
  const [method, setMethod] = useState("GET");

  // find the selected method object
  const selectedMethod = methods.find((c) => c.value === method);

  return (
    <Card variant="outlined" sx={{ overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Snap-Test Playground</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Where APIs come to play (and sometimes misbehave).
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <TextField
              select
              label="HTTP Method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              sx={{
                width: "200px",
                "& .MuiSelect-select": {
                  color: selectedMethod?.color, // <-- apply color to selected text
                  fontWeight: 600,
                },
              }}
            >
              {methods.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{ color: option.color, fontWeight: 600 }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField fullWidth label="Enter your endpoint url..." id="url" />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
          <RequestArea />
        </Stack>
      </Box>
    </Card>
  );
}
