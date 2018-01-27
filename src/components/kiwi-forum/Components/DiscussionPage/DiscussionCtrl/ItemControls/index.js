import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { appOperations } from '../../../../modules/app';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

const buttonsReply = [
    {_id: 0, name: 'Reply',     icon: 'reply'},
    {_id: 1, name: 'Rename',    icon: 'pencil'},
    {_id: 2, name: 'Lock',      icon: 'lock'},
    {_id: 3, name: 'Sticky',    icon: 'thumb-tack'},
    {_id: 4, name: 'Edit Tags', icon: 'tag'},
    {_id: 5, name: 'Delete',    icon: 'trash-o'},
];
class ItemControls extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.openComposer = this.openComposer.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleClick(btnName) {
        console.log('clicked: ' + btnName);
    }
    openComposer() {
        this.props.openComposer();
    }
    render() {
        return (
            <li className="item-controls">
                <ButtonDropdown
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    className={cx('ButtonGroup', 'Dropdown', 'dropdown', 'App-primaryControl', 'Dropdown--split')}
                >
                    <Button id="caret" className="SplitDropdown-button Button Button--primary hasIcon" onClick={this.openComposer}>
                        {icon('reply', {className: cx('Button-icon')})}
                        <span className="Button-label">Reply</span>
                    </Button>
                    <DropdownToggle className="Dropdown-toggle Button Button--icon Button--primary">
                        {icon('ellipsis-v', {className: cx('Button-icon')})}{icon('caret-down', {className: cx('Button-caret')})}
                    </DropdownToggle>
                    <DropdownMenu tag='ul' className="Dropdown-menu dropdown-menu Dropdown-menu--right" right>
                        {buttonsReply.map( btn => {
                            return (
                                <li key={btn._id}>
                                    <button className="hasIcon" type="button" title={btn.name} onClick={() => this.handleClick(btn.name)}>
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
export default connect(
    null,
    (dispatch) => ({
        openComposer: () => {dispatch(appOperations.openComposer())},
    })
)(ItemControls);
