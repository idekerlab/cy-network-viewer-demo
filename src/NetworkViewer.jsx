import React, { Component } from "react";
import CyNetworkViewer from "cy-network-viewer";
import { CytoscapeJsRenderer } from "cytoscapejs-renderer";
import { CircularProgress } from "material-ui/Progress";

const Viewer = CyNetworkViewer(CytoscapeJsRenderer);

const loadingStyle = {
  display: "inline-flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center"
};

const NetworkViewer = props => {
  if (props.network === null) {
    return (
      <div style={loadingStyle}>
        <CircularProgress size={300} thickness={1} />
      </div>
    );
  } else {
    console.log('rendering...')
    console.log(props)
    return(
      <Viewer 
        {...props}
      />
    )
  }
};
export default NetworkViewer;
