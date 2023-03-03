export interface PROBLEM_DATAT {
  episode: number;
  name: string;
  link: string;
  level: string;
  rating: number;
  postedDate: string;
  videoLink: string;
  videoDate: string;
}

const defaultProblem: PROBLEM_DATAT = {
  episode: 1,
  name: "",
  link: "",
  level: "",
  rating: 0,
  postedDate: "",
  videoLink: "",
  videoDate: "",
};

export const PROBLEMS_DATA: PROBLEM_DATAT[] = [
  {
    episode: 1,
    name: "Iroha and a Grid",
    link: "https://atcoder.jp/contests/abc042/tasks/arc058_b",
    level: "easy",
    rating: 1905,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "08/03/2023",
  },
  {
    episode: 2,
    name: "Grid and Integers",
    link: "https://atcoder.jp/contests/code-festival-2016-quala/tasks/codefestival_2016_qualA_d",
    level: "medium",
    rating: 2684,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "09/03/2023",
  },
  {
    episode: 3,
    name: "Iroha Loves Strings",
    link: "https://atcoder.jp/contests/arc058/tasks/arc058_d",
    level: "easy",
    rating: 3678,
    postedDate: "01/03/2023",
    videoLink: "",
    videoDate: "10/03/2023",
  },
];
