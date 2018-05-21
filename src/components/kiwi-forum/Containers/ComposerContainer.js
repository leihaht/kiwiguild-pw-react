import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as appActions from 'modules/app.module';

import Composer from '../Components/Composer';

const submitForm = (formValues) => {
  console.log('submitting Form: ', formValues);
}
const composerPositionEnum = {
  HIDDEN: 'hidden',
  NORMAL: 'normal',
  MINIMIZED: 'minimized',
  FULLSCREEN: 'fullScreen'
};

class ComposerContainer extends Component {
    constructor(props) {
        super(props);

        /**
         * The composer's current position.
         *
         * @type {Composer.PositionEnum}
         */
        /**
        * The composer's intended height, which can be modified by the user
        * (by dragging the composer handle).
        *
        * @type {Integer}
        */
        this.state = {
            height: null,
            position: composerPositionEnum.HIDDEN
        };
        this.computedHeight = this.computedHeight.bind(this);
        this.setHeight = this.setHeight.bind(this);
    }
    componentDidMount() {
        //const height = document.getElementById('container').clientHeight;
        //this.setState({ height });
        console.log('computedHeight:', this.computedHeight());
    }
    /**
    * Computed the composer's current height, based on the intended height, and
    * the composer's current state. This will be applied to the composer's
    * content's DOM element.
    * @returns {Integer|String}
    */
    computedHeight() {
        const minimumHeight = 200;
        const maximumHeight = window.innerHeight - document.getElementById('header').outerHeight;
        // If the composer is minimized, then we don't want to set a height; we'll
        // let the CSS decide how high it is. If it's fullscreen, then we need to
        // make it as high as the window.
        if (this.state.position === composerPositionEnum.MINIMIZED) {
            return '';
        } else if (this.state.position === composerPositionEnum.FULLSCREEN) {
            return window.innerHeight;
        }

        // Otherwise, if it's normal or hidden, then we use the intended height.
        // We don't let the composer get too small or too big, though.
        return Math.max(this.minimumHeight, Math.min(this.state.height, maximumHeight));
    }
    setHeight(node) {
        if(node && !this.state.height){
            this.setState({height: node.offsetHeight});
        }
    }
    render() {
        const {
            isOpenComposer,
            closeComposer,
            fetchingDiscussion,
            discussion,
            handleSubmit
        } = this.props;
        return (
            <Composer
                isOpenComposer={isOpenComposer}
                closeComposer={closeComposer}
                discussion={discussion}
                fetchingDiscussion={fetchingDiscussion}
                handleSubmit={handleSubmit}
                onSubmit={submitForm}
                ref={node => {this.setHeight(node)}}
            />
        );
    }
};

ComposerContainer = connect(
    (state) => ({
        isOpenComposer: state.app.get('isOpenComposer'),
        discussion: state.discussion.get('discussion'),
        fetchingDiscussion: state.discussion.get('fetchingDiscussion'),
    }),
    (dispatch) => ({
        closeComposer: () => {dispatch(appActions.close_composer())},
    })
)(ComposerContainer);

// https://redux-form.com/7.3.0/docs/faq/howtoconnect.md/
export default reduxForm({
    form: 'composer' // a unique name for the form
})(ComposerContainer);
