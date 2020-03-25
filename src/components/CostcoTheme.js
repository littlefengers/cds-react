import { createMuiTheme } from '@material-ui/core/styles';

const costcoTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3071a9',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    error:
    {
      main: '#d32029',
    }
  },
});

export default costcoTheme;