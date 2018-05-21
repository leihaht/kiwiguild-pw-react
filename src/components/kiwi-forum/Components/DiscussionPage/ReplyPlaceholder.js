import React, {Component} from 'react';

import AvatarContainer from '../../Containers/AvatarContainer';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import avatar from 'helpers/avatar';
import username from 'helpers/username';
import nl2br from '../../../../lib/react-nl2br';

const ReplyPlaceholder = ({
    isOpenComposer,
    openComposer,
    composerBody,
    user }) => {
    function renderComposerOpened() {
        return (
            <article className={cx('Post', 'CommentPost', 'editing')}>
                <header className={cx('Post-header')}>
                    <div className="PostUser">
                        <h3>
                            {avatar(user, {className: cx('PostUser-avatar')})}
                            {username(user)}
                        </h3>
                    </div>
                </header>
                <div className="Post-body">
                    {
                        composerBody && composerBody.trim().split('\n\n').map( (line, index) =>
                            <p key={index}>{line && nl2br(line.trim())}</p>
                        )
                    }
                </div>
            </article>
        );
    }
    function renderComposerClosed() {
        return (
            <article className={cx('Post', 'ReplyPlaceholder')} onClick={openComposer}>
                <header className="Post-header">
                    {avatar(user, {className: cx('PostUser-avatar')})}Write a Reply...</header>
            </article>
        )
    }
    return (
        <div className="PostStream-item">
            {isOpenComposer && renderComposerOpened()}
            {!isOpenComposer && renderComposerClosed()}
        </div>
    );
}
export default ReplyPlaceholder;
