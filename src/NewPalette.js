import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import DraggableColorBoxList from './DraggableColorBoxList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import arrayMove from 'array-move';
import NewPaletteFormNavbar from './NewPaletteFormNavbar';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar, // necessary for content to be below app bar
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

NewPalette.defaultProps = {
  maxColors: 20,
};
export default function NewPalette(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mainColor, setMainColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [myColor, setMyColor] = useState('#000000');
  const [colors, setColors] = useState(props.palettes[0].colors);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      colors.every(({ color }) => color !== myColor)
    );
  }, [colors, myColor, props.palettes]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (color) => {
    if (color.rgb !== mainColor) {
      setMainColor(color.rgb);
      setMyColor(color.hex);
    }
  };
  const addNewColor = () => {
    const newColor = {
      color: myColor,
      name: newName,
    };
    setColors([...colors, newColor]);
    setNewName('');
  };
  const removeColors = () => {
    setColors([]);
  };

  const generateRandomColor = () => {
    const allColors = props.palettes.map((palette) => palette.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);

    while (colors.includes(allColors[rand]) && colors.length <= 20) {
      rand = Math.floor(Math.random() * allColors.length);
    }
    setColors((prevColors) => {
      return [...prevColors, allColors[rand]];
    });
  };
  const handleChangeColorName = (evt) => {
    setNewName(evt.target.value);
  };

  const handleSubmit = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors,
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };
  const removeColorBox = (colorName) => {
    setColors((colors) => colors.filter((color) => color.name !== colorName));
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };
  return (
    <div className={classes.root}>
      <NewPaletteFormNavbar
        open={open}
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        handleSubmit={handleSubmit}
        palettes={props.palettes}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
          <Button variant="contained" color="secondary" onClick={removeColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={generateRandomColor}
            disabled={colors.length >= props.maxColors ? true : false}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={mainColor}
          onChangeComplete={updateCurrentColor}
          disableAlpha={true}
        />
        <ValidatorForm onSubmit={addNewColor}>
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
            style={
              colors.length >= props.maxColors
                ? {
                    backgroundColor: 'white',
                    border: '1px solid black',
                    color: 'black',
                  }
                : { backgroundColor: myColor }
            }
            disabled={colors.length >= props.maxColors ? true : false}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorBoxList
          colors={colors}
          removeColorBox={removeColorBox}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
