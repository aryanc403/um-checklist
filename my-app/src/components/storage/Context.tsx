import * as React from "react";

export type ProblemStatus = boolean;

export type StorageProblemObject = {
  status: ProblemStatus;
};

export const defaultProblemStorageData: StorageProblemObject = {
  status: false,
};

export type StorageProblemsDataSchemaV1 = {
  [key: string]: StorageProblemObject;
};

export type StorageContextT = {
  storageProblemsData: StorageProblemsDataSchemaV1;
  setStorageProblemsData: (data: StorageProblemsDataSchemaV1) => void;
};

export const StorageContext = React.createContext<StorageContextT>({
  storageProblemsData: {},
  setStorageProblemsData: (v) => {},
});

export const PROBLEMS_DATA_SCHEMA_V1 = "PROBLEMS_DATA_SCHEMA_V1";

export const ProblemContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [storageProblemsData, setStorageProblemsData] = React.useState(() => {
    const storageItems = JSON.parse(
      localStorage.getItem(PROBLEMS_DATA_SCHEMA_V1) || ""
    );
    return storageItems;
  });
  React.useEffect(() => {
    localStorage.setItem(
      PROBLEMS_DATA_SCHEMA_V1,
      JSON.stringify(storageProblemsData)
    );
  }, [storageProblemsData]);
  return (
    <StorageContext.Provider
      value={{
        storageProblemsData,
        setStorageProblemsData,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
