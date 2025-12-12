import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PricingSection() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      period: "/month",
      features: [
        "Basic API testing",
        "JSON & XML tools",
        "Limited mock API endpoints",
      ],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      title: "Pro",
      price: "$12",
      period: "/month",
      features: [
        "Unlimited mock APIs",
        "AI mock API builder",
        "Authentication features",
        "Unlimited formatting tools",
      ],
      buttonText: "Upgrade Now",
      highlighted: true, // Middle highlighted card
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Team collaboration",
        "Workspaces",
        "SSO integration",
        "Custom rate limits",
      ],
      buttonText: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <Box sx={{ py: 10, px: 4 }}>
      {/* Section Title */}
      <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 6 }}>
        Simple, transparent pricing
      </Typography>

      {/* Pricing Grid */}
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                borderRadius: 3,
                p: 2,
                background: plan.highlighted
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(255,255,255,0.04)",
                backdropFilter: "blur(6px)",
                borderColor: plan.highlighted ? "primary.main" : "divider",
                transform: plan.highlighted ? "scale(1.03)" : "none",
              }}
            >
              <CardContent>
                {/* Plan Title */}
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {plan.title}
                </Typography>

                {/* Price */}
                <Typography variant="h3" fontWeight={800}>
                  {plan.price}
                  <Typography
                    component="span"
                    variant="h6"
                    color="text.secondary"
                  >
                    {plan.period}
                  </Typography>
                </Typography>

                {/* Features */}
                <List sx={{ mt: 2 }}>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              {/* Action Button */}
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  fullWidth
                  variant={plan.highlighted ? "contained" : "outlined"}
                  size="large"
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
