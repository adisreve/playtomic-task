import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: 'auto',
    height: '440px',
    marginBottom: '40px',
    margin: '0 30px',
  },
  media: {
    height: 0,
    paddingTop: '200px',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
}));
