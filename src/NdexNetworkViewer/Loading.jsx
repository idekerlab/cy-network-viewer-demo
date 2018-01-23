import React from "react";
import { CircularProgress } from "material-ui/Progress";

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const Loading = () => (
  <div style={containerStyle}>
    <CircularProgress size={200} thickness={1} />
  </div>
);

export default Loading;
