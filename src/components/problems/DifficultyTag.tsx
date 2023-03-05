import * as React from "react";
import { ProblemDifficulty } from "../../data";
import { green, brown, grey, purple, lightBlue } from "@mui/material/colors";
import { Badge } from "@mui/material";

const difficultyTagColors = Object.freeze({
  [ProblemDifficulty.VeryEasy]: grey[600],
  [ProblemDifficulty.Easy]: green.A700,
  [ProblemDifficulty.EasyMedium]: lightBlue.A700,
  [ProblemDifficulty.Medium]: purple[700],
  [ProblemDifficulty.Hard]: brown.A400,
  [ProblemDifficulty.VeryHard]: brown[900],
});

export const DifficultyTag: React.FunctionComponent<{
  difficulty: ProblemDifficulty;
}> = ({ difficulty }) => {
  return (
    <Badge
      badgeContent={difficulty}
      sx={{
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: difficultyTagColors[difficulty],
          width: "70px",
        },
      }}
      overlap="circular"
    />
  );
};
