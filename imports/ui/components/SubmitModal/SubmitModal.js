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

const SubmitModal = ({ title, isOpen, description, hideModal, handleSubmit }) => (
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
      <button className="btn btn-primary" onSubmit={handleSubmit}>
        Submit
      </button>
    </ModalFooter>
  </Modal>
);

SubmitModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitModal;
