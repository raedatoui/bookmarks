import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import DraftsIcon from '@material-ui/icons/Drafts';
import TagIcon from '@material-ui/icons/LocalOffer';
import CreateIcon from '@material-ui/icons/Create';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    width: 'calc(25% - 20px)',
    margin: '10px',
    overflow: 'hidden'
  },
  unread: {
    backgroundColor: '#fff'
  },
  read: {
    backgroundColor: '#eee'
  },
  searchIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 'medium'
  },
  block: {
    display: 'block',
  },
  menuIcon: {
    display: 'block',
    marginRight: '5px'
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    padding: '16px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(https://dummyimage.com/200x200/000000/fff)',
    backgroundSize: 'cover',
    minHeight: '200px',
    '&:hover': {
      backgroundColor: 'rgba(99, 204, 255, 0.5)'
    }
  },
  contentImg: {
    alignSelf: 'center'
  },
  tagsList: {
    display: 'flex',
    flexDirection: 'row'
  },
  grow: {
    flexGrow: 1
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '52px'
  },
  actionGrid: {
    minHeight: '52px',
    display: 'flex',
  },
  itemTag: {
    paddingLeft: 4,
    paddingRight: 4,
    wordBreak: 'initial',
    whiteSpace: 'normal'
  }
});

class Bookmark extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { classes, tags, read, url } = this.props;
    const readClassName = read ? 'read' : 'unread';
    const { anchorEl } = this.state;
    return (
      <Paper className={classNames(classes.paper, classes[readClassName])}>
        <div className={classes.contentWrapper}>
          {/*<img src="https://dummyimage.com/200x200/000000/fff" className={classes.contentImg} />*/}
          <Typography color="red" align='center'>
            { url }
          </Typography>
        </div>
        <AppBar className={classes.searchBar} position="static" color="default" elevation={1}>
            <Grid container spacing={0} alignItems="center">
              <List className={classes.tagsList}>
              {tags.map((tag, idx) => (
                <ListItem
                  button
                  dense
                  alignItems="center"
                  key={idx}
                >
                  <TagIcon className={classNames(classes.block, classes.searchIcon)} color="inherit" />
                  <ListItemText className={classes.itemTag}>{ tag }</ListItemText>
                </ListItem>
              ))}
              </List>

              <Typography variant="h6" color="inherit" className={classes.grow}>
              </Typography>

              <Tooltip title="Edit">
                <IconButton
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                color="inherit"
              >
                <MenuItem onClick={this.handleClose}>
                  <DraftsIcon className={classes.menuIcon} color="inherit" />
                  Mark as read
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <CreateIcon className={classes.menuIcon} color="inherit" />
                  Edit Tags
                </MenuItem>
              </Menu>

            </Grid>
        </AppBar>
      </Paper>
    );
  }
}

Bookmark.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array,
  read: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(Bookmark);
