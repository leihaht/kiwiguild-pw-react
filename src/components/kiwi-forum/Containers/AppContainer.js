import React, { Component } from 'react';
import App from '../Components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { withRouter } from 'react-router-dom'

//import { getForums, updateCurrentForum } from 'modules/app.module';
import * as appActions from 'modules/app.module';

class KiwiForum extends Component {
    componentDidMount() {
      const {
        AppActions,
        match
      } = this.props;

      // set current forum based on route
      //const currentForum = match.params.forum || '';
      //AppActions.updateCurrentForum(currentForum);

      // get all forum list
      //AppActions.getForums(currentForum);
    }

    componentDidUpdate() {
      const {
        tags,
        match,
        AppActions,
        currentForum
      } = this.props;

      const newCurrentForum = (match.params.forum !== undefined) ? match.params.forum : '';

      // update current forum if necessery
      if (newCurrentForum !== currentForum) {
          AppActions.updateCurrentForum(newCurrentForum);
          AppActions.getForums(newCurrentForum);
      }
    }

    render() {
      const { tags } = this.props;

      // render only if we get the forum lists
      if (tags) {
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
      tags: state.app.get('tags'),
      currentForum: state.app.get('currentForum')
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
/*
let mapDispatchToProps = (dispatch) => {
    return {
      getForums: (currentForum) => { dispatch(getForums(currentForum)); },
      updateCurrentForum: (currentForum) => { dispatch(updateCurrentForum(currentForum)); },
    };
}
*/
// using bindActionCreators
let mapDispatchToProps = (dispatch) => {
    return {
        AppActions: bindActionCreators(appActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KiwiForum);
