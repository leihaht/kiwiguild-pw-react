import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

const cx = classnames.bind(styles);

//import { buttonOperations } from '../../../modules/button';
//import GeneralButton from '../../Buttons/GeneralButton';

const buttons = [
    {_id: 0, label: 'Follow', icon: 'star'},
    {_id: 1, label: 'separator'},
    {_id: 2, label: 'Rename', icon: 'pencil'},
    {_id: 3, label: 'Lock', icon: 'lock'},
    {_id: 4, label: 'Sticky', icon: 'thumb-tack'},
    {_id: 5, label: 'Edit Tags', icon: 'tag'},
    {_id: 6, label: 'separator'},
    {_id: 7, label: 'Delete', icon: 'trash-o'},
]

class DiscussionBox extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
  render() {
    const {
      voteCount,
      userName,
      userGitHandler,
      discussionTitle,
      time,
      opinionCount,
      tags,
      userProfile,
    } = this.props;

    const timeDisplay = 'time';
    //const iconTag = (icon) ? (<i className={classnames('icon', 'fa', 'fa-'+icon, 'Button-icon')}></i>) : false;

    return (
        <li>
            <div className={cx('DiscussionListItem')}>
                <ButtonDropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    className={cx('ButtonGroup', 'Dropdown', 'dropdown', 'DiscussionListItem-controls', {open: this.state.dropdownOpen})}
                >
                    <DropdownToggle
                        className="Dropdown-toggle Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"
                        tag='button'
                    >
                        <i className="icon fa fa-ellipsis-v Button-icon"></i><span className="Button-label"></span><i className="icon fa fa-caret-down Button-caret"></i>
                    </DropdownToggle>
                    <DropdownMenu tag='ul' className="Dropdown-menu">
                        {
                            buttons.map( btn => {
                                if (btn.label === 'separator') return (<li key={btn._id} className={cx('Dropdown-separator')}></li>)
                                return (
                                    <DropdownItem
                                    key={btn._id}
                                    tag='li'
                                    title={btn.label}
                                    ><i className={classnames('icon', 'fa', 'fa-'+btn.icon, 'Button-icon')}></i>{btn.label}</DropdownItem>
                            )})
                        }
                    </DropdownMenu>
                </ButtonDropdown>
                <div className={cx('DiscussionListItem-content', 'Slidable-content')}>
                    <a href="#" className={cx('DiscussionListItem-author')}>
                        <span className={cx('Avatar')}>B</span>
                    </a>
                    <ul className={cx('DiscussionListItem-badges', 'badges')}></ul>
                    <a href="#" className={cx('DiscussionListItem-main')}>
                        <h3 className={cx('DiscussionListItem-title')}>{discussionTitle}</h3>
                        <ul className={cx('DiscussionListItem-info')}>
                            <li className={cx('item-tags')}>
                                <span className={cx('TagsLabel')}>
                                    <span className={cx('TagLabel', 'colored')}>
                                        <span className={cx('TagLabel-text')}>Dev</span>
                                    </span>
                                </span>
                            </li>
                            <li className={cx('item-terminalPost')}>
                                <span><i className="icon fa fa-reply "></i> <span className="username">Ralkage</span> replied
                                    <time pubdate="true" title={timeDisplay} data-humantime="true">a day ago</time>
                                </span>
                            </li>
                        </ul>
                    </a>
                    <span className={cx('DiscussionListItem-count')}>{voteCount}</span>
                </div>
            </div>
        </li>
    );
  }
}
/*
<div className="ButtonGroup Dropdown dropdown DiscussionListItem-controls itemCount8">
    <button className="Dropdown-toggle Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right" onClick={toggle}>
        <i className="icon fa fa-ellipsis-v Button-icon"></i><span className="Button-label"></span><i className="icon fa fa-caret-down Button-caret"></i>
    </button>
    <ul className={cx('Dropdown-menu', 'dropdown-menu')}>
        {
            buttons.map( btn => {
                if (btn.label === 'separator') return (<li key={btn._id} className={cx('Dropdown-separator')}></li>)
                return (
                    <li key={btn._id}>
                        <GeneralButton
                            icon={btn.icon}
                            hasIcon
                            type="button"
                            title={btn.label}
                        >{btn.label}</GeneralButton>
                    </li>
            )})
        }
    </ul>
</div>
*/
export default DiscussionBox;
