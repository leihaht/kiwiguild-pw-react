import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getDiscussions,
  getPinnedDiscussions,
  updateSortingMethod,
} from './actions';

import FeedBox from 'Components/FeedBox';

class ForumFeed extends Component {
  componentDidMount() {
    const {
      currentForumId,
      getDiscussions,
      getPinnedDiscussions,
    } = this.props;

    // get the discussions and pinned discussions
    getDiscussions(currentForumId());
    getPinnedDiscussions(currentForumId());
  }

  componentDidUpdate(prevProps) {
    const {
      currentForum,
      currentForumId,
      getDiscussions,
      getPinnedDiscussions,
    } = this.props;

    // get the discussions again
    // if the forum didn't matched
    if (prevProps.currentForum !== currentForum) {
      const feedChanged = true;
      getDiscussions(currentForumId(), feedChanged);
      getPinnedDiscussions(currentForumId(), feedChanged);
    }
  }

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


  render() {
    const {
      currentForum,
      discussions,
      fetchingDiscussions,
      pinnedDiscussions,
      fetchingPinnedDiscussions,
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
      <div>

        <div>
          <FeedBox
            type='pinned'
            loading={fetchingPinnedDiscussions}
            discussions={pinnedDiscussions}
            currentForum={currentForum}
          />

          <FeedBox
            type='general'
            loading={fetchingDiscussions}
            discussions={discussions}
            currentForum={currentForum}
            onChangeSortingMethod={this.handleSortingChange.bind(this)}
            activeSortingMethod={sortingMethod}
          />

        </div>

      </div>
    );
  }
}


// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
        currentForum: state.app.currentForum,
        currentForumId: () => {
            const currentForumObj = _.find(state.app.forums, { forum_slug: state.app.currentForum });
            if (currentForumObj) return currentForumObj._id;
            else return null;
        },
        fetchingDiscussions: state.feed.fetchingDiscussions,
        discussions: state.feed.discussions,
        fetchingPinnedDiscussions: state.feed.fetchingPinnedDiscussions,
        sortingMethod: state.feed.sortingMethod,
        pinnedDiscussions: state.feed.pinnedDiscussions,
        error: state.feed.error,
    };
}

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
let mapDispatchToProps = (dispatch) => {
    return {
      getDiscussions: (currentForumId, feedChanged, sortingMethod, sortingChanged) => { dispatch(getDiscussions(currentForumId, feedChanged, sortingMethod, sortingChanged)); },
      getPinnedDiscussions: (currentForumId, feedChanged) => { dispatch(getPinnedDiscussions(currentForumId, feedChanged)); },
      updateSortingMethod: (method) => { dispatch(updateSortingMethod(method)); },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForumFeed);
