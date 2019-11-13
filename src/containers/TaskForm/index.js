import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import styles from './styles';
import * as modalActions from '../../actions/modal';

function TaskForm({ classes, modalActionCreators, handleSubmit }) {
  const handleSubmitForm = data => {
    console.log(data);
  };

  const { hideModal } = modalActionCreators;
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container>
        <Grid item md={12}>
          <Field name="title" component="input" />
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Title"
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Description"
            margin="normal"
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={hideModal}
              type="submit"
            >
              Lưu lại
            </Button>
            <Button variant="contained" onClick={hideModal}>
              Hủy bỏ
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func
  }),
  handleSubmit: PropTypes.func
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
