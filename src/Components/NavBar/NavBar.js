import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNuv';
import { authSelectors } from '../../Redux/auth';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavigationBar = ({ isAuthenticated }) => (
  <Navbar collapseOnSelect bg="dark" variant="dark">
    <Navbar.Brand>Phone Book</Navbar.Brand>
    <Navigation /> {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </Navbar>
);

NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavigationBar);
