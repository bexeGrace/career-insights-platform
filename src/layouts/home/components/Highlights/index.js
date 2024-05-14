import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Software Engineer",
    description:
      " Develop and maintain software applications or systems, collaborating with teams to solve technical challenges and deliver high-quality products.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Product Manager",
    description:
      " Drives the development and strategy of products, working with cross-functional teams to define features, prioritize tasks, and ensure alignment with business goals and user needs.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Data Scientist",
    description:
      "Analyzes large datasets using statistical and machine learning techniques to extract insights, make predictions, and inform data-driven decision-making processes.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Financial Analyst",
    description:
      " Evaluates financial data and trends to provide insights and recommendations for investment decisions, budgeting, forecasting, and strategic planning within organizations",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Marketing Manager",
    description:
      " Leads marketing initiatives, developing strategies to promote products or services, enhance brand awareness, and engage with target audiences through various channels such as digital marketing, advertising, and events",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Operations Manager",
    description:
      " Oversees the day-to-day operations of a business or department, optimizing processes, managing resources, and ensuring efficient workflows to meet organizational objectives and deliver quality products or services.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Discover Your Dream Role
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Delve into the intricacies of different job titles, from Software Engineer to Product
            Manager, and uncover what each role entails. Learn about the responsibilities,
            qualifications, and salary information associated with each designation to find the
            perfect fit for your skills and aspirations.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
