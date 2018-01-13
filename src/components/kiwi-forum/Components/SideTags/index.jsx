import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

const cx = classnames.bind(styles);

class SideTags extends Component {
    renderNavLinks() {
      const { forums } = this.props;

      if (forums) {
        return forums.map((forum) => {
          return {
            id: forum._id,
            name: forum.forum_name,
            link: `/${forum.forum_slug}`,
          };
        });
      }

      return null;
    }

  render() {
      const navigationLinks = this.renderNavLinks();

      if (navigationLinks) {
        return (
            <div className={cx('ButtonGroup', 'Dropdown', 'dropdown', 'App-titleControl', 'Dropdown--select', 'itemCount15')}>
                <ul className={cx('Dropdown-menu', 'dropdown-menu')}>
                    <li className={cx('item-allDiscussions', 'active')}>
                        <a href="#"
                            active="true"
                            className={cx('hasIcon')}
                            type="button"
                            title="All Discussions">
                                <i className={cx('icon', 'fa', 'fa-comments-o', 'Button-icon')}></i><span className={cx('Button-label')}>All Discussions</span>
                        </a>
                    </li>
                    <li className={cx('item-tags')}>
                        <a href="#/tags"
                            active="false"
                            className={cx('hasIcon')}
                            type="button"
                            title="Tags">
                                <i className={cx('icon', 'fa', 'fa-th-large', 'Button-icon')}></i><span className={cx('Button-label')}>Tags</span></a>
                    </li>
                    <li className={cx('Dropdown-separator')}></li>
                    { navigationLinks.map(link => {
                        return (
                            <li
                                key={link.id}
                                className={cx('item-tag'+link.id)}
                            >
                                <a
                                    className={cx('TagLinkButton', 'hasIcon')}
                                    href="#"
                                    title="Test out Flarum in this tag. Discussions in this tag will be deleted every so often.">
                                        <span className={cx('icon', 'TagIcon', 'Button-icon')}></span>{link.name}
                                </a>
                            </li>
                        );
                    }) }
                </ul>
            </div>
        );
      }

      return null;
  }
}

// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
        //user: state.user,
        forums: state.app.get('forums'),
    };
}

export default connect(
    mapStateToProps
)(SideTags);
