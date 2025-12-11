import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const methods = [
  { value: "GET", label: "GET", color: "#4caf50" },
  { value: "POST", label: "POST", color: "#1976d2" },
  { value: "PUT", label: "PUT", color: "#ff9800" },
  { value: "PATCH", label: "PATCH", color: "#9c27b0" },
  { value: "DELETE", label: "DELETE", color: "#f44336" },
];

export default function RightContainer() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  // find the selected method object
  const selectedMethod = methods.find((c) => c.value === method);
  return (
    <Stack direction="column" spacing={3} sx={{ width: "100%" }}>
      <TextField fullWidth label="API Name" id="api-name" />
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
        <TextField
          fullWidth
          label="/users/{id}"
          id="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </Stack>
      <TextField
        fullWidth
        enabled={false}
        value="https://snap-test-apis.vercel.app/"
        id="mock-api-base-url"
      />
      <TextField fullWidth label="Status Code" id="status-code" />
      <Typography variant="h10">Request Headers</Typography>
      <Stack direction="row" spacing={1}>
        <TextField fullWidth label="Key" id="header-key-1" />
        <TextField fullWidth label="Value" id="header-value-1" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <TextField fullWidth label="Key" id="header-key-1" />
        <TextField fullWidth label="Value" id="header-value-1" />
      </Stack>
    </Stack>
  );
}
