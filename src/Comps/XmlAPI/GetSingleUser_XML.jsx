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

export default function GetSingleUser_XML() {
  const url = "https://snap-test-api-v1.onrender.com/api/xml/UserXML/101";

  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const jsonData = `
<User xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Id>101</Id>
    <Name>Hiroshi Tanaka</Name>
    <Job>Engineer</Job>
    <City>Tokyo</City>
</User>`;

  // ------------------ REQUEST SAMPLES ------------------
  const jsCode = `
fetch("${url}")
  .then(res => res.text())
  .then(console.log);
`;

  const axiosCode = `
const axios = require("axios");

axios.get("${url}")
  .then(res => console.log(res.data));
`;

  const phpCode = `
<?php
echo file_get_contents("${url}");
?>
`;

  const curlCode = `
curl -X GET "${url}"
`;

  const pythonCode = `
import requests

print(requests.get("${url}").text)
`;
  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        3. Get User (by ID)
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", alignItems: "center" }}
      >
        <Chip label="GET" color="success" variant="outlined" />
        <TextField
          id="outlined-basic"
          //   label="Endpoint URL"
          variant="outlined"
          enabled={false}
          value="https://snap-test-api-v1.onrender.com/api/xml/UserXML/101"
          fullWidth // <-- MAKES THE TEXTFIELD 100% WIDTH
        />
        <Button variant="outlined" startIcon={<CopyIcon />}>
          Copy
        </Button>
      </Stack>
      <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
        {/* Second row: Section label */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Request Samples
        </Typography>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">JavaScript (Browser)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box position="relative" width="100%">
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "150px",
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
                  {jsCode}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(jsCode)}
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
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Node.js (Axios)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box position="relative" width="100%">
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "150px",
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
                  {axiosCode}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(axiosCode)}
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
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">PHP</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box position="relative" width="100%">
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "150px",
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
                  {phpCode}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(phpCode)}
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
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">cURL</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box position="relative" width="100%">
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "100px",
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
                  {curlCode}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(curlCode)}
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
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Python</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box position="relative" width="100%">
                <Paper
                  elevation={1}
                  sx={{
                    width: "100%",
                    height: "150px",
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
                  {pythonCode}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(pythonCode)}
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
