import R from 'ramda';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { lifecycle } from 'recompose';

const loginPath = '/sign-in';
const rejectPath = '/rejected';

const handleUrlUpdate = (history) => {
  if (!Meteor.userId() && !R.contains(history.location.pathname, [loginPath, rejectPath])) {
    history.push(rejectPath);
  }
};

const enhance = lifecycle({
  componentWillMount() {
    const { history } = this.props;

    history.listen(handleUrlUpdate(history));
    handleUrlUpdate(history);
  },
});

export default enhance(() => <div />);
