import React, { Component } from "react";
import logo from "./cylogo.svg";
import "./App.css";

import NetworkViewer from "./NetworkViewer";
import TitleBar from "./TitleBar";
import Menu from "./Menu";

import getVisualStyle from "./visual-style-factory";

const networkDataUrl1 =
  "https://gist.githubusercontent.com/keiono/cfc025bfba493f59718f9d52064978ea/raw/2092dc86f574ea905910b6675c2edb6b3c7bd912/cyjs3.cyjs";
const CXTOOL_URL = "http://35.203.154.74:3001/ndex2cyjs/";
// const uuid1 = "3a5206c2-fd4e-11e7-adc1-0ac135e8bacf";

const uuid1 = "fd14b3b7-68d3-11e7-961c-0ac135e8bacf"

const cx1 =
  "http://www.ndexbio.org/v2/network/" + uuid1;
const cx2 =
  "http://dev2.ndexbio.org/v2/network/2c39cb12-fcb3-11e7-bd69-0660b7976219";

const appStyle = {
  backgroundColor: "#eeeeee",
  color: "#EEEEEE",
  width: "100%",
  height: "100%"
};

const styleCyjs = {
  position: "fixed",
  left: 0,
  width: "50%",
  height: "100%",
  backgroundColor: "#333333"
};

const styleSigma = {
  width: "50%",
  height: "100%",
  backgroundColor: "#666677",
  right: 0,
  position: "fixed"
};

const titleStyle = {
  height: "2em",
  margin: 0,
  fontWeight: 100,
  color: "#777777",
  paddingTop: "0.2em",
  paddingLeft: "0.8em"
};

const subTitle = {
  position: "fixed",
  top: "3em",
  width: "50%",
  fontSize: "2em",
  zOrder: "1000",
  backgroundColor: "red"
};

class App extends Component {
  state = {
    network: null,
    visualStyle: null
  };

  replaceVisTag = cx => {
    const cxLength = cx.length;

    for (let i = 0; i < cxLength; i++) {
      const entry = cx[i];
      const keys = Object.keys(entry);
      console.log(keys);
      if (keys[0] === "cyVisualProperties") {
        const style = {
          visualProperties: entry.cyVisualProperties
        };
        cx[i] = style;
      }
    }

    console.log("NEW:");
    console.log(cx);
    return cx;
  };

  postCx = cx => {
    const method = "POST";
    const body = JSON.stringify(cx);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    fetch("http://35.203.154.74:3001/cx2cyjs", { method, headers, body })
      .then(res => res.json())
      .then(network => {
        console.log(network);
        this.setState({
          network: network,
          visualStyle: network.style
        })
      })
      .catch(console.error);
  };

  componentDidMount() {
    fetch(cx1)
      .then(response => response.json())
      .then(network => {
        console.log("CX!!!!!!!!!!!!!!!!!!!!");
        console.log(network);
        this.postCx(this.replaceVisTag(network));
      });
  }

  render() {

    let visualStyle = getVisualStyle()
    if(this.state.visualStyle !== null) {
      visualStyle = {
        style: this.state.visualStyle
      }
    }

    return (
      <div className="App">
        <TitleBar />

        <Menu />

        <NetworkViewer
          className="NetworkViewer"
          network={this.state.network}
          style={styleCyjs}
          appStyle={appStyle}
          networkStyle={visualStyle}
        />
      </div>
    );
  }
}

export default App;
