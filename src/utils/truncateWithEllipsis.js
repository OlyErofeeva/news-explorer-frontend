const truncateWithEllipsis = (originalString, allowedLength) => {
  if (originalString.length <= allowedLength) {
    return originalString;
  }

  return `${originalString.substr(0, allowedLength)}...`;
};

export default truncateWithEllipsis;
