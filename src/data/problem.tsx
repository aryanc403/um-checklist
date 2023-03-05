import _ from "lodash";

export enum ProblemDifficulty {
  VeryEasy = "very-easy",
  Easy = "easy",
  EasyMedium = "easy-med",
  Medium = "medium",
  Hard = "hard",
  VeryHard = "very-hard",
}

export type StaticProblemDataT = {
  episode: number;
  name: string;
  link: string;
  difficulty: ProblemDifficulty;
  rating: number;
  postedDate: string;
  videoLink: string;
  videoDate: string;
  uuid: string;
};

export const StaticProblemData: StaticProblemDataT[] = [
  {
    episode: 1,
    name: "Iroha and a Grid",
    link: "https://atcoder.jp/contests/abc042/tasks/arc058_b",
    difficulty: ProblemDifficulty.Easy,
    rating: 1905,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "08/03/2023",
    uuid: "8d4b9dfc-58a2-410c-8537-b992586a30f7",
  },
  {
    episode: 2,
    name: "Grid and Integers",
    link: "https://atcoder.jp/contests/code-festival-2016-quala/tasks/codefestival_2016_qualA_d",
    difficulty: ProblemDifficulty.Medium,
    rating: 2684,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "09/03/2023",
    uuid: "95856b5e-6378-48fa-a2c7-cd02fa4dbf0c",
  },
  {
    episode: 3,
    name: "Iroha Loves Strings",
    link: "https://atcoder.jp/contests/arc058/tasks/arc058_d",
    difficulty: ProblemDifficulty.Hard,
    rating: 3678,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "10/03/2023",
    uuid: "8baa1fe9-6bf3-437b-9b90-87efce3642cd",
  },
  {
    episode: 4,
    name: "BBQ Hard",
    link: "https://atcoder.jp/contests/agc001/tasks/agc001_e",
    difficulty: ProblemDifficulty.VeryHard,
    rating: 6000,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "11/03/2023",
    uuid: "8b2302d2-71c3-452a-8a37-390c327581e5",
  },
  {
    episode: 5,
    name: "Digit Sum",
    link: "https://atcoder.jp/contests/arc060/tasks/arc060_b",
    difficulty: ProblemDifficulty.EasyMedium,
    rating: 2261,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "12/03/2023",
    uuid: "dea6d337-30a0-47f8-a05b-63d8eba64600",
  },
  {
    episode: 6,
    name: "Tak and Cards",
    link: "https://atcoder.jp/contests/arc060/tasks/arc060_a",
    difficulty: ProblemDifficulty.VeryEasy,
    rating: 1583,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "13/03/2023",
    uuid: "02519cfd-ffdd-4704-8417-dcaddb3088cc",
  },
  {
    episode: 7,
    name: "Best Representation",
    link: "https://atcoder.jp/contests/arc060/tasks/arc060_d",
    difficulty: ProblemDifficulty.Medium,
    rating: 2804,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "14/03/2023",
    uuid: "37c1de8b-edda-46c5-b8de-b82a11e2ac2e",
  },
];

export type AllProblemsDictionaryT = { [uuid: string]: StaticProblemDataT };
export const AllProblemsDictionary: AllProblemsDictionaryT = Object.freeze(
  _.transform(
    StaticProblemData,
    (result: AllProblemsDictionaryT, problemData: StaticProblemDataT) => {
      const { uuid } = problemData;
      result[uuid] = problemData;
      return result;
    },
    {}
  )
);
