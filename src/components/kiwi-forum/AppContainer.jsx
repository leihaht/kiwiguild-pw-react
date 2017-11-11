import React, { Component } from 'react';
import App from './App';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getForums } from './actions';

class AppContainer extends Component {
    componentDidMount() {
      const {
        getForums,
      } = this.props;

      // get all forum list
      getForums();
    }

    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
      forums: state.app.get('forums'),
    };
};

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
let mapDispatchToProps = (dispatch) => {
    return {
      getForums: () => { dispatch(getForums()); }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer));
