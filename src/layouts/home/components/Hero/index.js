import * as React from "react";
import { FormControl, InputLabel, MenuItem, Select, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IframeBox from "./IframeBox";

export default function Hero() {
  const [searchArea, setSearchArea] = React.useState("designation"); // Default search area

  const handleSearchAreaChange = (event) => {
    setSearchArea(event.target.value);
  };
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(4rem, 12vw, 5rem)",
            }}
          >
            Welcome to &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3.5rem, 10.5vw, 5rem)",
                color: (theme) =>
                  theme.palette.mode === "light" ? "primary.main" : "primary.light",
              }}
            >
              Sitemark
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            fontSize={"clamp(1.5rem, 5vw, 1rem)"}
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Explore detailed information about various companies, such as Facebook, and gain
            insights into their organizational culture, values, and career opportunities. Discover
            the latest salary details for different job titles within each company and make informed
            decisions about your career path.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                fontSize: "clamp(3.5rem, 10.5vw, 5rem)", // Adjust the font size for the entire box
                flexGrow: 2,
                gap: 1,
              }}
            >
              <FormControl variant="outlined" size="large">
                <InputLabel id="search-area-label" style={{ fontSize: "clamp(.5rem, 2vw, 1rem)" }}>
                  Looking for:
                </InputLabel>
                <Select
                  labelId="search-area-label"
                  id="search-area-select"
                  style={{ fontSize: "clamp(1rem, 2vw, 1rem)" }} // Adjust the font size for the select component
                  value={searchArea}
                  onChange={handleSearchAreaChange}
                  label="Search Area"
                >
                  <MenuItem value="designation">Designation</MenuItem>
                  <MenuItem value="company">Company</MenuItem>
                  <MenuItem value="location">Location</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="large"
                variant="outlined"
                aria-label={`Enter your ${searchArea}`}
                placeholder={`Search for jobs by ${searchArea}`}
                inputProps={{
                  autoComplete: "off",
                  "aria-label": `Enter your ${searchArea}`,
                }}
                style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }} // Adjust the font size for the text field
              />
              <Button
                variant="contained"
                color="primary"
                style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)" }}
              >
                Search
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage:
              theme.palette.mode === "light"
                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light" ? alpha("#BFCCD9", 0.5) : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        >
          <IframeBox url={"http://localhost:3000/dashboard/"} width={1300} height={700} />
        </Box>
      </Container>
    </Box>
  );
}
