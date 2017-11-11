import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <ul>
            { navigationLinks.map(link => {
              return (
                <li key={link.id}>
                    {link.name}
                </li>
              );
            }) }
          </ul>
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
