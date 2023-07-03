const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((item) => (item !== undefined ? item.startsWith(startString) : ''))
    .map((item) => (item !== undefined ? item.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
