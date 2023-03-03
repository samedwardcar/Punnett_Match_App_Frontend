import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { AppBar } from '@material-ui/core/AppBar';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button href='/' color="inherit">Home</Button>
          <Button href='/Square' color="inherit">Square</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Log in</Button>
          <Button color="inherit">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}