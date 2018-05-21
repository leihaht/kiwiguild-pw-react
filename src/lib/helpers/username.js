/**
 * The `username` helper displays a user's username in a <span class="username">
 * tag. If the user doesn't exist, the username will be displayed as [deleted].
 *
 * @param {User} user
 * @return {Object}
 */

import React from 'react';

const username = user => {
    const name = (user && user.get('name'));// || app.translator.trans('core.lib.username.deleted_text');

    return <span className="username">{name}</span>;
};

export default username;
