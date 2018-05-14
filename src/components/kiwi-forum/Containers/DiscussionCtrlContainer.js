import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as appActions from 'modules/app.module';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

import DiscussionCtrls from '../Components/DiscussionPage/DiscussionCtrls';
import DiscussionSubscription from '../Components/DiscussionPage/DiscussionSubscription';
import DiscussionScrubber from '../Components/DiscussionPage/DiscussionScrubber';

const buttonsReply = [
    {name: 'Reply',     icon: 'reply'},
    {name: 'Rename',    icon: 'pencil'},
    {name: 'Lock',      icon: 'lock'},
    {name: 'Sticky',    icon: 'thumb-tack'},
    {name: 'Edit Tags', icon: 'tag'},
    {name: 'Delete',    icon: 'trash-o'},
];
const buttonsFollow = [
    {_id: 0, name: 'Be notified only when @mentioned.', icon: 'star-o'},
    {_id: 1, name: 'Be notified of all replies.', icon: 'star'},
    {_id: 2, name: 'Never be notified. Hide from the discussion list.', icon: 'eye-slash'}
];

class DiscussionCtrlContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClickDiscussionCtrl = this.handleClickDiscussionCtrl.bind(this);
    }
    handleClickDiscussionCtrl(btnName, disID) {
        console.log('clicked: ' + btnName+' and '+disID);
    }
    render() {
        const {
            discussion,
            openComposer
        } = this.props;
        return (
            <nav className={cx('DiscussionPage-nav')}>
                <ul>
                    <DiscussionCtrls
                        discussionID={discussion._id}
                        openComposer={openComposer}
                        buttonsReply={buttonsReply}
                        handleClickDiscussionCtrl={this.handleClickDiscussionCtrl}
                    />
                    <DiscussionSubscription
                        buttonsFollow={buttonsFollow}
                    />
                    <DiscussionScrubber />
                </ul>
            </nav>
        )
    }
}

export default connect(
    (state) => ({
        discussion: state.discussion.get('discussion'),
    }),
    (dispatch) => ({
        openComposer: () => {dispatch(appActions.openComposer())},
    })
)(DiscussionCtrlContainer);
