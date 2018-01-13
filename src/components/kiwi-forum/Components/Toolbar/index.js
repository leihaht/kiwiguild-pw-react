import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

const cx = classnames.bind(styles);

import DropdownButton from '../Buttons/DropdownButton';

const buttons = [
    {_id: 0, label: 'Latest'},
    {_id: 1, label: 'Top'},
    {_id: 2, label: 'Newest'},
    {_id: 3, label: 'Oldest'}
]

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
        <div className={cx('IndexPage-toolbar')}>
            <ul className={cx('IndexPage-toolbar-view')}>
                <li className={cx('item-sort')}>
                    <DropdownButton
                        buttons={buttons}
                        initial={buttons[0].label}
                    />
                </li>
            </ul>
            <ul className={cx('IndexPage-toolbar-action')}>
                <li className="item-refresh">
                    <button title="Refresh" className="Button Button--icon hasIcon" type="button"><i className="icon fa fa-refresh Button-icon"></i></button>
                </li>
                <li className="item-markAllAsRead">
                    <button title="Mark All as Read" className="Button Button--icon hasIcon" type="button"><i className="icon fa fa-check Button-icon"></i></button>
                </li>
            </ul>
        </div>
    );
  }
}

export default Toolbar;
