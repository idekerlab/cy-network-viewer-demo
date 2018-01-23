import React, { Component } from "react";

import { withStyles } from "material-ui/styles";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import IconButton from "material-ui/IconButton";

import CloseIcon from "material-ui-icons/Close";
import LoadIcon from "material-ui-icons/Refresh";

import SettingsIcon from "material-ui-icons/Settings";
import TextField from "material-ui/TextField";

import MenuIcon from "material-ui-icons/Menu";

import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

const styles = {
  root: {
    width: "100%"
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 20
  },
  flex: {
    flex: 1
  },
  label: {
    color: "#FFFFFF"
  }
};

class TitleBar extends Component {
  state = {
    uuid: null
  };

  handleChange = event => {
    this.setState({
      uuid: event.target.value
    });
  };

  handleLoad = event => {
    console.log("Start Load");
    this.props.uuidAction(this.state.uuid);
  };

  handleClear = event => {
    this.setState({
      uuid: ""
    });
  };

  handleMenuOpen = event => {
    this.props.menuAction(true);
  };

  render() {
    const { classes } = this.props;

    let uuid = this.state.uuid;
    if (uuid === null) {
      uuid = this.props.uuid;
      this.setState({
        uuid
      });
    }

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={this.handleMenuOpen}
            >
              <MenuIcon color="contrast" aria-label="Menu" />
            </IconButton>

            <Typography type="title" color="inherit" className={classes.flex}>
              Network Viewer Demo
            </Typography>

            <TextField
              required
              id="uuid"
              label="NDEx UUID"
              labelClassName="label"
              style={{ width: "18em", fontSize: "1.5em", color: "#FFFFFF" }}
              margin="dense"
              onChange={this.handleChange}
              value={uuid}
            />

            <IconButton color="contrast" onClick={this.handleLoad}>
              <LoadIcon />
            </IconButton>
            <IconButton color="contrast" onClick={this.handleClear}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TitleBar);
