import * as React from "react";
import { ProblemStatus } from "../storage/Context";
import { green, blue, blueGrey, indigo } from "@mui/material/colors";
import { Button, Badge } from "@mui/material";

const statusTagColors = Object.freeze({
  [ProblemStatus.UNSOLVED]: indigo[500],
  [ProblemStatus.TRYING]: blue[500],
  [ProblemStatus.SOLVED]: green[500],
  [ProblemStatus.SKIPPED]: blueGrey[500],
});

const statusCycle = Object.freeze({
  [ProblemStatus.UNSOLVED]: ProblemStatus.TRYING,
  [ProblemStatus.TRYING]: ProblemStatus.SOLVED,
  [ProblemStatus.SOLVED]: ProblemStatus.SKIPPED,
  [ProblemStatus.SKIPPED]: ProblemStatus.UNSOLVED,
});

export const StatusTag: React.FunctionComponent<{
  status: ProblemStatus;
  onStatusChange: (arg0: ProblemStatus) => void;
}> = ({ status, onStatusChange }) => {
  return (
    <Button
      onClick={() => {
        onStatusChange(statusCycle[status]);
      }}
    >
      <Badge
        badgeContent={status}
        sx={{
          "& .MuiBadge-badge": {
            color: "white",
            backgroundColor: statusTagColors[status],
          },
        }}
      />
    </Button>
  );
};
