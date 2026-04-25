export interface ShoppingShort {
  id: string;
  product_name: string;
  price: number;
  description: string;
  media_url: string;
  media_type: 'image' | 'video';
  product_link?: string;
  tags: string[];
  likes: number;
  created_at: string;
}

export interface ShoppingShortCreate {
  product_name: string;
  price: number;
  description: string;
  media_url: string;
  media_type: 'image' | 'video';
  product_link?: string;
  tags: string[];
}