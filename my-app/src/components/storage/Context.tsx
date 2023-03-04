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

export const PROBLEMS_DATA_SCHEMA_V1 = "PROBLEMS_DATA_SCHEMA_V1";

export const StorageContextProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [storageProblemsData, setStorageProblemsData] = React.useState(() => {
        // const storageItems = JSON.parse(
        //   localStorage.getItem(PROBLEMS_DATA_SCHEMA_V1) || ""
        // );
        // return storageItems;
        return {};
    });

    const updateStorageProblemsData = React.useCallback(
        (data: StorageProblemsDataSchemaV1) => {
            setStorageProblemsData(data);
        },
        [setStorageProblemsData]
    );
    // React.useEffect(() => {
    //   localStorage.setItem(
    //     PROBLEMS_DATA_SCHEMA_V1,
    //     JSON.stringify(storageProblemsData)
    //   );
    // }, [storageProblemsData]);
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
