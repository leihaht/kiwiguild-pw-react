import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import * as appActions from 'modules/app.module';

import ReplyPlaceholder from '../Components/DiscussionPage/ReplyPlaceholder';

class ReplyPlaceholderContainer extends Component {
    render() {
        const {
            isOpenComposer,
            openComposer,
            composerBody
        } = this.props;
        return (
            <ReplyPlaceholder
                isOpenComposer={isOpenComposer}
                openComposer={openComposer}
                composerBody={composerBody}
            />
        );
    }
};

const selector = formValueSelector('composer') // <-- same as form name

export default connect(
    (state) => ({
        isOpenComposer: state.app.get('isOpenComposer'),
        //discussion: state.discussion.get('discussion'),
        composerBody: selector(state, 'body')
    }),
    (dispatch) => ({
        openComposer: () => {dispatch(appActions.open_composer())},
    })
)(ReplyPlaceholderContainer);
