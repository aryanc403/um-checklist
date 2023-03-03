import * as React from "react";
import { PROBLEM_DATAT, PROBLEMS_DATA } from "../data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Problem: React.FunctionComponent<PROBLEM_DATAT> = ({
  episode,
  name,
  link,
  level,
  rating,
  postedDate,
  videoLink,
  videoDate,
}) => {
  return (
    <TableRow
      key={episode}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {episode}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        <a href={link} target="_blank" rel="noreferrer noopener">
          {link}
        </a>
      </TableCell>
      <TableCell align="right">{level}</TableCell>
      <TableCell align="right">{rating}</TableCell>
      <TableCell align="right">{postedDate}</TableCell>
      <TableCell align="right">
        <a href={videoLink} target="_blank" rel="noreferrer noopener">
          {videoLink}
        </a>
      </TableCell>
      <TableCell align="right">{videoDate}</TableCell>
    </TableRow>
  );
};

export const ProblemsTable: React.FunctionComponent<{}> = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">CF/Kenkoooo</TableCell>
            <TableCell align="right">Posted</TableCell>
            <TableCell align="right">Video</TableCell>
            <TableCell align="right">Video Posted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {PROBLEMS_DATA.map((problemData) => (
            <Problem {...problemData} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
