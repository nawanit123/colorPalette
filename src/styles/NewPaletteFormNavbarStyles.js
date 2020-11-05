import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from '../constants';
import sizes from './sizes';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: '54px',
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
  btnGroup: {
    padding: 0,
    marginLeft: 'auto',
    display: 'flex',
    '& a': {
      textDecoration: 'none',
    },
    [sizes.down('xs')]: {
      marginRight: '0.5rem',
    },
  },
  button: {
    margin: '0 0.5rem',
    [sizes.down('xs')]: {
      margin: '0 0.2rem',
      padding: 0,
    },
  },
  createPallet: {
    [sizes.down('sm')]: {
      fontSize: '0.8rem',
    },
    [sizes.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
}));

export default styles;
