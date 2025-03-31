export interface FindAllResponse<T> {
  message: string;
  data: T[];
  items: number;
  page: number;
  totalItems: number;
  totalPage: number;
}