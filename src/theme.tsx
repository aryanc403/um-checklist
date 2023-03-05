import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#006400",
    },
    secondary: {
      main: "#ffa500",
    },
    action: {
      active: lightBlue[200],
      activatedOpacity: 1,
      hover: lightBlue[100],
      hoverOpacity: 0.7,
      focus: lightBlue[600],
      focusOpacity: 1,
      selected: lightBlue[300],
      selectedOpacity: 1,
    },
  },
});

export const AppThemeProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default AppThemeProvider;
