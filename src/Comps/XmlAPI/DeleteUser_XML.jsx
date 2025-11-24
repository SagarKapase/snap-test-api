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

export default function DeleteUser_XML() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const endpoint =
    "https://snap-test-api-v1.onrender.com/api/xml/UserXML/delete/101";

  const xmlData = `
<string>
    User with ID 101 deleted
</string>`;

  // ========= API CALL SAMPLES ========= //

  const jsBrowser = `
fetch("${endpoint}", {
  method: "DELETE"
})
  .then(res => res.text())
  .then(data => console.log(data));
`;

  const nodeAxios = `
const axios = require("axios");

axios.delete("${endpoint}")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
`;

  const phpCode = `
<?php
$url = "${endpoint}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
`;

  const curlCode = `
curl -X DELETE "${endpoint}"
`;

  const pythonCode = `
import requests

url = "${endpoint}"

response = requests.delete(url)
print(response.text)
`;

  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        5. Delete User (by ID)
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", alignItems: "center" }}
      >
        <Chip
          label="DELETE"
          variant="outlined"
          sx={{
            color: "red",
            borderColor: "red",
            fontWeight: 600,
          }}
        />

        <TextField
          id="outlined-basic"
          //   label="Endpoint URL"
          variant="outlined"
          enabled={false}
          value="https://snap-test-api-v1.onrender.com/api/xml/UserXML/delete/101"
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
                  {jsBrowser}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(jsBrowser)}
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
                  {nodeAxios}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(nodeAxios)}
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
                    height: "300px",
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
                      mr: 2,
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
            {xmlData}
          </Paper>
          {/* Copy icon at top-right */}
          <Tooltip title={copied ? "" : "Copy"}>
            <IconButton
              onClick={() => handleCopy(xmlData)}
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
