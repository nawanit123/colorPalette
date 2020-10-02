import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorBoxList from './DraggableColorBoxList';
import arrayMove from 'array-move';
import NewPaletteFormNavbar from './NewPaletteFormNavbar';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height: '100vh',
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
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
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center !important',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
  },
  button: {
    width: '50%',
  },
}));

NewPalette.defaultProps = {
  maxColors: 20,
};
export default function NewPalette(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [colors, setColors] = useState(props.palettes[0].colors);
  const paletteFull = colors.length >= props.maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
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

  const handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;

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
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
              onClick={removeColors}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={generateRandomColor}
              disabled={paletteFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteFull={paletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
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
