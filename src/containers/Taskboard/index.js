import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import { STATUSES } from '../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read document material ui',
    status: 0
  },
  {
    id: 2,
    title: 'Read book',
    description: 'Read document redux saga',
    status: 1
  },
  {
    id: 3,
    title: 'Read book',
    description: 'Read document reactjs',
    status: 2
  },
  {
    id: 4,
    title: 'Read book',
    description: 'Read document redux',
    status: 0
  }
];

function TaskBoard({ classes }) {
  const [open, setOpen] = useState(false);
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
    setOpen(() => true);
  };

  const renderForm = () => {
    let xhtml = null;
    xhtml = <TaskForm handleClose={handleClose} open={open} />;
    return xhtml;
  };

  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon /> Add new tasks
      </Button>
      {renderBroad()}
      {renderForm()}
    </div>
  );
}

export default withStyles(styles)(TaskBoard);
