import * as React from "react";
import { deepPurple } from "@mui/material/colors";
import { Link, Typography, Box, AppBar } from "@mui/material";

export const Footer: React.FunctionComponent<{}> = () => (
  <>
    <Box>
      <AppBar position="static" sx={{ backgroundColor: deepPurple[200] }}>
        <Link
          href="https://github.com/aryanc403/um-checklist"
          target="_blank"
          rel="noreferrer noopener"
          color="inherit"
        >
          <Typography
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            Github (MIT)
          </Typography>
        </Link>
      </AppBar>
    </Box>
  </>
);

export default Footer;
