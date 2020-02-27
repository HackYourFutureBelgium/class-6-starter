import React, { useState, useEffect } from 'react';
import {
  AppBar, Container, Toolbar, IconButton, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Menu from './Menu'
import API_URL from './api';
import Login from './Login';

const HELLO_ENDPOINT = `${API_URL()}/hello`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();
  const [greeting, setGreeting] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(HELLO_ENDPOINT)
      .then((res) => res.json())
      .then((val) => setGreeting(val.greeting));
  });

  return (
    <div className="App">
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
      {/* wrapper of the "body" */}
      <Container maxWidth="lg">
        <p>
        The backend says: {greeting}
        </p>
        <p>
          I am talking to {API_URL()}
        </p>

      </Container>
    </div>
  );
}

export default App;
