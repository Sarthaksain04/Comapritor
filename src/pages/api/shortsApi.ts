import axios from "axios";
import { ShoppingShort } from "@/pages/shorts";
import { fetchProducts } from "./productAPi"; // ⚠️ fix name (Api not APi)

const API_KEY = "67sp9S3KAjMMVRxYwVmtskj2dwqFTm1yNYUqSrAIpQFmB6qzVl6o84DQ";

const generateTags = (title: string) => {
  const words = title.toLowerCase().split(/\s+/);

  const keywordMap = [
    "shoe","shoes","sneaker","sneakers",
    "phone","iphone","smartphone","android",
    "watch","smartwatch",
    "shirt","tshirt","t-shirt","hoodie",
    "laptop","macbook","notebook",
    "headphone","earbuds","airpods",
    "camera","dslr",
    "gaming","console","ps5","xbox",
    "tablet","ipad",
    "speaker","bluetooth",
    "bag","backpack",
    "fashion","style",
    "tech","electronics",
    "fitness","gym","sports",
    "beauty","skincare","makeup"
  ];

  const matched = words.filter(word =>
    keywordMap.includes(word)
  );

  // remove duplicates
  const unique = [...new Set(matched)];

  return unique.length ? unique.slice(0, 3) : ["trending"];
};

export const fetchShortVideos = async (page: number = 1): Promise<ShoppingShort[]> => {
  try {
    const response = await axios.get(
      "https://api.pexels.com/videos/search",
      {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query: "product fashion tech",
          per_page: 10,
          page: page,
        },
      }
    );

    const videos = response.data.videos;

    // 🔥 REPLACE OLD map WITH THIS
    const mapped: ShoppingShort[] = await Promise.all(
      videos.map(async (video: any) => {

        const file = video.video_files[0];

        const query = video.user?.name || "fashion product";

        const products = await fetchProducts(query);
        const product = products?.[0];

        return {
          id: String(video.id),

          product_name: product?.title || "Trending Product",

          description: product?.snippet || "Best product online",

          price: product?.price
            ? parseFloat(product.price.replace(/[^0-9.]/g, ""))
            : Math.floor(Math.random() * 500),

          media_url: file.link,
          media_type: "video",

          product_link: product?.link || video.url,

        //   tags: [
        //     product?.source || "shop",
        //     product?.title?.split(" ")[0] || "trend"
        //   ],

        tags: generateTags(product?.title || "product"),

          likes: Math.floor(Math.random() * 1000),
          created_at: new Date().toISOString(),
        };
      })
    );

    return mapped;

  } catch (error) {
    console.error(error);
    return [];
  }
};