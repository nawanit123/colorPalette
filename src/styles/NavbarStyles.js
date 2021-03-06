import sizes from './sizes';
export default {
  Navbar: {
    display: 'flex',
    height: '5vh',
    alignItems: 'center',
    margin: 0,
    marginTop: '0.2rem',
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    [sizes.down('xs')]: {
      display: 'none',
    },
  },
  levelSpan: {
    [sizes.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8px',
    },
    '&  .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover': {
      backgroundColor: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginTop: '-2.5px',
    },
    [sizes.down('sm')]: {
      width: '150px',
    },
    [sizes.down('xs')]: {
      width: '110px',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
  selectField: {
    [sizes.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
};
