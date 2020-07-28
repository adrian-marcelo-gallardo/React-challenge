import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  video: {
    width: '70%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  videoDetails: {
    padding: '10px 30px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    padding: '0 30px',
    boxSizing: 'border-box',
  },
}));
