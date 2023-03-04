import * as React from "react";
import { StaticProblemDataT, AllProblemsDictionary } from "../../data";
import {
  StorageContext,
  StorageProblemObject,
  ProblemStatus,
  defaultProblemStorageData,
} from "../storage/Context";
import _ from "lodash";

export type problemsDataT = StaticProblemDataT & StorageProblemObject;

export type problemsDataDictionaryT = {
  [key: string]: problemsDataT;
};

export type ProblemContextT = {
  problemsData: problemsDataDictionaryT;
  setProblemStatus: (arg0: string, arg1: ProblemStatus) => void;
};

export const ProblemContext = React.createContext<ProblemContextT>({
  problemsData: {},
  setProblemStatus: (arg0: string, arg1: ProblemStatus) => {},
});

export const ProblemContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { storageProblemsData, updateStorageProblemsData } =
    React.useContext(StorageContext);

  const setProblemStatus = React.useCallback(
    (uuid: string, status: ProblemStatus) => {
      const updatedStorageProblemsData = _.cloneDeep(storageProblemsData);
      const problemData = updatedStorageProblemsData[uuid]
        ? updatedStorageProblemsData[uuid]
        : _.cloneDeep(defaultProblemStorageData);
      problemData.status = status;
      updatedStorageProblemsData[uuid] = problemData;
      updateStorageProblemsData(updatedStorageProblemsData);
    },
    [storageProblemsData, updateStorageProblemsData]
  );

  const problemsData = React.useMemo(
    () =>
      _.transform(
        Object.keys(AllProblemsDictionary),
        (result: problemsDataDictionaryT, uuid: string) => {
          const data = _.cloneDeep(AllProblemsDictionary[uuid]);
          const currentData = storageProblemsData[uuid]
            ? _.cloneDeep(storageProblemsData[uuid])
            : _.cloneDeep(defaultProblemStorageData);
          result[uuid] = {
            ...data,
            ...currentData,
          };
          return result;
        },
        {}
      ),
    [AllProblemsDictionary, storageProblemsData, defaultProblemStorageData]
  );

  return (
    <ProblemContext.Provider value={{ problemsData, setProblemStatus }}>
      {children}
    </ProblemContext.Provider>
  );
};
