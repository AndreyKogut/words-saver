import React from 'react';
import { Meteor } from 'meteor/meteor';
import { lifecycle } from 'recompose';

const loginPath = '/sign-in';

const handleUrlUpdate = (history) => {
  if (!Meteor.userId() && history.location.pathname !== loginPath) {
    history.push(loginPath);
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
