import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import CloseIcon from '@material-ui/icons/Clear';
import Modal from '@material-ui/core/Modal';

import styles from './styles';
import * as modalActions from '../../actions/modal';

function CommonModal({ open, classes, component, modalActionCreators, title }) {
  const { hideModal } = modalActionCreators;
  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <CloseIcon className={classes.icon} onClick={hideModal} />
        </div>
        <div className={classes.content}>{component}</div>
      </div>
    </Modal>
  );
}

CommonModal.propTypes = {
  open: PropTypes.func,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func
  }),
  classes: PropTypes.object,
  component: PropTypes.object,
  title: PropTypes.string
};

const mapStateToProps = state => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(CommonModal);
