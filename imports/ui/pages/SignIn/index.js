import { Meteor } from 'meteor/meteor';
import { compose, withState, withHandlers } from 'recompose';

import { handleError } from '../../helpers';

import SignIn from './SignIn';

const enhance = compose(
  withState('username', 'setUsername', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    onUsernameChange: ({ setUsername }) => (event) => setUsername(event.target.value),
    onPasswordChange: ({ setPassword }) => (event) => setPassword(event.target.value),
    onLogin: ({ username, password }) => (event) => {
      event.preventDefault();

      Meteor.loginWithPassword(username, password, handleError());
    },
  })
);

export default enhance(SignIn);
