import React, {Component} from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

class DiscussionCtrls extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const {
            discussionID,
            openComposer,
            buttonsReply,
            handleClickDiscussionCtrl
        } = this.props;
        return (
            <li className="item-controls">
                <ButtonDropdown
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    className={cx('ButtonGroup', 'Dropdown', 'dropdown', 'App-primaryControl', 'Dropdown--split')}
                >
                    <Button id="caret" className="SplitDropdown-button Button Button--primary hasIcon" onClick={openComposer}>
                        {icon('reply', {className: cx('Button-icon')})}
                        <span className="Button-label">Reply</span>
                    </Button>
                    <DropdownToggle className="Dropdown-toggle Button Button--icon Button--primary">
                        {icon('ellipsis-v', {className: cx('Button-icon')})}{icon('caret-down', {className: cx('Button-caret')})}
                    </DropdownToggle>
                    <DropdownMenu tag='ul' className="Dropdown-menu dropdown-menu Dropdown-menu--right" right>
                        {buttonsReply.map( (btn, index) => {
                            return (
                                <li key={index}>
                                    <button className="hasIcon" type="button" title={btn.name} onClick={() => handleClickDiscussionCtrl(btn.name, discussionID)}>
                                        {icon(btn.icon, {className: cx('Button-icon')})}
                                        <span className="Button-label">{btn.name}</span>
                                    </button>
                                </li>
                            )
                        })}
                    </DropdownMenu>
                </ButtonDropdown>
            </li>
        )
    }
}

export default DiscussionCtrls;
