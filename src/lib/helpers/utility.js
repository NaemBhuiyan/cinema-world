export const stripTrailingSlash = str => {
  const splitText = str.split('/');
  if (splitText.length === 2) {
    return splitText[0];
  }
  if (splitText.length > 2) {
    return splitText[2];
  }
  return str;
};
