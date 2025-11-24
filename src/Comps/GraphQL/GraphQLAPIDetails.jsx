import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


export default function GraphQLAPIDetails() {
  return (
    <Card variant="outlined" sx={{overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
            Coming Soon: GraphQL Playground with Sample Queries & Mock APIs
          </Typography>
      </Box>
      <Divider />
    </Card>
  );
}
