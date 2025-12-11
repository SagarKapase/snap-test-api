import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CopyIcon from "@mui/icons-material/CopyAll";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Paper from "@mui/material/Paper";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function LeftContainer() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} direction={"column"}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextareaAutosize
          aria-label="request body"
          minRows={13}
          placeholder="Request Body"
          style={{
            width: "100%",
            fontSize: "14px",
            padding: "10px",
            // backgroundColor: "#121212",
            color: "#00e676",
            fontFamily: "monospace",
            borderRadius: "8px",
            border: "1px solid #333",
            maxHeight: "250px", // ← Limit height
            overflow: "auto", // ← Enables scrolling
            whiteSpace: "pre-wrap", // ← Keeps formatting
            lineHeight: "1.4",
          }}
        />
      </Stack>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextareaAutosize
          aria-label="response body"
          minRows={13}
          placeholder="Response Body"
          style={{
            width: "100%",
            fontSize: "14px",
            padding: "10px",
            color: "#00e676",
            fontFamily: "monospace",
            borderRadius: "8px",
            border: "1px solid #333",
            maxHeight: "250px", // ← Limit height
            overflowY: "scroll", // ← Enables scrolling
            whiteSpace: "pre-wrap", // ← Keeps formatting
            lineHeight: "1.4",
          }}
        />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="error">
            Reset
          </Button>
          <Button variant="contained" color="success">
            Save & Deploy
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
