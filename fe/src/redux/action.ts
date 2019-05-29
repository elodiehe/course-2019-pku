import { Dispatch, Action } from 'redux';
import axios from 'axios';
import { IHomeState, IArticleState } from './state';
import { IResponse, IContentInfo, ICategory, ILabel } from '../types/type';

export enum EActionType {
  HOME_LOAD = 'HOME_LOAD',
  ARTICLE_LOAD = 'ARTICLE_LOAD',
  ARTICLE_CLEAR = 'ARTICLE_CLEAR',
}

export interface IAction<TType = any, TPayload = any> extends Action<TType> {
  payload: TPayload;
}

export const createHomeLoadAction = () => async (
  dispatch: Dispatch<IAction<EActionType, IHomeState>>,
) => {
  // 暂时忽略网络异常处理
  const postsRes = await axios.get<IResponse<IContentInfo[]>>(
    `http://${location.hostname}:8888/get-posts`,
  );
  const categoriesRes = await axios.get<IResponse<ICategory[]>>(
    `http://${location.hostname}:8888/get-categories`,
  );
  const labelsRes = await axios.get<IResponse<ILabel[]>>(
    `http://${location.hostname}:8888/get-labels`,
  );
  // 用于调试
  console.log({
    posts: postsRes.data.data,
    categories: categoriesRes.data.data,
    labels: labelsRes.data.data,
  });
  dispatch({
    type: EActionType.HOME_LOAD,
    payload: {
      posts: postsRes.data.data,
      categories: categoriesRes.data.data,
      labels: labelsRes.data.data,
    },
  });
};

export const createArticleLoadAction = (id: string) => async (
  dispatch: Dispatch<IAction<EActionType, IArticleState>>,
) => {
  const res = await axios.get<IResponse<IContentInfo>>(
    `http://${location.hostname}:8888/get-post/${id}`,
  );
  dispatch({
    type: EActionType.ARTICLE_LOAD,
    payload: res.data.data,
  });
};

export const createArticleClearAction = (): Action<EActionType> => ({
  type: EActionType.ARTICLE_CLEAR,
});
