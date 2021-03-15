import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    paddingRight: 24,
    justifyContent: 'flex-end',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  email: {
    marginRight: '12px',
  },
}));
