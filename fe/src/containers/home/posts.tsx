import React from 'react';
import Title from '../../components/title';
import BlogList from './blog-list';
import { IContentInfo } from '../../types/type';

const titleProps = {
  name: 'monthly',
  title: '博文列表',
  icon: 'robot',
};

type PostsProps = {
  posts: IContentInfo[];
};

const Posts: React.SFC<PostsProps> = (props: PostsProps) => {
  return (
    <div>
      <Title {...titleProps} />
      <BlogList list={props.posts} />
    </div>
  );
};

export default Posts;
