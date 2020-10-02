import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default function NewPalettePopUpForm(props) {
  const [newPaletteName, setNewPaletteName] = useState('');
  const { handleSubmit, hideForm, open } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      props.palettes.every(({ paletteName }) => paletteName !== value)
    );
  }, [props.palettes]);

  const handleChangePaletteName = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  return (
    <Dialog open={open} onClose={hideForm} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a name for your new beautiful palette. Make sure it's
          unique!
          <Picker />
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
            <TextValidator
              label="PaletteName"
              value={newPaletteName}
              name="newPaletteName"
              onChange={handleChangePaletteName}
              fullWidth
              margin="normal"
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter a Palette Name',
                'PaletteName must be unique',
              ]}
            />

            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
