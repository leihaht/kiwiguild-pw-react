import React, {Component} from 'react';
import { Container } from 'reactstrap';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import DiscussionCtrl from './DiscussionCtrl';
import PostBox from './PostBox';

const DiscussionPage = ({discussion}) => (
    <div className={cx('DiscussionPage-discussion')}>
        <Container>
            <DiscussionCtrl />
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
export default DiscussionPage;
