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

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
