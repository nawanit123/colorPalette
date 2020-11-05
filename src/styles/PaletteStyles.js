import sizes from './sizes';
export default {
  Palette: {
    height: ' 100vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
    display: ' flex',
    flexDirection: ' column',
    margin: ' 0 0.2rem',
    marginBottom: '20px',
    [sizes.down('md')]: {
      height: '100vh',
    },
  },
  colors: {
    margin: '0',
    height: '85%',
    [sizes.down('sm')]: {
      height: '82%',
    },
    [sizes.down('xs')]: {
      height: '77%',
    },
  },
};
