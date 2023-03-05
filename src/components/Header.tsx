import * as React from "react";
import { deepPurple } from "@mui/material/colors";
import { Link, Typography, Box, AppBar } from "@mui/material";

export const Header: React.FunctionComponent<{}> = () => (
  <>
    <Box>
      <AppBar position="static" sx={{ backgroundColor: deepPurple[200] }}>
        <Link
          href="https://um-nik.notion.site/cff90514c6174afcb4ab8ff5dbb5b9a3?v=88948840b1494f18aea5535a6329a914"
          target="_blank"
          rel="noreferrer noopener"
          color="inherit"
        >
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            Um Checklist
          </Typography>
        </Link>
      </AppBar>
    </Box>
  </>
);

export default Header;
