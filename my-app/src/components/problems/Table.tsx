import * as React from "react";
import {
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ProblemContext } from "./Context";
import { ProblemRow } from "./Problem";

export const ProblemsTable: React.FunctionComponent<{}> = () => {
  const { problemsData } = React.useContext(ProblemContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">CF/Kenkoooo</TableCell>
            <TableCell align="right">Posted</TableCell>
            <TableCell align="right">Video</TableCell>
            <TableCell align="right">Video Posted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(problemsData).map(([uuid, problemData]) => (
            <ProblemRow {...problemData} key={uuid} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
