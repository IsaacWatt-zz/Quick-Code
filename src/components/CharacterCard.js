import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import isaac from '../img/Isaac.jpg'
import amir from'../img/amir.png';
import iyad from'../img/iyad.png';
import kris from'../img/kris.jpg';
import logo from'../img/logo.png';

//import './text.css'

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
          <Paper className={classes.paper}><b>VISION</b> <br/><br />
            Software engineering and development have always been subject 
            to change over the years. With new tools, frameworks, and languages 
            being announced every year, it can be challenging for new developers 
            or students to keep up with the new trends the technological industry 
            as to offer. Creativity and project inspiration should not be limited 
            by syntactic and programming knowledge. Quick Code allows ideas to 
            come to life no matter the developer's experience, breaking the coding 
            barrier to entry allowing everyone equal access to express their ideas 
            in code. <br /> <br /> 
            <b>Our Stack</b> <br /> <br /> 
            Our Application uses <b>Microsoft Azures Cognitive Services</b> as a tool for speech to 
            text processing and speaker recognition API. Our backend was written in <b>Node.js</b> and <b>Python</b>. 
            Our web app was designed with <b>MaterializeUI</b> and <b>React JS</b>.
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
          <Paper className={classes.paper}><b>CHANGE</b> <br /> <br />
          my name is Isaac
          Quick Code is an idea that I have had for a while now, and to be honest thought was completely impossible. 
          I am stoked to be able to have a beta version of this product to be able to show off! From here, the goal is to 
          add full support for JavaScript, and in the future add additional support for more languages. Currently we are also
          looking into a custom web IDE! <br /> <br />
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={isaac} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><header><b>ETHIC</b></header><br/>
             My name is Amir, and I am an ML fanatic! When I'm not creating the next
          terminator I find myself relaxing by my bedside using Quick Code to run 
          through my thoughts of the day. Quick Code is an amazing platform to utilize
          anywhere in any project. It is so convinent that I can code on the go!
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={amir} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>CREATIVITY</b> <br/> <br /> 
          My name is Iyad, and I am looking to make a change! It is easy to fall within a 
          comfortable cycle in life, but without change you become stagnated. The best skills
          are aquired through challenge and change, that's why I use Quick Code for every project
          I develop. It's environment makes facing challenges easier, allowing me ignore the 
          pedantic syntax of new languages when expressing my thoughts in code! <br /> <br />
          </Paper>
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.paper}><img src={iyad} alt="Smiley face" height="auto" width="200"/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item sm={12} md={6} className="myGrid">
          <Paper className={classes.paper}><b>INSPIRATION</b> <br/> <br /> 
          My name is Kris, and I am looking to inspire. The only limits of creativity is 
            your imagination, and it should never be bounded by limitations of programming knowledge.
            That's the basis of what Quick Code is about, we want to foster the inspiration of new
            developers while granting tools to the experienced ones as well. Quick Code acts as a medium
            of developer knowledge, allowing anyone with a little bit of inspiration to create programs 
            that even imagination cannot bound.  <br /> <br />
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
