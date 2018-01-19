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
                          key={discussion._id}
                          id={discussion._id}
                          discussion={discussion}
                          replies={discussion.replies_count}
                          startPost={discussion.start_post}
                        />
                    ) }
                </ul>
            }
        </div>
    );
  }
}

export default FeedBox;
