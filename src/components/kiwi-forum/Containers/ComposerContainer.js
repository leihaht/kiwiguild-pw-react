import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as appActions from 'modules/app.module';

import Composer from '../Components/Composer';

class ComposerContainer extends Component {
    render() {
        const {
            isOpenComposer,
            closeComposer,
            fetchingDiscussion,
            discussion
        } = this.props;
        return (
            <Composer
                isOpenComposer={isOpenComposer}
                closeComposer={closeComposer}
                discussion={discussion}
                fetchingDiscussion={fetchingDiscussion}
            />
        );
    }
};

export default connect(
    (state) => ({
        isOpenComposer: state.app.get('isOpenComposer'),
        discussion: state.discussion.get('discussion'),
        fetchingDiscussion: state.discussion.get('fetchingDiscussion'),
    }),
    (dispatch) => ({
        closeComposer: () => {dispatch(appActions.close_composer())},
    })
)(ComposerContainer);
