import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const ColorPickerForm = (props) => {
  const { paletteFull, addNewColor, colors } = props;
  const [mainColor, setMainColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [myColor, setMyColor] = useState('#000000');
  const [newName, setNewName] = useState('');

  const updateCurrentColor = (color) => {
    if (color.rgb !== mainColor) {
      setMainColor(color.rgb);
      setMyColor(color.hex);
    }
  };
  const handleChangeColorName = (evt) => {
    setNewName(evt.target.value);
  };
  const handleSubmit = () => {
    let newColor = {
      color: myColor,
      name: newName,
    };
    addNewColor(newColor);
    setNewName('');
  };
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      colors.every(({ color }) => color !== myColor)
    );
  }, [colors, myColor]);
  return (
    <div>
      <ChromePicker
        color={mainColor}
        onChangeComplete={updateCurrentColor}
        disableAlpha={true}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          name="newName"
          value={newName}
          onChange={handleChangeColorName}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color already used!',
          ]}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{ backgroundColor: myColor }}
          disabled={paletteFull}
        >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
