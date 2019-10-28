export const getSize = (size, type) => {
  if (type === "input") {
    switch (size) {
      case "tiny":
        return "8px";

      case "small":
        return "15%";

      case "medium":
        return "20%";

      case "large":
        return "40%";

      case "huge":
        return "75%";

      default:
        return "20%";
    }
  } else if (type === "font") {
    switch (size) {
      case "small":
        return "10px";

      case "medium":
        return "15px";

      case "large":
        return "22px";

      case "huge":
        return "35px";

      default:
        return "15px";
    }
  }
};
