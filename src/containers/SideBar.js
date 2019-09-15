import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import TagIcon from '@material-ui/icons/LocalOffer';

const categories = [
  {
    id: 'Tags',
    children: [
      { id: 'Authentication', icon: <TagIcon />, active: true },
      { id: 'Database', icon: <TagIcon /> },
      { id: 'Storage', icon: <TagIcon /> },
      { id: 'Hosting', icon: <TagIcon /> },
      { id: 'Functions', icon: <TagIcon /> },
      { id: 'ML Kit', icon: <TagIcon /> },
    ],
  }
];

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    fontSize: 12,
    height: 20
  },
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
    flexGrow: 1
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
  toolbar: theme.mixins.toolbar,
  grow: {
    flexGrow: 1
  }
});

function SideBar(props) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other} >
      <div className={classes.toolbar} />
      <List disablePadding>

        <ListItem className={classNames(classes.item, classes.itemCategory, classes.grow)}>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            All Bookmarks

          </ListItemText>
          <Fab variant="extended" color="primary" className={classes.fab}>300</Fab>
        </ListItem>

        <ListItem className={classNames(classes.item, classes.itemCategory, classes.grow)}>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Untagged
          </ListItemText>
          <Fab variant="extended" color="primary" className={classes.fab}>3000</Fab>
        </ListItem>

        <ListItem className={classNames(classes.item, classes.itemCategory, classes.grow)}>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Unread
          </ListItemText>
          <Fab variant="extended" color="primary" className={classes.fab}>612</Fab>
        </ListItem>

        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem,
                )}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
