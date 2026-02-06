import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
        mt: "auto",
        py: 1,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="body2" color="text.secondary">
          © 2026 AICF™. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            aria-label="GitHub"
            href="https://github.com/vikeshmittal/aicf-dev"
            target="_blank"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/vikeshm/"
            target="_blank"
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
