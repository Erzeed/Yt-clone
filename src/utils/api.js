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
  
  async function videoDetail(id) {
    const { data, status } = await axios.get(`${BASE_URL}/video/details?video_id=${id}`, options);

    if (status !== 200) {
      throw new Error(status);
    }

    return data;
  }
  
  async function videoComment(id) {
    const { data, status } = await axios.get(`${BASE_URL}/video/comments?video_id=${id}`, options);

    if (status !== 200) {
      throw new Error(status);
    }
    
    return data;
  }

  async function channelDetail(id) {
    const resp = await axios.get(`${BASE_URL}/channel/details?channel_id${id}`, options);

    // if (status !== 200) {
    //   throw new Error(status);
    // }

    // return videos;
    console.log(resp)
  }

  async function searchVideo(search) {
    const { data: { videos }, status } = await axios.get(`${BASE_URL}/search/?query=${search}&lang=id&order_by=this_month&country=id`, options);

    if (status !== 200) {
      throw new Error(status);
    }

    return videos;
  }

  async function dataShort() {
    const { data: { videos }, status } = await axios.get(`${BASE_URL}/channel/shorts?channel_id=UCFhzJ5UfoTlOxJT8xYoTuDw`, options);

    if (status !== 200) {
      throw new Error(status);
    }
    
    return videos;
  }

  return {
    videoRecomendation,
    videoDetail,
    channelDetail,
    videoComment,
    searchVideo,
    dataShort
  };
})();

export default getData;
