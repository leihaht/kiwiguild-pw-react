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
        const {
            buttons,
            attrButtonDropdown,
            attrDropdownToggle,
            attrDropdownMenu,
            attrDropdownItem
        } = this.props;
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} {...attrButtonDropdown}>
                <DropdownToggle {...attrDropdownToggle}>
                    {this.props.children}
                </DropdownToggle>
                <DropdownMenu {...attrDropdownMenu}>
                    {
                        buttons.map( btn => {
                            return (
                                <DropdownItem
                                    key={btn._id}
                                    {...attrDropdownItem}
                                    onClick={() => this.handleDropdownButton(btn)}>{btn.label}</DropdownItem>
                        )})
                    }
                </DropdownMenu>
            </ButtonDropdown>
        );
  }
}

export default DropdownButton;
