import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const NewPaletteFormNavbar = (props) => {
  const { classes, handleDrawerOpen, open, handleSubmit } = props;
  const [newPaletteName, setNewPaletteName] = useState('');
  const handleChangePaletteName = (evt) => {
    setNewPaletteName(evt.target.value);
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      props.palettes.every(({ paletteName }) => paletteName !== value)
    );
  }, [props.palettes]);
  return (
    <div>
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
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
            <TextValidator
              label="PaletteName"
              value={newPaletteName}
              name="newPaletteName"
              onChange={handleChangePaletteName}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter a Palette Name',
                'PaletteName must be unique',
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NewPaletteFormNavbar;
