import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '30%',
    height: '100%',
    overflow: 'scroll',
  },
  listItem: {
    widht: '100%',
    height: '100px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  details: {
    height: '100%',
    flexGrow: 1,
    padding: '5px',
    boxSizing: 'border-box',
  },
}));
