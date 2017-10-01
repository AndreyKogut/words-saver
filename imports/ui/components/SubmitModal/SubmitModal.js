import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
} from 'react-modal-bootstrap';

import './SubmitModal.less';

const SubmitModal = (props) => {
  const {
    title,
    isOpen,
    description,
    hideModal,
    showModal,
    handleSubmit,
    iconStyles,
    buttonStyles,
    buttonText,
  } = props;

  return (
    <div className="submit-modal">
      <button onClick={showModal} className={buttonStyles}>
        {buttonText}
        <i className={iconStyles} />
      </button>
      <Modal isOpen={isOpen} onRequestHide={hideModal}>
        <ModalHeader>
          <ModalClose onClick={hideModal} />
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>{description}</p>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-default" onClick={hideModal}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

SubmitModal.defaultProps = {
  iconStyles: '',
  buttonText: '',
};

SubmitModal.propTypes = {
  iconStyles: PropTypes.string,
  buttonText: PropTypes.string,
  buttonStyles: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitModal;
