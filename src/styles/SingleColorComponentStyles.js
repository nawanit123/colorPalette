import sizes from './sizes';
export default {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: '90%',
  },
  goBack: {
    position: 'relative',
    backgroundColor: 'black',
    display: 'inline-block',
    width: '20%',
    height: '50%',
    marginBottom: '-4.5px',
    '& a': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100px',
      height: '30px',
      marginLeft: '-50px',
      marginTop: '-15px',
      outline: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      color: 'white',
      border: 'none',
      textDecoration: 'none',
      textAlign: 'center',
    },
    [sizes.down(['lg'])]: {
      width: '25%',
      height: '33.3333%',
    },
    [sizes.down(['md'])]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down(['sm'])]: {
      width: '100%',
      height: '10%',
    },
  },
};
