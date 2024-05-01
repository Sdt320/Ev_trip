import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ?? 9.6861829, 
          tr_latitude: tr_lat ?? 9.6861829, 
          bl_longitude: bl_lng ?? 76.7796328, 
          tr_longitude: tr_lng ?? 76.7796328, 
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": "8644fba77mshf0b43c4e58558f4p1d6264jsn7165ea57c551",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
