import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import PostHead from './PostHead';

const buttonsPost = [
    {_id: 0, name: 'Edit',      icon: 'pencil'},
    {_id: 1, name: 'separator'},
    {_id: 2, name: 'Delete',    icon: 'trash-o'},
];

class PostBox extends Component {
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
          post,
          handleClickPostCtrl,
        } = this.props;

        return (
            <div className={cx('PostStream-item')} data-id={post._id}>
                <article className="Post undefined CommentPost">
                    <div>
                        <PostHead post={post}/>
                        <div className="Post-body">
                            {ReactHtmlParser(post.body)}
                        </div>
                        <aside className={cx('Post-actions', {open: this.state.dropdownOpen})}>
                            <ul>
                                <li className="item-like">
                                    <button className="Button Button--link" type="button" title="Like" onClick={() => handleClickPostCtrl('Like', post._id)}>
                                        <span className="Button-label">Like</span>
                                    </button>
                                </li>
                                <li className="item-reply">
                                    <button className="Button Button--link" type="button" title="Reply" onClick={() => handleClickPostCtrl('Reply', post._id)}>
                                        <span className="Button-label">Reply</span>
                                    </button>
                                </li>
                                <li>
                                    <ButtonDropdown
                                        isOpen={this.state.dropdownOpen}
                                        toggle={this.toggle}
                                        className={cx('ButtonGroup', 'Dropdown', 'dropdown', 'Post-controls', {open: this.state.dropdownOpen})}
                                    >
                                        <DropdownToggle className={cx('Dropdown-toggle', 'Button', 'Button--icon', 'Button--flat')}>
                                            {icon('ellipsis-h', {className: cx('Button-icon')})}
                                            <span className="Button-label"></span>
                                            {icon('caret-down', {className: cx('Button-caret')})}
                                        </DropdownToggle>
                                        <DropdownMenu tag='ul' className={cx('Dropdown-menu')} right>
                                            {
                                                buttonsPost.map( btn => {
                                                    if (btn.name === 'separator') return (<li key={btn._id} className={cx('Dropdown-separator')}></li>)
                                                    return (
                                                        <li key={btn._id}>
                                                            <button className="hasIcon" type="button" title={btn.name} onClick={() => handleClickPostCtrl(btn.name, post._id)}>
                                                                {icon(btn.icon, {className: cx('Button-icon')})}
                                                                <span className="Button-label">{btn.name}</span>
                                                            </button>
                                                        </li>
                                                )})
                                            }
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </li>
                            </ul>
                        </aside>
                        <footer className="Post-footer"><ul></ul></footer>
                    </div>
                </article>
            </div>
        );
    }
}
export default PostBox;
