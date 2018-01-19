import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

const cx = classnames.bind(styles);

class SideTags extends Component {
    // renderSideTags() {
    //   const { tags } = this.props;
    //
    //   if (tags) {
    //     return tags.map((tag) => {
    //       return {
    //         id: tag._id,
    //         name: tag.tag_name,
    //         link: `/${tag.forum_slug}`,
    //         color: tag.tag_color
    //       };
    //     });
    //   }
    //
    //   return null;
    // }

  render() {
      const { tags } = this.props;
      //const tags = this.renderSideTags();

      if (tags) {
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
                    { tags.map( t => {
                        return (
                            <li
                                key={t._id}
                                className={cx('item-tag'+t._id)}
                            >
                                <a
                                    className={cx('TagLinkButton', 'hasIcon')}
                                    href="#"
                                    title="Test out Flarum in this tag. Discussions in this tag will be deleted every so often.">
                                        <span className={cx('icon', 'TagIcon', 'Button-icon')} style={{backgroundColor: '#'+t.tag_color}}></span>{t.tag_name}
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
        tags: state.app.get('tags'),
    };
}

export default connect(
    mapStateToProps
)(SideTags);
