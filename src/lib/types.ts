export type TableHeader = {
	name: string;
	key: string;
	type: string;
};

export type TablePagination = {
	page: number;
	perPage: number;
	totalCount: number;
	totalPages: number;
};
