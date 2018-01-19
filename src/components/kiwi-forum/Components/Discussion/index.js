import React, {Component} from 'react';
import { Container } from 'reactstrap';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import PostBox from '../PostBox';

const Discussion = ({discussion}) => (
    <div className={cx('DiscussionPage-discussion')}>
        <Container>
            <nav className={cx('DiscussionPage-nav')}>
            </nav>
            <div className={cx('DiscussionPage-stream')}>
                <div className={cx('PostStream')}>
                    {
                        discussion.posts.map( post => {
                            return (
                                <PostBox key={post._id} post={post} />
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    </div>
);
export default Discussion;
