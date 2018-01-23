import React, { Component } from "react";
import CyNetworkViewer from "cy-network-viewer";
import { CytoscapeJsRenderer } from "cytoscapejs-renderer";
import Loading from "./Loading";
import getVisualStyle from "./visual-style-factory";

// Create an instance with Cytoscape.js Renderer
const Viewer = CyNetworkViewer(CytoscapeJsRenderer);

const DEF_NDEX_URL = "http://www.ndexbio.org/v2/network/";
const CXTOOL_URL = "http://35.203.154.74:3001/cx2cyjs";

const appStyle = {
  backgroundColor: "#eeeeee",
  color: "#EEEEEE",
  width: "100%",
  height: "100%"
};

class NetworkViewer extends Component {
  state = {
    network: null,
    visualStyle: null,
    loading: false
  };

  replaceVisTag = cx => {
    const cxLength = cx.length;

    for (let i = 0; i < cxLength; i++) {
      const entry = cx[i];
      const keys = Object.keys(entry);
      if (keys[0] === "cyVisualProperties") {
        const style = {
          visualProperties: entry.cyVisualProperties
        };
        cx[i] = style;
      }
    }
    return cx;
  };

  postCx = cx => {
    const method = "POST";
    const body = JSON.stringify(cx);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    fetch(CXTOOL_URL, { method, headers, body })
      .then(res => res.json())
      .then(network => {
        this.setState({
          loading: false,
          network,
          visualStyle: network.style
        });
      })
      .catch(console.error);
  };

  loadNetworkFromNdex = (serverUrl = DEF_NDEX_URL, uuid) => {
    if (uuid === null || uuid === undefined) {
      return;
    }

    const url = serverUrl + uuid;

    this.setState({
      loading: true
    });

    fetch(url)
      .then(response => response.json())
      .then(network => {
        console.log("CX!!!!!!!!!!!!!!!!!!!!");
        console.log(network);
        this.postCx(this.replaceVisTag(network));
      })
      .catch(console.error);
  };

  componentDidMount() {
    this.loadNetworkFromNdex(DEF_NDEX_URL, this.props.uuid);
  }

  componentWillReceiveProps(nextProps) {
    const uuid = this.props.uuid;
    const nextUuid = nextProps.uuid;
    if (uuid !== nextUuid) {
      this.loadNetworkFromNdex(DEF_NDEX_URL, nextUuid);
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    let visualStyle = getVisualStyle();
    if (this.state.visualStyle !== null) {
      visualStyle = {
        style: this.state.visualStyle
      };
    }
    return (
      <div style={{width: '100%', height: '100%', paddingTop: '4.3em'}}>
        <Viewer
          {...this.props}
          network={this.state.network}
          networkStyle={visualStyle}
        />
      </div>
    );
  }
}

export default NetworkViewer;
