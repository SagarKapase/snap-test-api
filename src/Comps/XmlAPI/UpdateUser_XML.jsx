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

export default function UpdateUser_XML() {
    const xmlData = `
<User xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Id>101</Id>
    <Name>Tanaka San</Name>
    <Job>Engineer</Job>
    <City>Tokyo</City>
</User>
`;

//reqeust sample json data
const requestXmlData = `
<UserRequest>
    <Name>Tanaka San</Name>
    <Job>Engineer</Job>
    <City>Tokyo</City>
</UserRequest>`;
  return (
    <Stack direction="column" spacing={1} sx={{ width: '100%' }}>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
            4. Update User (by ID)
        </Typography>
      <Stack direction="row" spacing={1} sx={{ width: '100%', alignItems: 'center' }}>
        <Chip
            label="PUT"
            variant="outlined"
            sx={{
                color: "#673ab7",
                borderColor: "#673ab7",
                fontWeight: 600
            }}
        />
        <TextField 
          id="outlined-basic" 
        //   label="Endpoint URL" 
          variant="outlined"
          enabled={false}
            value="https://snap-test-api-v1.onrender.com/api/xml/UserXML/update/101" 
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
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography component="span">Payload</Typography>
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
            {/* Copy JSON Button */}
          {/* <IconButton
            size="small"
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
            onClick={() => navigator.clipboard.writeText(jsonData)}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton> */}
          {requestXmlData}
        </Paper>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
                <AccordionActions>
                <Button>Cancel</Button>
                <Button>Agree</Button>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            {/* Copy JSON Button */}
          <IconButton
            size="small"
            sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
            onClick={() => navigator.clipboard.writeText(xmlData)}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>

          {xmlData}
        </Paper>
      </Stack>
    </Stack>
  );
}
