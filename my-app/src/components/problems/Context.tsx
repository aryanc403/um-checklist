import * as React from "react";
import { ProblemDataT, PROBLEMS_DATA } from "../../data";
import {
    StorageContext,
    StorageProblemObject,
    ProblemStatus,
    defaultProblemStorageData,
} from "../storage/Context";
import _ from "lodash";

export type problemsDataT = ProblemDataT &
    StorageProblemObject & {
        uuid: string;
    };

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
                Object.keys(PROBLEMS_DATA),
                (result: problemsDataDictionaryT, uuid: string) => {
                    const data = _.cloneDeep(PROBLEMS_DATA[uuid]);
                    const currentData = storageProblemsData[uuid]
                        ? storageProblemsData[uuid]
                        : _.cloneDeep(defaultProblemStorageData);
                    result[uuid] = {
                        ...data,
                        ...currentData,
                        uuid,
                    };
                    return result;
                },
                {}
            ),
        [PROBLEMS_DATA, storageProblemsData, defaultProblemStorageData]
    );

    return (
        <ProblemContext.Provider value={{ problemsData, setProblemStatus }}>
            {children}
        </ProblemContext.Provider>
    );
};
