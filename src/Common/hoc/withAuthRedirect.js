import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authSelectors } from '../../Redux/auth';

const withAuthRedirect = Component => {
  function withAuthRedirect({ isAuthenticated, ...restProps }) {
    return isAuthenticated ? <Redirect to="/" /> : <Component {...restProps} />;
  }
  const mapStateToProps = state => ({
    isAuthenticated: authSelectors.isAuthenticated(state),
  });
  return connect(mapStateToProps)(withAuthRedirect);
};

export default withAuthRedirect;
