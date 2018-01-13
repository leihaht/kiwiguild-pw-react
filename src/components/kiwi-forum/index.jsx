import React, { Component } from 'react';
import App from './App';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom'

import { appOperations } from './modules/app';

class KiwiForum extends Component {
    componentDidMount() {
      const {
        getForums,
        updateCurrentForum,
        match
      } = this.props;

      // get all forum list
      getForums();

      // set current forum based on route
      const currentForum = match.params.forum || 'general';
      updateCurrentForum(currentForum);

    }

    render() {
      const { forums } = this.props;

      // render only if we get the forum lists
      if (forums) {
        return (
            <App />
        );
      }

      return (
        <div>Loading...</div>
      );
    }
}

// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
      forums: state.app.get('forums'),
      currentForum: state.app.get('currentForum')
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
let mapDispatchToProps = (dispatch) => {
    return {
      getForums: () => { dispatch(appOperations.getForums()); },
      updateCurrentForum: (currentForum) => { dispatch(appOperations.updateCurrentForum(currentForum)); },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KiwiForum);
