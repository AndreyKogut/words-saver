import R from 'ramda';
import { lifecycle } from 'recompose';

export default lifecycle({
  componentWillUnmount() {
    const { onUnmount = R.T } = this.props;

    onUnmount();
  },
});
