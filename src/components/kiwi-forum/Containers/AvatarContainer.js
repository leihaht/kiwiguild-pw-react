import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

class AvatarContainer extends Component {
    render() {
        const {
            avatarUrl,
            className,
            user
        } = this.props;
        const avatarClass = classnames('Avatar', className);
        if(user) {
            const content = user.get('name').charAt(0).toUpperCase();
            //attrs.style = {background: props.user.color};
        }else {
            const content = '';
        }

        if(avatarUrl) {
            return <img className={avatarClass} src={avatarUrl}/>
        }
        return <span className={avatarClass}>{content}</span>
    }
};

export default connect(
    (state) => ({
        user: state.session.get('user')
    }),
    null
)(AvatarContainer);
