import sizes from './sizes';
export default {
  PaletteFooter: {
    display: ' flex',
    justifyContent: ' space-between',
    backgroundColor: ' white',
    height: ' 5vh',
    padding: '0.5rem',
    fontWeight: ' bold',
    '& .emoji': {
      fontSize: '1.5rem',
      margin: '0 1rem',
      [sizes.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
    '& .paletteName': {
      fontWeight: '500',
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '0.8rem',
        display: 'flex',
        alignItems: 'center',
      },
    },
    '& .goBack': {
      [sizes.down('xs')]: {
        fontSize: '0.8rem',
        margin: '0',
        padding: '0',
        '& span': {
          alignItems: 'flex-start',
        },
      },
    },
  },
};
