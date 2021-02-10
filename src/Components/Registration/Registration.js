import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../Redux/auth/operations/authOperations';
// import styles from './Registration.module.css';

class Registration extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h2>Register form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  Registration,
);
