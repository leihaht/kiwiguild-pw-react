import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import { feedOperations } from '../modules/forumFeed';

import FeedBox from '../Components/FeedBox';
import Toolbar from '../Components/Toolbar';

const buttons = [
    {label: 'Latest', method: ''},
    {label: 'Top', method: 'top'},
    {label: 'Newest', method: 'newest'},
    {label: 'Oldest', method: 'oldest'}
]

class ForumFeed extends Component {
    constructor(props) {
        super(props);

        this.handleSortingChange = this.handleSortingChange.bind(this);
        this.state = {
            currentButton: buttons[0].label,
        };
    }
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
    handleSortingChange(newSortingButton) {
        const {
            currentForum,
            getDiscussions,
            updateSortingMethod,
            sortingMethod,
        } = this.props;

        this.setState({
            currentButton: newSortingButton.label
        });

        if (sortingMethod !== newSortingButton.method) {
            updateSortingMethod(newSortingButton.method);
            getDiscussions(currentForum, false, true);
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
            <Toolbar
                sortButtons={buttons}
                currentButton={this.state.currentButton}
                onChangeSortingMethod={this.handleSortingChange} />
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

// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
        currentForum: state.app.get('currentForum'),
        currentForumId: () => {
            const currentForumObj = state.app.get('tags').find( (forum) => forum.tag_slug === state.app.get('currentForum') );
            if (currentForumObj) return currentForumObj._id;
            else return '';
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
      updateSortingMethod: (method) => { dispatch(feedOperations.updateSortingMethod(method)); },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForumFeed);
