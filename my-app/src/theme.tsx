import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, deepPurple } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#006400",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

export const AppThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default AppThemeProvider;
