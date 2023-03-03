import * as React from "react";
import { PROBLEM_DATAT, PROBLEMS_DATA } from "../../data";
import {
  StorageContext,
  StorageProblemObject,
  ProblemStatus,
  defaultProblemStorageData,
} from "../storage/Context";
import _ from "lodash";

export type problemsDataT = {
  [key: string]: PROBLEM_DATAT & StorageProblemObject;
};
export type ProblemContextT = {
  problemsData: problemsDataT;
  setProblemStatus: (arg0: string, arg1: ProblemStatus) => void;
};

export const ProblemContext = React.createContext<ProblemContextT>({
  problemsData: {},
  setProblemStatus: (arg0: string, arg1: ProblemStatus) => {},
});

export const ProblemContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { storageProblemsData, setStorageProblemsData } = React.useContext(
    StorageContext
  );

  const setProblemStatus = React.useCallback(
    (uuid: string, status: ProblemStatus) => {
      const updatedStorageProblemsData = storageProblemsData;
      updatedStorageProblemsData[uuid].status = status;
      setStorageProblemsData(updatedStorageProblemsData);
    },
    [setStorageProblemsData]
  );

  const problemsData = React.useMemo(
    () =>
      _.transform(
        Object.keys(PROBLEMS_DATA),
        (result: problemsDataT, uuid: string) => {
          const data = PROBLEMS_DATA[uuid];
          const storageData =
            storageProblemsData[uuid] ?? _.clone(defaultProblemStorageData);
          result[uuid] = {
            ...data,
            ...storageData,
          };
          return result;
        },
        {}
      ),
    [PROBLEMS_DATA, storageProblemsData]
  );

  return (
    <ProblemContext.Provider value={{ problemsData, setProblemStatus }}>
      {children}
    </ProblemContext.Provider>
  );
};
