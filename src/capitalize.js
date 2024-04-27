export const capitalize = (text) => {
  if (text === "") {
    return "";
  }
  const firstLetter = text[0].toUpperCase();
  const rest = text.slice(1);
  return `${firstLetter}${rest}`;
};
