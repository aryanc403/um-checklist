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
import { cyan } from "@mui/material/colors";

export const ProblemsTable: React.FunctionComponent<{}> = () => {
  const { problemsData } = React.useContext(ProblemContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: cyan.A400 }}>
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
          {Object.entries(problemsData)
            .sort(([, { episode: x }], [, { episode: y }]) => y - x)
            .map(([uuid, problemData]) => (
              <ProblemRow {...problemData} key={uuid} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
