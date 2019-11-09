import React from 'react';

import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Taskboard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
