import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";


import ReactDOM from 'react-dom';
import App from '../App';
import IDE from '../IDE';
import { Router, Route, IndexRoute } from 'react-router';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  app: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  }
}

  function NavBar(props) {
    const { classes } = props;

    function isLoggedIn() {
      isLoggedIn = true;
      ReactDOM.render(<IDE />, document.getElementById('root2'));
      document.getElementById('root').remove();
      document.getElementById('speakBtn').remove();
      //document.querySelector('.runkit-notebook-container').style.visibility = "visible";
    }

    return (
      <div className={classes.root}>
        <AppBar className={classes.app} position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Quick &lt; &frasl; &gt; Code
            </Typography>
            <Button id="speakBtn" onClick={isLoggedIn} color="inherit">Speak Code</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

//}

//function NavBar(props) {}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
