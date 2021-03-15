import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    fontWeight: 100,
    alignSelf: 'flex-start',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
}));
