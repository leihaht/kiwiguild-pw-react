import React, {Component} from 'react';
import { Container } from 'reactstrap';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import DiscussionCtrlContainer from '../../Containers/DiscussionCtrlContainer';
import ReplyPlaceholderContainer from '../../Containers/ReplyPlaceholderContainer';

import PostBox from './PostBox';

const DiscussionPage = ({ discussion, handleClickPostCtrl }) => (
    <div className={cx('DiscussionPage-discussion')}>
        <Container>
            <DiscussionCtrlContainer />
            <div className={cx('DiscussionPage-stream')}>
                <div className={cx('PostStream')}>
                    {
                        discussion.posts.map( post => {
                            return (
                                <PostBox key={post._id} post={post} handleClickPostCtrl={handleClickPostCtrl}/>
                            )
                        })
                    }
                    <ReplyPlaceholderContainer />
                </div>
            </div>
        </Container>
    </div>
);
export default DiscussionPage;
