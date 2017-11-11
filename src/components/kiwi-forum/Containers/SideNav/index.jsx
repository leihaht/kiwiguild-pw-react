import React, { Component } from 'react';
import SideNav from './SideNav';
import { connect } from 'react-redux';

import { getForums } from './actions';

class SideNavContainer extends Component {
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
                <SideNav />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNavContainer);
