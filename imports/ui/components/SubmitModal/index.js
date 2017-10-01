import { compose, withHandlers, withState } from 'recompose';
import SubmitModal from './SubmitModal';

const enhance = compose(
  withState('isOpen', 'setModalState', false),
  withHandlers({
    hideModal: ({ setModalState }) => () => {
      setModalState(false);
    },
    showModal: ({ setModalState }) => () => {
      setModalState(true);
    },
    handleSubmit: ({ onSubmit, setModalState }) => () => {
      onSubmit();
      setModalState(false);
    },
  })
);

export default enhance(SubmitModal);
