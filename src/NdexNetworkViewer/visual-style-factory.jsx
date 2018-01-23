const edgeColor = "#AAAAAA";

const sizeCalculator = ele => {
  const size = ele.data("Size");
  if (size !== undefined) {
    return Math.log(size) * 30;
  } else {
    return 10;
  }
};

const fontSizeCalculator = ele => {
  const size = ele.data("Size");
  if (size !== undefined) {
    const fontSize = Math.log(size) / 2;
    return fontSize + "em";
  } else {
    return "1em";
  }
};

const DEFAULT_VS = {
  style: [
    {
      selector: "node",
      css: {
        "font-family": "SansSerif",
        shape: "ellipse",
        "background-color": "mapData(score, 0, 1, white, #0033FF)",
        width: sizeCalculator,
        "text-margin-x": "1em",
        "text-valign": "center",
        "text-halign": "right",
        color: "white",
        "min-zoomed-font-size": "1em",
        "font-size": fontSizeCalculator,
        height: sizeCalculator,
        content: "data(name)",
        "text-wrap": "wrap",
        "text-max-width": "40em"
      }
    },
    {
      selector: "node:selected",
      css: {
        "background-color": "red",
        color: "red"
      }
    },
    {
      selector: "edge",
      css: {
        opacity: 0.5,
        "line-color": edgeColor,
        "source-arrow-shape": "triangle",
        "mid-source-arrow-shape": "triangle",
        "source-arrow-color": edgeColor,
        "mid-source-arrow-color": edgeColor,
        color: "white"
      }
    },
    {
      selector: "edge:selected",
      css: {
        "line-color": "red",
        color: "white",
        "source-arrow-color": "red",
        "mid-source-arrow-color": "red",
        width: "1em"
      }
    }
  ]
};

const getVisualStyle = () => DEFAULT_VS

export default getVisualStyle
