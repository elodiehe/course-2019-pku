import { IContentInfo, ICategory, ILabel } from '../types/type';

export interface IHomeState {
  categories: ICategory[];
  posts: IContentInfo[];
  labels: ILabel[];
}

export interface IArticleState {
  id?: number;
  title?: string;
  content?: string;
  createTime?: number;
}

export interface IFullState {
  home: IHomeState;
  article: IArticleState;
}
