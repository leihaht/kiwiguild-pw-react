import React from 'react';
import { connect } from 'react-redux';

//import { appOperations } from 'modules/app';

import Header from './Header';

const navitems = [{
    "title" : "Home",
    "url" : "/"
},{
    "title" : "Forum",
    "url" : "/forum"
}]

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        /*
        this.state = {
            isOpen: {
                mobilemenu: false,
                usermenu: false
            }
        };
        */
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    /*
    toggle(menu, e) {
        this.setState({
            isOpen: {
                ...this.state.isOpen,
                [menu]: !this.state.isOpen[menu]
            }
        });
    }
    //in the child element
    onClick={(e) => toggle(menu, e)}
    // Passing Arguments to Event Handlers
    // https://reactjs.org/docs/handling-events.html
    */

    render() {
        const { isLoggedin, user } = this.props;
        return (
            <Header
                isLoggedin={isLoggedin}
                navitems={navitems}
                toggle={this.toggle}
                isOpen={this.state.isOpen}
                username={user.get('name')}
                />
        );
    }
}

export default connect(
    (state) => ({
        //isOpenComposer: state.app.get('isOpenComposer'),
        user: state.session.get('user'),
        isLoggedin: state.session.get('isLoggedin'),
    }),
    (dispatch) => ({
        //openComposer: () => {dispatch(appOperations.openComposer())},
    })
)(HeaderContainer);
