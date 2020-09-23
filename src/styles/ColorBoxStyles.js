import chroma from 'chroma-js';

export default {
  colorBox: {
    width: ' 20%',
    height: (props) => (props.showAllColors ? '25%' : '50%'),
    display: ' inline-block',
    cursor: ' pointer',
    margin: ' 0 auto',
    position: ' relative',
    textTransform: ' uppercase',
    marginBottom: ' -4.5px',
    color: ' rgba(0, 0, 0, 0.5)',
    '&:hover button': {
      opacity: '1',
      transition: '0.5s',
    },
  },
  textStyle: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() >= 0.7
        ? 'rgba(0,0,0,0.5)'
        : 'rgba(255,255,255,0.9',
  },
  darkColor: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() <= 0.05
        ? 'rgba(255,255,255,0.9'
        : 'rgba(0,0,0,0.5)',
  },
  seeMoreLink: {
    color: 'white',
    textDecoration: 'none',
  },
  seeMore: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    color: (props) =>
      chroma(props.backgroundColor).luminance() >= 0.7
        ? 'rgba(0,0,0,0.5)'
        : 'rgba(255,255,255,0.9',

    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textDecoration: 'none',
    outline: 'none',
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
    fontSize: ' 4rem',
    transform: ' scale(0.1)',
    opacity: ' 0',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
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
