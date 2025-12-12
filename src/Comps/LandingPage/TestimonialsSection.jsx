import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Snap-Test cut our API prototyping time by 80%. It’s a must-have for frontend engineers.",
      author: "Frontend Team Lead",
    },
    {
      quote:
        "The AI mock builder is unbelievable — type a sentence, get a full API.",
      author: "Software Engineer",
    },
  ];

  return (
    <Box sx={{ py: 10, px: 4 }}>
      {/* Section Title */}
      <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 6 }}>
        What developers are saying
      </Typography>

      {/* Testimonials Grid */}
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((item, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                height: "100%",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(6px)",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  “{item.quote}”
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  — {item.author}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
