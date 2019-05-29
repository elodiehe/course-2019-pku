import React from 'react';
import Title from '../../components/title';

import { ICategory, ILabel } from '../../types/type';
import './topics.scss';

type TopicsProps = {
  categories: ICategory[];
  labels: ILabel[];
};

const TOPIC_TITLE_MAP = {
  name: 'topics',
  title: '最新话题',
  icon: 'edit',
};

const Topics: React.SFC<TopicsProps> = ({
  categories = [],
  labels = [],
}: TopicsProps) => {
  const items = categories
    .map(item => ({
      name: item.category,
    }))
    .concat(
      labels.map(item => ({
        name: item.label,
      })),
    );

  return (
    <div>
      <Title {...TOPIC_TITLE_MAP} />
      <ul className="topics-list">
        {items.map(item => (
          <li className="topics-item" key={item.name}>
            <h4
              className="topics-title"
            >
              # {item.name}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
