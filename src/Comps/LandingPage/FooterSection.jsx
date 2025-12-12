import { Box, Grid, Typography, Link, Stack } from "@mui/material";

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 4,
        mt: 8,
        borderTop: "1px solid",
        borderColor: "divider",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo + Tagline */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight={700}>
            Snap-Test
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 260 }}
          >
            Build APIs, mocks, test data, and tools — all in one modern
            platform.
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
            Company
          </Typography>

          <Stack spacing={1}>
            <Link href="#" underline="hover" color="text.secondary">
              About
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Docs
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Support
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Terms & Privacy
            </Link>
          </Stack>
        </Grid>

        {/* Copyright */}
        <Grid item xs={12} md={12} sx={{ mt: 4 }}>
          <Typography variant="body2" align="center" color="text.secondary">
            © {new Date().getFullYear()} Snap-Test. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
