import { AppBar, Toolbar, Box, Button, useTheme } from "@mui/material";
import { ThemeSwitcher } from "./theme-switcher";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

export function Header() {
  const theme = useTheme();
  const logo = theme.palette.mode === "dark" ? logoDark : logoLight;

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{ border: 0 }}
    >
      <Toolbar sx={{ gap: 0 }} disableGutters={true}>
        <Box
          component="img"
          src={logo}
          alt="AICF Logo"
          sx={{
            height: 32,
            width: "auto",
            cursor: "pointer",
          }}
        />

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 2, ml: 4 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Docs</Button>
          <Button color="inherit">Demo</Button>
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  );
}
