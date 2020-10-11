import sizes from './sizes';
export default {
  Palette: {
    height: ' 100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: ' flex',
    flexDirection: ' column',
    margin: ' 0 0.2rem',
    [sizes.down('md')]: {
      height: '95vh',
    },
  },
  colors: {
    height: '85vh',
    [sizes.down('md')]: {
      height: '90vh',
    },
  },
};
