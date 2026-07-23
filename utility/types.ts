export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  gallery: string[];
  category: string;
  rating: number;
  soldCount: number;
  sku: string;
  availability: "In Stock" | "Out of Stock";
  brand: string;
  model: string;
  certificates: string;
  whatsappNumber: string;
  description: {
    overview: string;
    keyFeatures: string[];
    summary: string;
  };
  features: string[];
  shippingInfo: {
    courier: string;
    localShipping: string;
    upsGround: string;
    unishopExport: string;
  };
  specifications: ProductSpec[];
  reviews: ProductReview[];
}

export interface Categories {
  id: number;
  name: string;
}
