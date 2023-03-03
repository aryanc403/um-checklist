import * as React from "react";
import Typography from "@mui/material/Typography";
import { ProblemsTable } from "./components/ProblemTable";

export default function App() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Um Checklist
      </Typography>
      <ProblemsTable />
    </>
  );
}
