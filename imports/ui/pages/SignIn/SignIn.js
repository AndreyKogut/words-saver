import React from 'react';
import PropTypes from 'prop-types';

import './SignIn.less';

const SignIn = ({ username, password, onUsernameChange, onPasswordChange, onLogin }) => (
  <div className="content login-form text-center">
    <form onSubmit={onLogin} className="login-form__content">
      <div className="form-group">
        <label>
          Login
        </label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={onUsernameChange}
        />
      </div>
      <div className="form-group">
        <label>
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div className="form-group">
        <input type="submit" className="btn btn-primary" value="Login" />
      </div>
    </form>
  </div>
);

SignIn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default SignIn;
