import * as React from "react";
import { problemsDataT, ProblemContext } from "./Context";
import { ProblemStatus } from "../storage/Context";
import { green, blue, blueGrey, indigo } from "@mui/material/colors";
import { TableRow, TableCell, Link } from "@mui/material";
import { StatusTag } from "./StatusTag";
import { DifficultyTag } from "./DifficultyTag";

const backgroundColors = Object.freeze({
  [ProblemStatus.UNSOLVED]: indigo[50],
  [ProblemStatus.TRYING]: blue[100],
  [ProblemStatus.SOLVED]: green.A200,
  [ProblemStatus.MINDSOLVED]: green.A200,
  [ProblemStatus.SKIPPED]: blueGrey.A200,
});

export const ProblemRow: React.FunctionComponent<problemsDataT> = ({
  episode,
  name,
  link,
  difficulty,
  rating,
  postedDate,
  videoLink,
  videoDate,
  uuid,
  status,
}) => {
  const { setProblemStatus } = React.useContext(ProblemContext);

  return (
    <TableRow
      key={uuid}
      sx={{
        backgroundColor: backgroundColors[status],
      }}
    >
      <TableCell component="th" scope="row" key="episode">
        {episode}
      </TableCell>
      <TableCell align="right" key="name">
        {name}
      </TableCell>
      <TableCell align="right" key="status">
        <StatusTag
          status={status}
          onStatusChange={(newStatus: ProblemStatus) => {
            setProblemStatus(uuid, newStatus);
          }}
        />
      </TableCell>
      <TableCell align="right" key="link">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          color="inherit"
        >
          {link}
        </Link>
      </TableCell>
      <TableCell align="right" key="level">
        <DifficultyTag difficulty={difficulty} />
      </TableCell>
      <TableCell align="right" key="rating">
        {rating}
      </TableCell>
      <TableCell align="right" key="postedDate">
        {postedDate}
      </TableCell>
      <TableCell align="right" key="videoLink">
        <Link
          href={videoLink}
          target="_blank"
          rel="noreferrer noopener"
          color="inherit"
        >
          {videoLink}
        </Link>
      </TableCell>
      <TableCell align="right" key="videoDate">
        {videoDate}
      </TableCell>
    </TableRow>
  );
};
