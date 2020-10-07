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
  const { handleSubmit, hideForm } = props;
  const [stage, setStage] = useState('form');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      props.palettes.every(({ paletteName }) => paletteName !== value)
    );
  }, [props.palettes]);

  const handleChangePaletteName = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  const showEmojiPicker = () => {
    setStage('emoji');
  };
  const savePalette = (emoji) => {
    let newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native,
    };
    handleSubmit(newPalette);
    setStage('');
  };
  return (
    <div>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === 'form'}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique!
            </DialogContentText>
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
          </DialogContent>

          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
