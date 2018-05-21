import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import * as appActions from 'modules/app.module';

import ReplyPlaceholder from '../Components/DiscussionPage/ReplyPlaceholder';

class ReplyPlaceholderContainer extends Component {
    componentDidUpdate(){
        // check if the current window is the bottom of the page
        if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
            //console.log("you're at the bottom of the page");
        }
    }
    render() {
        const {
            isOpenComposer,
            openComposer,
            composerBody,
            user
        } = this.props;
        return (
            <ReplyPlaceholder
                isOpenComposer={isOpenComposer}
                openComposer={openComposer}
                composerBody={composerBody}
                user={user}
            />
        );
    }
};

const selector = formValueSelector('composer') // <-- same as form name

export default connect(
    (state) => ({
        isOpenComposer: state.app.get('isOpenComposer'),
        //discussion: state.discussion.get('discussion'),
        composerBody: selector(state, 'body'),
        user: state.session.get('user')
    }),
    (dispatch) => ({
        openComposer: () => {dispatch(appActions.open_composer())},
    })
)(ReplyPlaceholderContainer);
