import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

const cx = classnames.bind(styles);

class DropdownButton extends Component {
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
        const {buttons} = this.props;
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.currentButton}
                </DropdownToggle>
                <DropdownMenu tag='ul'>
                    {
                        buttons.map( btn => {
                            return (
                                <DropdownItem
                                    key={btn._id}
                                    tag='li'
                                    title={btn.label}
                                    onClick={() => this.handleDropdownButton(btn)}>{btn.label}</DropdownItem>
                        )})
                    }
                </DropdownMenu>
            </ButtonDropdown>
        );
    // return (
    //     <div className={cx('ButtonGroup', 'Dropdown', 'dropdown', {'open': dropdownOpen})}>
    //         <GeneralButton className={cx('Dropdown-toggle', 'Button')} data-toggle="dropdown" onClick={toggle}>
    //             {this.state.currentButton}<i className={cx('icon', 'fa', 'fa-caret-down', 'Button-caret')}></i>
    //         </GeneralButton>
    //         <ul className={cx('Dropdown-menu', 'dropdown-menu')}>
    //             {
    //                 buttons.map( btn => {
    //                     return (
    //                         <li key={btn._id}>
    //                             <GeneralButton
    //                                 {...(this.state.currentButton === btn.label) && { active: 'true', icon: 'check'}}
    //                                 hasIcon
    //                                 type="button"
    //                                 title={btn.label}
    //                                 onClick={() => this.handleDropdownButton(btn)}>{btn.label}</GeneralButton>
    //                         </li>
    //                 )})
    //             }
    //         </ul>
    //     </div>
    // );
  }
}

export default DropdownButton;
