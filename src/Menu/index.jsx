import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import logo from "../images/cylogo.svg";

import Layouts from '../Layouts'

const drawerWidth = 400;

const styles = theme => ({
  root: {
    width: "100%",
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  }
});

class Menu extends Component {
  handleDrawerOpen = () => {
    this.props.menuAction(true);
  };

  handleDrawerClose = () => {
    this.props.menuAction(false);
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Drawer type="persistent" anchor="left" open={this.props.menuOpen}>
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <img src={logo} className="App-logo" alt="logo" />
              <Typography type="title">NDEx Network Viewer Demo</Typography>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>

            <Divider />

            <Layouts {...this.props} />
            
            <List className={classes.list}>
              <ListItem>
                <ListItemText>Test 1</ListItemText>
              </ListItem>
            </List>
            <Divider />
            <List className={classes.list} />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Menu);
