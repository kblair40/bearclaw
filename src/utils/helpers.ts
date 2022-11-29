export const formatNameAndId = (label: string) => {
  const labelWords = label.split(" ");
  if (labelWords.length > 1) {
    return labelWords.map((word) => word.toLowerCase()).join("-");
  }
  return label.toLowerCase();
};

export const getImageURL = async (file: File) => {
  let assetDataURLPromise: Promise<string | ArrayBuffer> = new Promise(
    (resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result!);
    }
  );

  let newImageURL = await assetDataURLPromise;

  if (typeof newImageURL === "string") {
    return newImageURL;
  }
};
