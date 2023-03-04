import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProblemContext } from './Context';
import { ProblemRow } from './Problem';

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
