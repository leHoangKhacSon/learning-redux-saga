import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

function TaskForm({ open, handleClose, classes }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add new tasks</DialogTitle>
      <DialogContent>
        <div>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Title"
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Description"
            margin="normal"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(TaskForm);
