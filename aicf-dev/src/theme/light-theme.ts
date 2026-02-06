import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7f9fc",
      paper: "#ffffff",
    },
    primary: {
      main: "#2fae8a", // darker variant of accent
    },
    secondary: {
      main: "#5f6368",
    },
    text: {
      primary: "#1f2937",
      secondary: "#5f6368",
    },
    divider: "rgba(0,0,0,0.08)",
  },

  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0,0,0,0.05)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});
