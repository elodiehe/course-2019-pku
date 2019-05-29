import React from 'react';
import Posts from './posts';
import Topics from './topics';

import Banner from './banner';

import './index.scss';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IFullState, IHomeState } from '../../redux/state';
import { createHomeLoadAction } from '../../redux/action';

export interface IIndexProps extends IHomeState {
  dispatch: ThunkDispatch<{}, {}, any>;
}

/**
 * 首页
 */
class Home extends React.Component<IIndexProps> {
  componentDidMount() {
    this.props.dispatch(createHomeLoadAction());
  }

  render() {
    const { posts, categories, labels } = this.props;

    return (
      <div className="home-container">
        <Banner />
        <div className="home-wrapper">
          <Posts posts={posts} />
          <Topics categories={categories} labels={labels} />
        </div>
      </div>
    );
  }
}

export default connect((store: IFullState) => store.home)(Home);
