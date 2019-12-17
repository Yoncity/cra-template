import React, { Component } from 'react';
import './SignIn.scss';
import { APP_TITLE } from '../../constants/';
import { HOME } from '../../constants/routes/';
import { connect } from 'react-redux';
import authenticate from '../../actions/authAction';
import { Redirect } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { USERNAME_ERROR, PASSWORD_ERROR } from '../../constants/error';

export const validateForm = (username, password) => {
  try {
    if (username == null || username === '') {
      throw new Error(USERNAME_ERROR);
    }
    if (password == null || password === '') {
      throw new Error(PASSWORD_ERROR);
    }
    return true;
  } catch (error) {
    return error.message;
  }
};

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  };

  getFormInput = ({ target: { name, value } }) => {
    if (name === 'username' || name === 'password') this.setState({ [name]: value });
  };

  signIn = () => {
    const { username, password } = this.state;
    const { authenticate } = this.props;
    if (validateForm(username, password)) {
      authenticate({ username, password });
    }
  };

  renderSignInFields = (display, error) => {
    return (
      <div id="signin-container">
        <div id="signin-fields">
          <p id="signin-title">{APP_TITLE}</p>
          <p className="error" style={{ display }}>
            {error}
          </p>
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.getFormInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.getFormInput}
            />
            <input type="submit" id="sign-in-button" onClick={this.signIn} value="Sign In" />
          </form>
        </div>
      </div>
    );
  };

  render() {
    const { isAuth, loading, error } = this.props;
    if (isAuth) {
      return <Redirect to={HOME.link} />;
    } else {
      if (loading) {
        return <Loader />;
      } else if (error) {
        return this.renderSignInFields('block', error);
      } else {
        return this.renderSignInFields('none', error);
      }
    }
  }
}

const mapState = ({ authenticate: { isAuth, loading, error } }) => ({
  isAuth,
  loading,
  error,
});

const mapDispatch = dispatch => ({
  authenticate: user => dispatch(authenticate(user)),
});

export default connect(mapState, mapDispatch)(SignIn);
