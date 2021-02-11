// import styles from './UserMenu.module.css';
import React from 'react';
import { connect } from 'react-redux';
import authOperations from '../../Redux/auth/operations/authOperations';
import authSelectors from '../../Redux/auth/authSelectors';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img scr={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
