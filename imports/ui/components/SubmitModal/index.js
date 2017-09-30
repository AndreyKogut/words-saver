import { compose, withHandlers, withState } from 'recompose';

import Modal from './SubmitModal';

const enhance = compose(
  withState('isOpen', 'setModalState', false),
  withHandlers({
    hideModal: ({ setModalState }) => () => {
      setModalState(false);
    },
    handleSubmit: ({ onSubmit, setModalState }) => () => {
      onSubmit();
      setModalState(false);
    },
  })
);

export default enhance(Modal);
