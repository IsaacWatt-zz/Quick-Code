import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import isaac from'./isaac.png';
import amir from'./amir.png';
import iyad from'./iyad.png';
import kris from'./kris.png';
import logo from'./logo.png';


import './text.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>Vision</b> <br/>
            Quick Code is the ultimate abstraction .. lol. We are using <b>Microsoft Azure</b> and dsds
            to break the barrier of syntax. Quick code is the perfect solution for beginner programmers.
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}>
          <Paper className={classes.paper}><img src={logo} alt="Smiley face" height="auto" height="200"/></Paper>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>Impact</b> <br/>
          my name is Isaac, and I like to party (hotrod is one of my favorite movies).
          Quick Code is something that I have pictured for a while now. nwHacks is extremely lucky
          to be the first to see this. I am so proud that this beta software works at all, and truly belive in its potential.
          Learning to code is frustrating, and I think talking through your code is not only a great way to learn how code looks, but
          also the pedantic syntax crap.
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={isaac} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>Something</b> <br/>
            my name is Isaac.
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={amir} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>Something</b> <br/>
    here
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={iyad} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>Something</b> <br/>
            my name is Isaac.
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={kris} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
