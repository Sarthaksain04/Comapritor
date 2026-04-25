import axios from "axios";

const API_KEY = "eb276a49790cdad1919276a3271399e912a2c46489ca6018a2bc6f6717a391a8";

export const fetchProducts = async (query: string) => {
  try {
    const res = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_shopping",
        q: query,
        api_key: API_KEY,
      },
    });

    return res.data.shopping_results || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};