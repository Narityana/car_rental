export const fetchPhoto = async (imageUrl, setPhoto, defaultImage) => {
  try {
    const response = await fetch(imageUrl);
    if (response.ok) {
      setPhoto(imageUrl);
      return imageUrl;
    }
  } catch (error) {
    console.error('Помилка завантаження зображення:', error);
  }
  setPhoto(defaultImage);
  return defaultImage;
};
