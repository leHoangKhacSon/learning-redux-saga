import React from 'react';

import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';
import configureStore from '../../redux/configureStore';
import GlobalLoading from '../../components/GlobalLoading';
import 'react-toastify/dist/ReactToastify.css';

import CommonModal from '../../components/Modal';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalLoading />
        <CommonModal />
        <Taskboard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
