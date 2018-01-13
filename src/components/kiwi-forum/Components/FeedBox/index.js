import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

import DiscussionBox from './DiscussionBox';

const cx = classnames.bind(styles);

class FeedBox extends Component {
  renderEmptyDiscussionLine(loading, discussions) {
    if (!loading) {
      if (!discussions || discussions.length === 0) {
        return <div>No discussions...</div>;
      }
    }
  }

  render() {
    const {
      type,
      loading,
      discussions,
      currentForum,
      userProfile,
    } = this.props;

    //let discussionBoxTitle = '';
    //if (type === 'general') discussionBoxTitle = 'Discussions';
    //if (type === 'pinned') discussionBoxTitle = 'Pinned';

    return (
        <div className="DiscussionList">
            <button
                className="Button Button--block DiscussionList-update"
                type="button"
                title="Show 22 updated discussions"
            >
                <span className="Button-label">
                    Show 22 updated discussions
                </span>
            </button>
            { loading && <div>Loading...</div> }
            { this.renderEmptyDiscussionLine(loading, discussions) }
            { !loading &&
                <ul className={cx('DiscussionList-discussions')}>
                    { discussions && discussions.map((discussion) =>
                        <DiscussionBox
                          userProfile={userProfile}
                          key={discussion._id}
                          userName={discussion.user.name || discussion.user.username}
                          userGitHandler={discussion.user.username}
                          discussionTitle={discussion.title}
                          time={discussion.date}
                          tags={discussion.tags}
                          opinionCount={discussion.opinion_count}
                          voteCount={0}
                        />
                    ) }
                </ul>
            }
        </div>
    );
  }
}

export default FeedBox;
