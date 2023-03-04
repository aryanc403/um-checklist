import * as React from 'react';
import { ProblemsTable } from './problems/Table';
import { StorageContextProvider } from './storage/Context';
import { ProblemContextProvider } from './problems/Context';

export const UM: React.FunctionComponent<{}> = () => {
  return (
    <StorageContextProvider>
      <ProblemContextProvider>
        <ProblemsTable />
      </ProblemContextProvider>
    </StorageContextProvider>
  );
};
