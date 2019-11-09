import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

import styles from './styles';

function TaskItem({ classes, status, task }) {
  const { id, title, description } = task;
  return (
    <Card key={id} className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2">{title}</Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab
          size="small"
          color="primary"
          aria-label="edit"
          className={classes.fab}
        >
          <EditIcon />
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="delete"
          className={classes.fab}
        >
          <DeleteIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(TaskItem);
