import React, { Component } from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import DiscussionPage from '../Components/DiscussionPage';
import DiscussionList from '../Components/DiscussionPage/DiscussionList';
import { feedOperations } from '../modules/discussionFeed';

class SingleDiscussion extends Component {
    componentDidMount() {
      const {
        match,
        getDiscussion
      } = this.props;

      getDiscussion(match.params.discussion);
    }
    handleClickPostCtrl(btnName, postID) {
        console.log(btnName+' and '+postID);
    }

    render () {
        const {
            fetchingDiscussion,
            discussion,
            error,
        } = this.props;

        if (error) {
          return (<div className="container">{error}</div>);
        }

        // return loading status if discussion is not fetched yet
        if (fetchingDiscussion) {
            return <div>Loading discussion ...</div>;
        }
        return (
            <div className={cx('DiscussionPage')}>
                <DiscussionList />
                <DiscussionPage
                    discussion={discussion}
                    handleClickPostCtrl={this.handleClickPostCtrl}
                />
            </div>
        );
    }
};

export default connect(
    (state) => ({
        discussion: state.discussion.get('discussion'),
        fetchingDiscussion: state.discussion.get('fetchingDiscussion'),
        error: state.discussion.get('error'),
    }),
    (dispatch) => ({
        getDiscussion: (discussionSlug) => {dispatch(feedOperations.getDiscussion(discussionSlug))},
    })
)(SingleDiscussion);
