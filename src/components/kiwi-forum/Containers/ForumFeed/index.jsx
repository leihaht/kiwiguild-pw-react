import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import { feedOperations } from '../../modules/forumFeed';

import FeedBox from '../../Components/FeedBox';
import Toolbar from '../../Components/Toolbar';

class ForumFeed extends Component {
    componentDidMount() {
      const {
        currentForumId,
        getDiscussions,
      } = this.props;

      // get the discussions and pinned discussions
      getDiscussions(currentForumId());
    }
    componentDidUpdate(prevProps) {
      const {
        currentForum,
        currentForumId,
        getDiscussions,
      } = this.props;

      // get the discussions again
      // if the forum didn't matched
      if (prevProps.currentForum !== currentForum) {
        const feedChanged = true;
        getDiscussions(currentForumId(), feedChanged);
      }
    }
    render() {
      const {
        currentForum,
        discussions,
        fetchingDiscussions,
        sortingMethod,
        error,
      } = this.props;

      if (error) {
        return (
          <div>
            {error}
          </div>
        );
      }

      return (
        <div className={cx('IndexPage-results', 'sideNavOffset')}>
            <Toolbar />
            <FeedBox
                type='general'
                loading={fetchingDiscussions}
                discussions={discussions}
                currentForum={currentForum}
                activeSortingMethod={sortingMethod}
            />

        </div>
      );
    }
};
/*

import FeedBox from 'Components/FeedBox';

class ForumFeed extends Component {
  handleSortingChange(newSortingMethod) {
    const {
      currentForum,
      getDiscussions,
      updateSortingMethod,
      sortingMethod,
    } = this.props;

    if (sortingMethod !== newSortingMethod) {
      updateSortingMethod(newSortingMethod);
      getDiscussions(currentForum, false, true);
    }
  }



}
*/

// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
        currentForum: state.app.get('currentForum'),
        currentForumId: () => {
            const currentForumObj = state.app.get('forums').find( (forum) => forum.forum_slug === state.app.get('currentForum') );
            if (currentForumObj) return currentForumObj._id;
            else return null;
        },
        fetchingDiscussions: state.feed.get('fetchingDiscussions'),
        discussions: state.feed.get('discussions'),
        sortingMethod: state.feed.get('sortingMethod'),
        error: state.feed.get('error'),
    };
}

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
let mapDispatchToProps = (dispatch) => {
    return {
      getDiscussions: (currentForumId, feedChanged, sortingMethod, sortingChanged) => { dispatch(feedOperations.getDiscussions(currentForumId, feedChanged, sortingMethod, sortingChanged)); },
      //updateSortingMethod: (method) => { dispatch(updateSortingMethod(method)); },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForumFeed);
