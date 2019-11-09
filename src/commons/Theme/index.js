import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#0288D1',
    secondary: '#BDBDBD',
    error: '#FFC107'
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 5,
    backgroundColor: '#0097A7',
    textColor: '#FFFFFF',
    borderColor: '#CCCCCC'
  }
});

export default theme;
