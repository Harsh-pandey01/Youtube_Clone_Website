const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://www.googleapis.com/youtube/v3/";

export const fetchData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}&key=${API_KEY}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
