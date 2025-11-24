import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CopyIcon from '@mui/icons-material/CopyAll';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

export default function AuthorizeUser() {
    const jsonData = `Hi, I’m the Admin — how can I help you today?`;

      // Sample Authorization Token Example
  const sampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ik1pY2hhZWwiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc2MzgyMTY1MiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MjUxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MjUxIn0.5seE9TFftzz4mA2xG1XCVh7zAJCZbxSR7SLom7ww5SU";

  const jsCode = `
fetch("https://snap-test-api-v1.onrender.com/api/admin/authorize", {
  method: "GET",
  headers: {
    "Authorization": "${sampleToken}"
  }
})
.then(res => res.text())
.then(data => console.log(data))
.catch(err => console.error(err));
`;

  const axiosCode = `
const axios = require("axios");

axios.get("https://snap-test-api-v1.onrender.com/api/admin/authorize", {
  headers: {
    Authorization: "${sampleToken}"
  }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
`;

  const phpCode = `
<?php
$ch = curl_init("https://snap-test-api-v1.onrender.com/api/admin/authorize");

curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Authorization: ${sampleToken}"
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
?>
`;

  const curlCode = `
curl -X GET "https://snap-test-api-v1.onrender.com/api/admin/authorize" \\
-H "Authorization: ${sampleToken}"
`;

  const pythonCode = `
import requests

url = "https://snap-test-api-v1.onrender.com/api/admin/authorize"

headers = {
    "Authorization": "${sampleToken}"
}

response = requests.get(url, headers=headers)

print(response.text)
`;
  return (
    <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ width: '100%', alignItems: 'center' }}>
        <Chip label="GET" color="success" variant="outlined" />
        <TextField 
          id="outlined-basic" 
        //   label="Endpoint URL" 
          variant="outlined"
          enabled={false}
            value="https://snap-test-api-v1.onrender.com/api/admin/authorize" 
          fullWidth   // <-- MAKES THE TEXTFIELD 100% WIDTH
        />
        <Button variant="outlined" startIcon={<CopyIcon />}>
            Copy
        </Button>
      </Stack>
      <Stack direction="column" spacing={1} sx={{ width: '100%',}}>
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
                <Paper
                        elevation={1}
                        sx={{
                        width: '100%',
                        height: '300px',
                        p: 2,
                        overflowY: "auto",   // scroll only vertically
                        overflowX: "auto",   // scroll horizontally if needed
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
                <Paper
                        elevation={1}
                        sx={{
                        width: '100%',
                        height: '250px',
                        p: 2,
                        overflowY: "auto",   // scroll only vertically
                        overflowX: "auto",   // scroll horizontally if needed
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
                <Paper
                        elevation={1}
                        sx={{
                        width: '100%',
                        height: '300px',
                        p: 2,
                        overflowY: "auto",   // scroll only vertically
                        overflowX: "auto",   // scroll horizontally if needed
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
                </AccordionDetails>
                <AccordionActions>
                </AccordionActions>
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
                <Paper
                        elevation={1}
                        sx={{
                        width: '100%',
                        height: '200px',
                        p: 2,
                        overflowY: "auto",   // scroll only vertically
                        overflowX: "auto",   // scroll horizontally if needed
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
                </AccordionDetails>
                <AccordionActions>
                </AccordionActions>
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
                <Paper
                        elevation={1}
                        sx={{
                        width: '100%',
                        height: '300px',
                        p: 2,
                        overflowY: "auto",   // scroll only vertically
                        overflowX: "auto",   // scroll horizontally if needed
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
                </AccordionDetails>
                <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </div>    
      </Stack>
      <Stack direction="column" spacing={1} sx={{ width: '100%',}}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Response Samples</Typography>
        <Paper
                elevation={1}
                sx={{
                width: '100%',
                height: '50px',
                p: 2,
                overflowY: "auto",   // scroll only vertically
                overflowX: "auto",   // scroll horizontally if needed
                backgroundColor: "#1e1e1e",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: "14px",
                borderRadius: 2,
                whiteSpace: "pre-wrap",
                }}
            >
            {/* Copy JSON Button */}
          <IconButton
            size="small"
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
            onClick={() => navigator.clipboard.writeText(jsonData)}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>

          {jsonData}
        </Paper>
      </Stack>
    </Stack>
  );
}
