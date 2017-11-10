// https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
/*
 * 코드스플리팅을 할 때마다 이렇게 상태관리를 해주는건 매우 귀찮을것입니다.
 * 이를 간편하게 하기위하여 페이스북의 개발자 Andrew Clark (acdlite) 가 공유한 코드
 * https://velopert.com/3421
 */

import React from 'react';

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({default: Component}) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

// example of user
// const Foo = asyncComponent(() => import('./Foo'))
// const Bar = asyncComponent(() => import('./Bar'))
