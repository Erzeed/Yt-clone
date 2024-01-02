import axios from "axios";

const getData = (() => {
  const BASE_URL = "https://youtube-v2.p.rapidapi.com";
  const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
      "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
    },
  };

  async function videoRecomendation(id) {
    const { status, data: { videos }} = await axios.get(`${BASE_URL}/video/recommendations?video_id=${id}`, options);

    if (status !== 200) {
      throw new Error(status);
    }

    return videos;
  }

  return {
    videoRecomendation,
  };
})();

export default getData;
