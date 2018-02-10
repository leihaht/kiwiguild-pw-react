import React, { Component } from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import TagsPage from '../Components/TagsPage';

class TagsContainer extends Component {
    render () {
        return (
            <TagsPage />
        );
    }
};

export default connect(
    null, null
)(TagsContainer);
