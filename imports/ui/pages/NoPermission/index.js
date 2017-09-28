import { Meteor } from 'meteor/meteor';
import { lifecycle } from 'recompose';

import NoPermission from './NoPermission';

const enhance = lifecycle({
  componentWillMount() {
    const { history } = this.props;

    if (Meteor.userId()) {
      history.push('/');
    }
  },
});

export default enhance(NoPermission);
