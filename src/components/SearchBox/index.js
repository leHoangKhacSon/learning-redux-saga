import React from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import styles from './styles';

function SearchBox({ classes, handleChange }) {
  return (
    <div>
      <h1>Search Box</h1>
      <TextField
        id="standard-basic"
        placeholder="Nhập từ khóa"
        autoComplete="off"
        className={classes.textField}
        onChange={handleChange}
      />
    </div>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SearchBox);
