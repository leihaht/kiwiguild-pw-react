import React, { Component } from 'react';

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
                {title}
            </div>
        );
    }

    return (
        <div>Loading...</div>
    );
  }
}

export default App;
