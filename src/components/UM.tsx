import * as React from "react";
import { ProblemsTable } from "./problems/Table";
import { StorageContextProvider } from "./storage/Context";
import { ProblemContextProvider } from "./problems/Context";
import { Actions } from "./storage/Actions";
import { UMAppBar } from "./UMAppBar";
export const UM: React.FunctionComponent<{}> = () => {
  return (
    <>
      <UMAppBar />
      <StorageContextProvider>
        <Actions />
        <ProblemContextProvider>
          <ProblemsTable />
        </ProblemContextProvider>
      </StorageContextProvider>
    </>
  );
};
