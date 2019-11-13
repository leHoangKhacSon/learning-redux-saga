import React from 'react';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import TaskItem from '../TaskItem';

function TaskList({ task, status, classes }) {
  return (
    <Grid key={status.value} item md={4} xs={12}>
      <Box mt={2} mb={1}>
        <div className={classes.status}>{status.label}</div>
      </Box>
      <div className={classes.wrapperListTask}>
        {task.map(item => {
          return <TaskItem key={item.id} status={status} task={item} />;
        })}
      </div>
    </Grid>
  );
}

export default withStyles(styles)(TaskList);
