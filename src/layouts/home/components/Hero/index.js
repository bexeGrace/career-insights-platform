import * as React from "react";
import { FormControl, InputLabel, MenuItem, Select, alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

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
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Welcome to &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
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
                flexGrow: 2,
                gap: 1,
              }}
            >
              <FormControl variant="outlined" size="small">
                <InputLabel id="search-area-label">Looking for: </InputLabel>
                <Select
                  labelId="search-area-label"
                  id="search-area-select"
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
              />
              <Button variant="contained" color="primary">
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
        />
      </Container>
    </Box>
  );
}
