import React from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import TerminalPost from '../../TerminalPost';

const DiscussionListItemMain = ({discussion}) => (
    <Link className={cx('DiscussionListItem-main')} to={"/forum/d/"+discussion.discussion_slug}>
        <h3 className={cx('DiscussionListItem-title')}>{discussion.title}</h3>
        <ul className={cx('DiscussionListItem-info')}>
            <li className={cx('item-tags')}>
                <span className={cx('TagsLabel')}>
                    { discussion.tags.map( t => {
                        return (
                            <span
                                key={t._id}
                                className={cx('TagLabel', 'colored')}
                                style={{backgroundColor: '#'+t.tag_color}}>
                                <span className={cx('TagLabel-text')}>{t.tag_name}</span>
                            </span>
                    )})}
                </span>
            </li>
            <TerminalPost lastPost={discussion.last_post} replies={discussion.replies}/>
        </ul>
    </Link>
);

export default DiscussionListItemMain;
