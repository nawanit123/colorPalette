import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import NewPalettePopUpForm from './NewPalettePopUpForm';
import styles from './styles/NewPaletteFormNavbarStyles';

const NewPaletteFormNavbar = (props) => {
  const { handleDrawerOpen, open, handleSubmit, palettes } = props;
  const classes = styles();
  const [formShowing, setFormShowing] = useState(false);
  const showForm = () => {
    setFormShowing(true);
  };
  const hideForm = () => {
    setFormShowing(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen()}
            edge="start"
            className={clsx(classes.menuButton, { [classes.hide]: open })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create New Palette
          </Typography>

          <div className={classes.btnGroup}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={showForm}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {formShowing && (
        <NewPalettePopUpForm
          handleSubmit={handleSubmit}
          classes={classes}
          palettes={palettes}
          hideForm={hideForm}
        />
      )}
    </div>
  );
};

export default NewPaletteFormNavbar;
