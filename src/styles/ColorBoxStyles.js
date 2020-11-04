import chroma from 'chroma-js';
import sizes from './sizes';
export default {
  colorBox: {
    width: ' 20%',
    height: (props) => (props.showAllColors ? '25%' : '50%'),
    maxWidth: '100vw',
    maxHeight: '100vh',
    display: ' inline-block',
    cursor: ' pointer',
    margin: ' 0 auto',
    position: ' relative',
    textTransform: ' uppercase',
    marginBottom: ' -4.5px',
    color: ' rgba(0, 0, 0, 0.5)',
    '&:hover button': {
      opacity: '1',
      transition: '0.1s',
    },
    [sizes.down(['lg'])]: {
      width: '25%',
      height: (props) => (props.showAllColors ? '20%' : '33.3333%'),
    },
    [sizes.down(['md'])]: {
      width: '50%',
      height: (props) => (props.showAllColors ? '10%' : '20%'),
    },
    [sizes.down(['sm'])]: {
      width: '100%',
      height: (props) => (props.showAllColors ? '5%' : '10%'),
    },
  },
  textStyle: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() >= 0.7
        ? 'rgba(0,0,0,0.5)'
        : 'rgba(255,255,255,0.9)',
  },
  darkColor: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() <= 0.08
        ? 'rgba(255,255,255,0.9)'
        : 'rgba(0,0,0,0.5)',
  },
  seeMoreLink: {
    textDecoration: 'none',
  },
  seeMore: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    color: (props) =>
      chroma(props.backgroundColor).luminance() <= 0.08
        ? 'rgba(255,255,255,0.9)'
        : 'rgba(0,0,0,0.5)',

    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textDecoration: 'none',
    outline: 'none',
    [sizes.down('sm')]: {
      marginBottom: '2.25px',
    },
  },
  copyButton: {
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
    opacity: '0',
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    left: '0px',
    padding: '10px',
    letterSpacing: '1px',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    width: ' 100%',
    height: ' 100%',
    zIndex: '0',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
  },
  showOverLay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
  },
  copyMessage: {
    position: ' fixed',
    top: ' 0',
    bottom: ' 0',
    left: ' 0',
    right: ' 0',
    display: ' flex',
    alignItems: ' center',
    justifyContent: ' center',
    flexDirection: ' column',
    // fontSize: '5rem',
    transform: ' scale(0.1)',
    opacity: ' 0',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      fontSize: '8rem',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
      [sizes.down('lg')]: {
        fontSize: '7rem',
      },
      [sizes.down('sm')]: {
        fontSize: '6rem',
      },
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },
  showMessage: {
    opacity: ' 1',
    transform: ' scale(1)',
    zIndex: ' 25',
    transition: ' all 0.4s ease-in-out',
    transitionDelay: ' 0.3s',
  },
};
