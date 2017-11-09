import React, { Component } from 'react';


// components
import Header from './Components/Header'

class App extends Component {
  componentDidMount() {
    const {
      getForums,
    } = this.props;

    // get all forum list
    getForums();

  }


  componentDidUpdate() {
    const {
      forums,
      params,
      currentForum,
      updateCurrentForum,
    } = this.props;

  }

  render() {
      const { forums } = this.props;

    // render only if we get the forum lists
    if (forums) {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }

    return (
        <div>Loading...</div>
    );
  }
}

export default App;
