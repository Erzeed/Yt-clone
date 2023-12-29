import axios from "axios";

const getData = (() => {
  const BASE_URL = "https://youtube138.p.rapidapi.com";
  const options = {
    params: { hl: "en", gl: "ID" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  async function search(url) {
    const { data, status } = await axios.get(`${BASE_URL}/${url}`, options);

    if (status !== 200) {
      throw new Error(status);
    }
    return data;
  }

  return {
    search,
  };
})();

export default getData;
