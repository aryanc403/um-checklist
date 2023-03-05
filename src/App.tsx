import * as React from "react";
import Typography from "@mui/material/Typography";
import { UM } from "./components/UM";

const App: React.FunctionComponent<{}> = () => (
  <>
    <Typography variant="h4" component="h1" gutterBottom>
      Um Checklist
    </Typography>
    <UM />
  </>
);

export default App;
