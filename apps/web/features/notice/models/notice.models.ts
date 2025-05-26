export type Pagination = {
  totalItems: number;
  pageSize: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type NoticeModel = {
  id: number;
  title: string;
  content: string;
  author: string;
  length: string;
};
