import React, { Component } from "react";
import "./App.css";

import NdexNetworkViewer from "./NdexNetworkViewer";
import TitleBar from "./TitleBar";
import Menu from "./Menu";

// Sample network UUID
const DEF_UUID = "604b7f35-68d6-11e7-961c-0ac135e8bacf";


class App extends Component {
  state = {
    uuid: DEF_UUID,
    menuOpen: false,
    layoutName: 'preset'
  };

  uuidAction = uuid => {
    this.setState({
      uuid
    })
  }

  menuAction = menuOpen => {
    this.setState({
      menuOpen
    })
  }

  layoutAction = layoutName => {
    console.log('!!! LAYOUT UPDATE: ' + layoutName)
    this.setState({
      layoutName
    })
  }

  render() {
    console.log('!!! LAYOUT UPDATE render: ' + this.state.layoutName)
    return (
      <div className="App">
        <TitleBar 
          uuid={this.state.uuid}
          uuidAction={this.uuidAction}
          loadingAction={this.loadingAction}
          menuAction={this.menuAction}
        />

        <Menu 
          menuOpen={this.state.menuOpen}
          menuAction={this.menuAction}
          layoutAction={this.layoutAction}
        />
        
        <NdexNetworkViewer 
          className="NetworkViewer"
          uuid={this.state.uuid}
          layoutName={this.state.layoutName}
        />
      </div>
    );
  }
}

export default App;
