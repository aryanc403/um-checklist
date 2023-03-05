import * as React from "react";
import { ProblemsTable } from "./problems/Table";
import { StorageContextProvider } from "./storage/Context";
import { ProblemContextProvider } from "./problems/Context";
import { Actions } from "./storage/Actions";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const UM: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Header />
      <StorageContextProvider>
        <Actions />
        <ProblemContextProvider>
          <ProblemsTable />
        </ProblemContextProvider>
      </StorageContextProvider>
      <Footer />
    </>
  );
};
