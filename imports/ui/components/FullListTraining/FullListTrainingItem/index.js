import { compose, withState, withHandlers } from 'recompose';

import FullListTrainingItem from './FullListTrainingItem';

const enhance = compose(
  withState('isVisible', 'setIsVisible', false),

  withHandlers({
    showHidden: ({ setIsVisible }) => () => setIsVisible(true),
    hideHidden: ({ setIsVisible }) => () => setIsVisible(false),
  })
);

export default enhance(FullListTrainingItem);
