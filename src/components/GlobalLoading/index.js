import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import LoadingIcon from '../../asserts/image/loading.gif';
import * as uiActions from '../../actions/ui';

function GlobalLoading({ classes, showLoading }) {
  let xhtml = null;
  if (showLoading) {
    xhtml = (
      <div className={classes.globalLoading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon} />
      </div>
    );
  }
  return xhtml;
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
};

const mapStateToProps = state => {
  console.log(state.ui);
  return {
    showLoading: state.ui.isShowLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(GlobalLoading);
