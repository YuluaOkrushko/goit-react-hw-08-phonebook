import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../Redux/auth/operations/authOperations';
// import styles from './Login.module.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(Login);
