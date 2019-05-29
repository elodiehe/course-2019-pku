export interface IContentInfo {
  id: number;
  title: string;
  content?: string;
  createTime: number;
  textAmount: number;
}

export interface IResponse<T> {
  status: number;
  data: T;
}

export interface ICategory {
  id: number;
  category: string;
  createTime: number;
}

export interface ILabel {
  id: number;
  label: string;
  createTime: number;
}
