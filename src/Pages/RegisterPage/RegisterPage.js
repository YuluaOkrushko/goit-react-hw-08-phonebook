import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authOperations } from '../../Redux/auth';
import withAuthRedirect from '../../Common/hoc/withAuthRedirect';
import './RegisterPage.css';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.name });
  // };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="registerPageWrapper">
        <div className="registerPageContainer">
          <Form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Enter name"
                autoComplete="off"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter email"
                autoComplete="off"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter password"
                autoComplete="off"
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: records => dispatch(authOperations.register(records)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps),
)(RegisterPage);
