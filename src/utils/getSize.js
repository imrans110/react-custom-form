export const getSize = type => {
  switch (type) {
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
};
