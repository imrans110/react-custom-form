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

export const getHoverColor = value => {
  switch (value) {
    case "blue":
      return "#0e43c9";

    case "red":
      return "#cf0606";

    case "green":
      return "#3fa83d";

    case "yellow":
      return "#f5e207";

    case "orange":
      return "#e38b09";

    case "grey":
      return "#6b6767";

    case "black":
      return "#000";

    case "white":
      return "#e6dfdf";

    case "purple":
      return "#b707e3";

    case "pink":
      return "#d12a75";

    default:
      return "#0e43c9";
  }
};

export const getButtonStyles = size => {
  switch (size) {
    case "compact":
      return "2px 4px";

    case "huge":
      return {
        padding: "15px 30px",
        fontSize: "27px"
      };

    case "large":
      return {
        padding: "12px 24px",
        fontSize: "22px"
      };

    case "medium":
      return {
        padding: "8px 16px",
        fontSize: "18px"
      };

    case "small":
      return {
        padding: "5px 10px",
        fontSize: "15px"
      };

    default:
      return {
        padding: "8px 16px",
        fontSize: "18px"
      };
  }
};
