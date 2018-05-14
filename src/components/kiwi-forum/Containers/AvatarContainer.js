import React, { Component } from 'react';
import { connect } from 'react-redux';

import { appOperations } from 'modules/app';

import ReplyPlaceholder from '../Components/DiscussionPage/ReplyPlaceholder';

class AvatarContainer extends Component {
    render() {
        const {
            isOpenComposer,
            openComposer
        } = this.props;
        return (
            <ReplyPlaceholder
                isOpenComposer={isOpenComposer}
                openComposer={openComposer}
            />
        );
    }
};

export default connect(
    (state) => ({
        isOpenComposer: state.app.get('isOpenComposer'),
        //discussion: state.discussion.get('discussion'),
    }),
    (dispatch) => ({
        openComposer: () => {dispatch(appOperations.openComposer())},
    })
)(AvatarContainer);
