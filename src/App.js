import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import contactOperations from './Redux/contact/operations/contactOperations';
import authOperations from './Redux/auth/operations/authOperations';
import selectors from './Redux/contact/selectors';
import styles from './App.module.css';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import UserMenu from './Components/UserMenu/UserMenu';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className={styles.wrapper}>
        <ContactForm />
        <CSSTransition
          in={contacts.length > 1}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <ContactList />
        <Registration />
        <Login />
        <UserMenu />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
