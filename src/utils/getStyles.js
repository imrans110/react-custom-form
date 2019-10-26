export const getStyleSizes = size => {
  switch (size) {
    case "large":
      return {
        width: "53px",
        height: "32px",
        round: "22px",
        left: "5px",
        bottom: "5px"
      };

    case "medium":
      return {
        width: "36px",
        height: "22px",
        round: "13px",
        left: "5px",
        bottom: "5px"
      };

    case "small":
      return {
        width: "25px",
        height: "px",
        round: "9px",
        left: "4px",
        bottom: "3px"
      };

    default:
      return {
        width: "36px",
        height: "22px",
        round: "13px",
        left: "5px",
        bottom: "5px"
      };
  }
};

export const getHexColor = value => {
  switch (value) {
    case "blue":
      return "#1a54e8";

    case "red":
      return "#eb0e0e";

    case "green":
      return "#52d14f";

    case "yellow":
      return "#ffea00";

    case "orange":
      return "#ff9900";

    case "grey":
      return "#808080";

    case "black":
      return "#121211";

    case "white":
      return "#f0f0f0";

    case "purple":
      return "#cf0fff";

    case "pink":
      return "#e63786";

    default:
      return "#1a54e8";
  }
};
