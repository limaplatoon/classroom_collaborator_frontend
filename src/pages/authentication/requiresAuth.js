import React from 'react'
import { Redirect, Route } from 'react-router-dom'

class ProtectedRoute extends React.Component {

  render() {
    const Component = this.props.component;
    const path = this.props.path;
    const isAuthenticated = localStorage.getItem('token');

    return isAuthenticated ? (
      <Route path={path} component={Component} />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      );
  }
}

export default ProtectedRoute;