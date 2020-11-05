import { makeStyles } from '@material-ui/core/styles';
import sizes from './sizes';
const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  picker: {
    width: '225px !important',
    margin: '1.2rem auto !important',
    [sizes.down('xs')]: {
      width: '50% !important',
    },
  },
  addColor: {
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  colorNameInput: {
    width: '100%',
    height: '70px',
  },
}));

export default styles;
