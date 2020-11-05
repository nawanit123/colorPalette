import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
import { drawerWidth } from '../constants';
const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100vw',
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
    [sizes.down('sm')]: {
      width: '100vw',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar, // necessary for content to be below app bar
    justifyContent: 'flex-end',
    width: '100%',
    margin: '0',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
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
    alignItems: 'center !important',
  },
  buttons: {
    width: '100%',
    [sizes.down('sm')]: {
      width: '90%',
    },
  },
  button: {
    width: '50%',
    [sizes.down('sm')]: {
      fontSize: '0.6rem',
    },
  },
}));

export default styles;
