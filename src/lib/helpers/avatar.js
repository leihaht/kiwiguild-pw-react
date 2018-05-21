/**
 * The `avatar` helper displays a user's avatar.
 *
 * @param {User} user
 * @param {Object} attrs Attributes to apply to the avatar element
 * @return {Object}
 */

import React from 'react';
import classnames from 'classnames';

const avatar = (user, attrs = {}) => {
    attrs.className = classnames('Avatar', attrs.className);
    const avatarcontent = (user) ? user.get('name').charAt(0).toUpperCase() : '';
        //attrs.style = {background: props.user.color};
    //if(avatarUrl) {
        //return <img className={avatarClass} src={avatarUrl}/>
    //}
    return <span {...attrs}>{avatarcontent}</span>
};

export default avatar;
