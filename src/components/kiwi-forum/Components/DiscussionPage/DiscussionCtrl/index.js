import React, {Component} from 'react';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

import ItemControls from './ItemControls';
import ItemSubscription from './ItemSubscription';
import ItemScrubber from './ItemScrubber';

class DiscussionCtrl extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <nav className={cx('DiscussionPage-nav')}>
                <ul>
                    <ItemControls />
                    <ItemSubscription />
                    <ItemScrubber />
                </ul>
            </nav>
        )
    }
}
export default DiscussionCtrl;
