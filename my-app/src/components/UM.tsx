import * as React from "react";
import { ProblemsTable } from "./problems/Table";
import { StorageContextProvider } from "./storage/Context";
import { ProblemContextProvider } from "./problems/Context";
import { Actions } from "./storage/Actions";
export const UM: React.FunctionComponent<{}> = () => {
  return (
    <StorageContextProvider>
      <Actions />
      <ProblemContextProvider>
        <ProblemsTable />
      </ProblemContextProvider>
    </StorageContextProvider>
  );
};
