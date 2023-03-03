import * as React from "react";
import Typography from "@mui/material/Typography";
import { UM } from "./components/UM";

export default function App() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Um Checklist
      </Typography>
      <UM />
    </>
  );
}
