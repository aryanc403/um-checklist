import * as React from 'react';
import { problemsDataT } from './Context';
import { ProblemStatus } from '../storage/Context';
import { green, blue, blueGrey, indigo } from '@mui/material/colors';
import { ProblemContext } from './Context';

export const ProblemRow: React.FunctionComponent<problemsDataT> = ({
  episode,
  name,
  link,
  level,
  rating,
  postedDate,
  videoLink,
  videoDate,
  uuid,
  status,
}) => {
  const { setProblemStatus } = React.useContext(ProblemContext);

  const backgroundColor = React.useMemo(() => {
    switch (status) {
    case ProblemStatus.SOLVED:
      return green.A200;
    case ProblemStatus.TRYING:
      return blue.A100;
    case ProblemStatus.UNSOLVED:
      return indigo[50];
    case ProblemStatus.SKIP:
      return blueGrey.A200;
    }
  }, [status]);

  const getNewStatus = React.useCallback(
    (status: ProblemStatus): ProblemStatus => {
      switch (status) {
      case ProblemStatus.UNSOLVED:
        return ProblemStatus.TRYING;
      case ProblemStatus.TRYING:
        return ProblemStatus.SOLVED;
      case ProblemStatus.SOLVED:
        return ProblemStatus.SKIP;
      case ProblemStatus.SKIP:
        return ProblemStatus.UNSOLVED;
      }
    },
    []
  );

  const onStatusChange = () => {
    setProblemStatus(uuid, getNewStatus(status));
  };

  return (
    <TableRow
      key={uuid}
      sx={{
        backgroundColor,
      }}
    >
      <TableCell component="th" scope="row" key="episode">
        {episode}
      </TableCell>
      <TableCell align="right" key="name">
        {name}
      </TableCell>
      <TableCell align="right" key="status">
        <Button
          onClick={() => {
            onStatusChange();
          }}
        >
          {status}
        </Button>
      </TableCell>
      <TableCell align="right" key="link">
        <a href={link} target="_blank" rel="noreferrer noopener">
          {link}
        </a>
      </TableCell>
      <TableCell align="right" key="level">
        {level}
      </TableCell>
      <TableCell align="right" key="rating">
        {rating}
      </TableCell>
      <TableCell align="right" key="postedDate">
        {postedDate}
      </TableCell>
      <TableCell align="right" key="videoLink">
        <a href={videoLink} target="_blank" rel="noreferrer noopener">
          {videoLink}
        </a>
      </TableCell>
      <TableCell align="right" key="videoDate">
        {videoDate}
      </TableCell>
    </TableRow>
  );
};
