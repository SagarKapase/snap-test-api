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
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useState } from "react";
import UploadFileRequestData from "./UploadFileRequestData";

export default function UploadFileAPI() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const endpoint = "https://snap-test-api-v1.onrender.com/api/formdata/upload";
  const jsonData = `
  {
    "message": "File uploaded",
    "id": 4,
    "fileName": "Sagar Kapase.docx",
    "description": "String"
}`;

  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        1. Upload File API
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", alignItems: "center" }}
      >
        <Box position="relative" width="100%">
          <Paper
            elevation={1}
            sx={{
              width: "100%",
              height: "65px",
              p: 2,
              overflowY: "auto",
              overflowX: "auto",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              fontFamily: "monospace",
              fontSize: "14px",
              borderRadius: 2,
              whiteSpace: "pre-wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div>
                <Chip label="POST" color="primary" variant="outlined" />
              </div>
              <div>{endpoint}</div>
            </div>
            {/* Copy button */}
            <Tooltip title={copied ? "" : "Copy"}>
              <IconButton
                onClick={() => handleCopy(endpoint)}
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,

                  right: 4,
                  color: "#fff",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                  p: 1.2,
                  borderRadius: "8px",
                }}
              >
                {copied ? (
                  <Typography fontSize="12px">Copied!</Typography>
                ) : (
                  <ContentCopyIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </Paper>
        </Box>
      </Stack>
      <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
        {/* Second row: Section label */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Request Samples
        </Typography>
        <div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                Form-Data Sample ( Note : You can attach any type of file )
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box position="relative" width="100%">
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "200px",
                    p: 2,
                    overflowY: "auto", // scroll only vertically
                    overflowX: "auto", // scroll horizontally if needed
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    borderRadius: 2,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <UploadFileRequestData />
                </Paper>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </Stack>
      <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Response Samples
        </Typography>
        <Box position="relative" width="100%">
          <Paper
            elevation={1}
            sx={{
              width: "100%",
              height: "200px",
              p: 2,
              overflowY: "auto", // scroll only vertically
              overflowX: "auto", // scroll horizontally if needed
              backgroundColor: "#1e1e1e",
              color: "#fff",
              fontFamily: "monospace",
              fontSize: "14px",
              borderRadius: 2,
              whiteSpace: "pre-wrap",
            }}
          >
            {jsonData}
          </Paper>
          {/* Copy icon at top-right */}
          <Tooltip title={copied ? "" : "Copy"}>
            <IconButton
              onClick={() => handleCopy(jsonData)}
              size="small"
              sx={{
                position: "absolute",
                top: 4,
                right: 4,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.3)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                p: 1.2, // <-- padding added here
                borderRadius: "8px", // optional: nicer rounded shape
              }}
            >
              {copied ? (
                <Typography fontSize="12px">Copied!</Typography>
              ) : (
                <ContentCopyIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </Stack>
  );
}
