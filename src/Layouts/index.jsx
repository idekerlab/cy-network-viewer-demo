import React, { Component } from "react";

import { MenuItem } from "material-ui/Menu";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";

import Button from "material-ui/Button";
import ApplyIcon from "material-ui-icons/Refresh";

// Base style
const rootStyle = {
//   width: "100%",
  color: "#333333",
  display: "flex",
  justifyContent: "flex-start",
  padding: '1em'
};

const formStyle = {
  flexGrow: 2
};

const LAYOUTS = {
  PRESET: "preset",
  COSE: "cose-bilkent",
  GRID: "grid",
  CIRCLE: "circle",
  COCENTRIC: "concentric",
  BREADTHFIRST: "breadthfirst"
};

class Layouts extends Component {
  state = {
    layout: LAYOUTS.COSE
  };

  handleChange = name => event => {
    const layoutName = event.target.value;
    console.log("Layout Name = " + layoutName);
    this.setState({
      layout: layoutName
    });
  };

  handleClick = () => {
    console.log("SET Layout Name = " + this.state.layout);
    this.props.layoutAction(this.state.layout);
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={rootStyle}>
        <FormControl style={formStyle}>
          <Select
            value={this.state.layout}
            onChange={this.handleChange()}
            autoWidth
          >
            <MenuItem value={LAYOUTS.COSE}>COSE (Force-Directed)</MenuItem>
            <MenuItem value={LAYOUTS.GRID}>Grid</MenuItem>
            <MenuItem value={LAYOUTS.CIRCLE}>Circle</MenuItem>
            <MenuItem value={LAYOUTS.COCENTRIC}>Cocentric</MenuItem>
            <MenuItem value={LAYOUTS.BREADTHFIRST}>Breadthfirst</MenuItem>
          </Select>
          <FormHelperText>Select a layout algorithm</FormHelperText>
        </FormControl>

        <Button raised dense color="primary" onClick={this.handleClick}>
          Apply
          <ApplyIcon />
        </Button>
      </div>
    );
  }
}

export default Layouts;
