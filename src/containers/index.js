import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import SideBar from './SideBar';
import Hidden from '@material-ui/core/Hidden';
import Bookmark from './bookmark';

const drawerWidth = 256;

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#232f3e',
      main: '#232f3e',
      dark: '#18202c',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: '#eaeff1'
  },
  mainContent: {
    display: 'flex',
    padding: '88px 36px 0',
    flexWrap: 'wrap'
  },
};

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };


  render() {
    const { classes } = this.props;
    //Array.from(Array(40).keys())
    const bookmarks = [
      {
        url: 'http://example.com',
        tags: [
          'Music', 'Bandcamp'
        ],
        read: true
      },
      {
        url: 'http://google.com',
        tags: [
          'Reading'
        ],
        read: false
      },
      {
        url: 'http://example.com',
        tags: [
          'Music', 'Bandcamp'
        ],
        read: true
      },
      {
        url: 'http://google.com',
        tags: [
          'Reading'
        ],
        read: false
      },
      {
        url: 'http://example.com',
        tags: [
          'Music', 'Bandcamp'
        ],
        read: true
      },
      {
        url: 'http://google.com',
        tags: [
          'Reading'
        ],
        read: false
      },
      {
        url: 'http://example.com',
        tags: [
          'Music', 'Bandcamp'
        ],
        read: true
      },
      {
        url: 'http://google.com',
        tags: [
          'Reading'
        ],
        read: false
      }
    ];
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />

          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <SideBar
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <SideBar PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>

          <AppBar />

          <div className={classes.appContent}>
            <main className={classes.mainContent}>
            {bookmarks.map(({tags, read, url }, idx) => (
              <React.Fragment key={idx}>
                <Bookmark tags={tags} read={read} url={url}/>
              </React.Fragment>
              ))}
            </main>
          </div>
      </div>
    </MuiThemeProvider>
  )}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
