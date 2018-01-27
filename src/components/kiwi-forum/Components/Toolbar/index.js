import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const buttons = [
    {_id: 0, label: 'Latest'},
    {_id: 1, label: 'Top'},
    {_id: 2, label: 'Newest'},
    {_id: 3, label: 'Oldest'}
]

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.handleDropdownButton = this.handleDropdownButton.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            currentButton: this.props.initial,
        };
    }
    handleDropdownButton(btn) {
        this.setState({
            currentButton: btn.label
        });
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

  render() {
    return (
        <div className={cx('IndexPage-toolbar')}>
            <ul className={cx('IndexPage-toolbar-view')}>
                <li className={cx('item-sort')}>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={cx('ButtonGroup', 'Dropdown', 'dropdown')}>
                        <DropdownToggle className={cx('Dropdown-toggle', 'Button')} caret>
                            <span className="Button-label">{buttons[0].label}</span>
                        </DropdownToggle>
                        <DropdownMenu tag='ul' className={cx('Dropdown-menu')}>
                            {
                                buttons.map( btn => {
                                    return (
                                        <DropdownItem
                                            key={btn._id}
                                            tag='li'
                                            onClick={() => this.handleDropdownButton(btn)}>{btn.label}</DropdownItem>
                                )})
                            }
                        </DropdownMenu>
                    </ButtonDropdown>
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
