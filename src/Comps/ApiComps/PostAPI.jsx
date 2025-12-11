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

export default function PostAPI() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const endpointURL = "https://snap-test-api-v1.onrender.com/api/user/addUser";

  const jsonData = `
  {
    "message": "User created successfully",
    "data": {
        "userId": "d444506e-4020-43f1-b76b-727f02d516e7",
        "name": "Tony Thompson",
        "email": "tony.thompson@company.com",
        "job": "Senior Software Engineer",
        "city": "New York"
    }
  }`;

  //reqeust sample json data
  const requestJsonData = `
  {
    "name": "Tony Thompson",
    "email": "tony.thompson@company.com",
    "job": "Senior Software Engineer",
    "city": "New York"
  }`;

  // -------------------- REQUEST SAMPLE CODE BLOCKS --------------------

  // JavaScript Browser Fetch
  const jsBrowserFetch = `
fetch("${endpointURL}", {
  method: "POST",
  headers: { 
    "Content-Type": "application/json" 
  },
  body: JSON.stringify({
    name: "Tony Thompson",
    email: "tony.thompson@company.com",
    job: "Senior Software Engineer",
    city: "New York"
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
`;

  // Node.js (Axios)
  const nodeAxios = `
import axios from "axios";

axios.post("${endpointURL}", {
  name: "Tony Thompson",
  email: "tony.thompson@company.com",
  job: "Senior Software Engineer",
  city: "New York"
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
`;

  // PHP cURL
  const phpSample = `
<?php
$data = [
  "name" => "Tony Thompson",
  "email" => "tony.thompson@company.com",
  "job" => "Senior Software Engineer",
  "city" => "New York"
];

$ch = curl_init("${endpointURL}");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
`;

  // Raw cURL Command
  const curlCommand = `
curl -X POST "${endpointURL}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Tony Thompson",
    "email": "tony.thompson@company.com",
    "job": "Senior Software Engineer",
    "city": "New York"
  }'
`;

  // Python Requests
  const pythonSample = `
import requests

url = "${endpointURL}"

payload = {
  "name": "Tony Thompson",
  "email": "tony.thompson@company.com",
  "job": "Senior Software Engineer",
  "city": "New York"
}

response = requests.post(url, json=payload)
print(response.json())
`;

  const keyValue = `
Content-Type : application/json
Accept : application/json`;
  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        2. Create New User
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", alignItems: "center" }}
      >
        <Chip label="POST" color="primary" variant="outlined" />
        <TextField
          id="outlined-basic"
          //   label="Endpoint URL"
          variant="outlined"
          enabled={false}
          value="https://snap-test-api-v1.onrender.com/api/user/addUser"
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
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Payload</Typography>
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
                  {requestJsonData}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(requestJsonData)}
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
                  {jsBrowserFetch}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(jsBrowserFetch)}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                      p: 1.2, // <-- padding added here
                      mr: 2, // <--- margin around icon button
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
                  {phpSample}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(phpSample)}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                      p: 1.2, // <-- padding added here
                      mr: 2, // <--- margin around icon button
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
            <AccordionActions></AccordionActions>
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
                    height: "250px",
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
                  {curlCommand}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(curlCommand)}
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
            <AccordionActions></AccordionActions>
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
                  {pythonSample}
                </Paper>
                {/* Copy icon at top-right */}
                <Tooltip title={copied ? "" : "Copy"}>
                  <IconButton
                    onClick={() => handleCopy(pythonSample)}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                      p: 1.2, // <-- padding added here
                      mr: 2, // <--- margin around icon button
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
            <AccordionActions></AccordionActions>
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
                mr: 2, // <--- margin around icon button
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
