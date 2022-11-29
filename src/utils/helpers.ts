export const formatNameAndId = (label: string) => {
  const labelWords = label.split(" ");
  if (labelWords.length > 1) {
    return labelWords.map((word) => word.toLowerCase()).join("-");
  }
  return label.toLowerCase();
};
