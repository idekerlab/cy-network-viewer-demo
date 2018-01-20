import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import logo from "./cylogo.svg";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/KeyboardArrowLeft";
import SettingsIcon from "material-ui-icons/Settings";
import TextField from "material-ui/TextField";

import MenuIcon from "material-ui-icons/Menu";

import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

import Button from "material-ui/Button";

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
    uuid: ""
  };

  handleChange = event => {
    console.log(event.target.value);

    this.setState({
      uuid: event.target.value
    });
  };

  handleLoad = event => {
    console.log("Load");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton}>
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
            />

            <Button raised color="default" onClick={this.handleLoad}>
              Load
            </Button>

            <img src={logo} className="App-logo" alt="logo" />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TitleBar);
