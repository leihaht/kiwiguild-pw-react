import App from './App';
import { connect } from 'react-redux';

import { getForums } from './actions';

// store 안의 state 값을 props 로 연결해줍니다.
let mapStateToProps = (state) => {
    return {
      forums: state.app.get('forums'),//state.app.forums,
      currentForum: state.app.get('currentForum'),
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

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
