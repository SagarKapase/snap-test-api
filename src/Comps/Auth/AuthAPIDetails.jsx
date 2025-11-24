import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import GenerateToken from './GenerateToken';
import AuthorizeUser from './AuthorizeUser';


export default function AuthAPIDetails() {
  return (
    <Card variant="outlined" sx={{overflow: "auto" }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Snap-Test.co.in ( V1.0.0 )
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Good for API or automation platforms.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack direction="column" spacing={1}>
          <GenerateToken />
          <Divider sx={{ mt: "40px", mb: "40px" }} />
          <AuthorizeUser />
        </Stack>
      </Box>
    </Card>
  );
}
