export const getImageDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const { width, height } = img;
      resolve({ width, height });
    };
    img.onerror = reject;
    img.src = url;
  });
};

export const classFunction = async (url) => {
  try {
    const { width, height } = await getImageDimensions(url);

    if (width >= 1200 && height >= 1200) {
      return "big";
    } else if ((height / width) * 100 >= 130) {
      return "tall";
    } else if ((width / height) * 100 >= 130) {
      return "width";
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error loading image:", error);
    return "";
  }
};
