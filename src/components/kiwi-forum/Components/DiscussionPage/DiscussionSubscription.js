import React, {Component} from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

class DiscussionSubscription extends Component {
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
            buttonsFollow
        } = this.props;
        return (
            <li className="item-subscription">
                <ButtonDropdown
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    className={cx('ButtonGroup', 'Dropdown', 'SubscriptionMenu')}
                >
                    <Button className="Button SubscriptionMenu-button SubscriptionMenu-button--false hasIcon">
                        {icon('star-o', {className: cx('Button-icon')})}
                        <span className="Button-label">Follow</span>
                    </Button>
                    <DropdownToggle className="Dropdown-toggle Button Button--icon SubscriptionMenu-button--false" caret>
                    </DropdownToggle>
                    <DropdownMenu tag='ul' className="Dropdown-menu dropdown-menu Dropdown-menu--right" right>
                        {buttonsFollow.map( btn => {
                            return (
                                <li key={btn._id}>
                                    <button className="SubscriptionMenuItem hasIcon" type="button">
                                        {icon(btn.icon, {className: cx('Button-icon')})}
                                        <span className="SubscriptionMenuItem-description">{btn.name}</span>
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
export default DiscussionSubscription;
