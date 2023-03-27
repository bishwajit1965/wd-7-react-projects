const Helpers = (string, length) => {
  if (string.length > length) {
    return string.substring(0, length) + "...";
  } else {
    return string;
  }
};

export default Helpers;
