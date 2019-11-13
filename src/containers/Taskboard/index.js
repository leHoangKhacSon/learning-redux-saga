import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import { STATUSES } from '../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import SearchBox from '../../components/SearchBox';

function TaskBoard({
  classes,
  taskActionCreators,
  listTask,
  modalActionCreators
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }, []);
  const renderBroad = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFilter = listTask.filter(
            task => task.status === status.value
          );
          return (
            <TaskList key={status.value} task={taskFilter} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  const handleClose = () => {
    setOpen(() => false);
  };

  const openForm = () => {
    const {
      showModal,
      changeModalTitle,
      changeModalContent
    } = modalActionCreators;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
  };

  const renderForm = () => {
    let xhtml = null;
    xhtml = <TaskForm handleClose={handleClose} open={open} />;
    return xhtml;
  };

  const loadData = () => {
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  };

  const handleFilter = event => {
    const { value } = event.target;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  const renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };

  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={loadData}
      >
        Load data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon /> Add new tasks
      </Button>
      {renderSearchBox()}
      {renderBroad()}
      {renderForm()}
    </div>
  );
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func
  }),
  listTask: PropTypes.array
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskBoard)
);
