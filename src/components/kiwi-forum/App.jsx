import React, { Component } from 'react';

// components
import Header from './Components/Header'

class App extends Component {
  componentDidMount() {
    const {
      getForums,
      params,
    } = this.props;

    // get all forum list
    getForums();

    // set current forum based on route
    const currentForum = '';//params.forum || '';
    //updateCurrentForum(currentForum);


  }


  componentDidUpdate() {
    const {
      forums,
      params,
      currentForum,
      updateCurrentForum,
    } = this.props;

    //let newCurrentForum = '';
    //if (params.forum) newCurrentForum = params.forum;
    //else if (forums) newCurrentForum = forums[0].forum_slug;

    // update current forum if necessery
    //if (newCurrentForum !== currentForum) updateCurrentForum(newCurrentForum);
  }



  render() {
      const { forums } = this.props;


    // render only if we get the forum lists
    if (forums) {
        const forumList = forums.map(
            (forum, i) => (
                <p key={i}>{forum.forum_name}
                </p>
            )
        );
        return (
            <div>
                <Header />
                {forumList}
            </div>
        );
    }

    return (
        <div>Loading...</div>
    );
  }
}

export default App;
