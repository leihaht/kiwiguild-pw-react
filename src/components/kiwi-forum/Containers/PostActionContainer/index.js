import React, { Component } from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);


class PostAction extends Component {
    constructor(props) {
        super(props);

        this.handleDropdownButton = this.handleDropdownButton.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            currentButton: this.props.initial,
        };
    }

    render() {
      return (

      );
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostAction);
