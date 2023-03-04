export type ProblemDataT = {
	episode: number;
	name: string;
	link: string;
	level: string;
	rating: number;
	postedDate: string;
	videoLink: string;
	videoDate: string;
};

export const PROBLEMS_DATA: { [uuid: string]: ProblemDataT } = {
	'8d4b9dfc-58a2-410c-8537-b992586a30f7': {
		episode: 1,
		name: 'Iroha and a Grid',
		link: 'https://atcoder.jp/contests/abc042/tasks/arc058_b',
		level: 'easy',
		rating: 1905,
		postedDate: '01/03/2023',
		videoLink: '',
		videoDate: '08/03/2023',
	},
	'95856b5e-6378-48fa-a2c7-cd02fa4dbf0c': {
		episode: 2,
		name: 'Grid and Integers',
		link: 'https://atcoder.jp/contests/code-festival-2016-quala/tasks/codefestival_2016_qualA_d',
		level: 'medium',
		rating: 2684,
		postedDate: '01/03/2023',
		videoLink: '',
		videoDate: '09/03/2023',
	},
	'8baa1fe9-6bf3-437b-9b90-87efce3642cd': {
		episode: 3,
		name: 'Iroha Loves Strings',
		link: 'https://atcoder.jp/contests/arc058/tasks/arc058_d',
		level: 'easy',
		rating: 3678,
		postedDate: '01/03/2023',
		videoLink: '',
		videoDate: '10/03/2023',
	},
};
