import React, {Component} from 'react';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

class ItemScrubber extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <li className="item-scrubber">
                <div className="PostStreamScrubber Dropdown disabled App-titleControl">
                    <button className="Button Dropdown-toggle" data-toggle="dropdown">
                        <span className="Scrubber-index">3</span> of <span className="Scrubber-count">3</span> posts <i className="icon fa fa-sort "></i>
                    </button>
                    <div className="Dropdown-menu dropdown-menu">
                        <div className="Scrubber">
                            <a className="Scrubber-first"><i className="icon fa fa-angle-double-up "></i> Original Post</a>
                            <div className="Scrubber-scrollbar">
                                <div className="Scrubber-before"></div>
                                <div className="Scrubber-handle">
                                    <div className="Scrubber-bar"></div>
                                    <div className="Scrubber-info">
                                        <strong><span className="Scrubber-index">3</span> of <span className="Scrubber-count">3</span> posts</strong>
                                        <span className="Scrubber-description">January 2018</span>
                                    </div>
                                </div>
                                <div className="Scrubber-after"></div>
                                <div className="Scrubber-unread"> unread</div>
                            </div>
                            <a className="Scrubber-last"><i className="icon fa fa-angle-double-down "></i> Now</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default ItemScrubber;
