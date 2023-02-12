import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AppLayout from "./pages/AppLayout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e87629",
      contrastText: "#fff",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout />
    </ThemeProvider>
  );
}
