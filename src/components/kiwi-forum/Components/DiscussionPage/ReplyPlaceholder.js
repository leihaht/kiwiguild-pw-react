import React, {Component} from 'react';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const ReplyPlaceholder = ({
    isOpenComposer,
    openComposer,
    composerBody }) => {
    function renderComposerOpened() {
        return (
            <article className={cx('Post', 'CommentPost', 'editing')}>
                <header className="Post-header">
                    <div className="PostUser">
                        <h3>
                            <span className="Avatar PostUser-avatar">A</span>
                            <span className="username">username</span>
                        </h3>
                    </div>
                </header>
                <div className="Post-body">{composerBody}</div>
            </article>
        );
    }
    function renderComposerClosed() {
        return (
            <article className={cx('Post', 'ReplyPlaceholder')} onClick={openComposer}>
                <header className="Post-header">
                    <span className="Avatar PostUser-avatar">A</span>Write a Reply...</header>
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
