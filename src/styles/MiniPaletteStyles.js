export default {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniColor: {
    height: '25%',
    flexBasis: '20%',
    flexShrink: '1',
  },
};
