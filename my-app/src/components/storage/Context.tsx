import * as React from "react";

export enum ProblemStatus {
  UNSOLVED = "Unsolved",
  SOLVED = "Solved",
  TRYING = "Trying",
  SKIP = "Skip",
}

export type StorageProblemObject = {
  status: ProblemStatus;
};

export const defaultProblemStorageData: StorageProblemObject = {
  status: ProblemStatus.UNSOLVED,
};

export type StorageProblemsDataSchemaV1 = {
  [key: string]: StorageProblemObject;
};

export type StorageContextT = {
  storageProblemsData: StorageProblemsDataSchemaV1;
  updateStorageProblemsData: (data: StorageProblemsDataSchemaV1) => void;
};

export const StorageContext = React.createContext<StorageContextT>({
  storageProblemsData: {},
  updateStorageProblemsData: (v) => {},
});

export const STORAGE_PROBLEM_DATA_SCHEMA_V1 = "STORAGE_PROBLEM_DATA_SCHEMA_V1";
export const PROBLEM_DATA_PATH = "PROBLEM_DATA_PATH";

export const StorageContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [storageProblemsData, setStorageProblemsData] = React.useState({});

  const updateStorageProblemsData = React.useCallback(
    (data: StorageProblemsDataSchemaV1) => {
      setStorageProblemsData(data);
    },
    [setStorageProblemsData]
  );
  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem(PROBLEM_DATA_PATH) || "{}");
    if (items) {
      setStorageProblemsData(items);
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem(
      PROBLEM_DATA_PATH,
      JSON.stringify(storageProblemsData)
    );
  }, [storageProblemsData]);
  return (
    <StorageContext.Provider
      value={{
        storageProblemsData,
        updateStorageProblemsData,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
