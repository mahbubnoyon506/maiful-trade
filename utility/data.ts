import type { Categories, Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    title:
      "METTLER TOLEDO innovative design weighbridge Multiple surface treatments can be chosen. More material savings.",
    subtitle: "Digital Truck Scale",
    image: "/assets/images/truck-scale.png",
    gallery: [
      "/assets/images/truck-scale.png",
      "/assets/images/platform.png",
      "/assets/images/floor-scale.png",
      "/assets/images/animal-scale.png",
      "/assets/images/crane-scale.png",
      "/assets/images/bench-scale.png",
    ],
    category: "Platform Scale",
    rating: 5,
    soldCount: 10,
    sku: "A264671",
    availability: "In Stock",
    brand: "utilcell",
    model: "Model C-Bridge",
    certificates: "CE",
    whatsappNumber: "+88 01711-706366",
    description: {
      overview:
        "The HOLI Model C Bridge Weighbridge offers a complete weighing solution for heavy-duty vehicles, designed with safety and ease of use in mind. With bright safety rails and a solid steel platform, this weighbridge is ideal for sites that need accurate, quick and safe vehicle weighing. This model is built for easy installation, saving you time and labour during setup. Whether you're weighing trucks in logistics centres, factories, or construction zones, the Model C Bridge delivers reliable performance with every use.",
      keyFeatures: [
        "Full-length weighbridge with strong handrails for added safety",
        "Easy-to-set-up design for quick deployment",
        "Durable construction for daily heavy truck weighing",
        "Ideal for industrial and commercial weighing sites",
        "Part of HOLI's trusted weighing solution range",
      ],
      summary:
        "The Model C Bridge Weighbridge is your go-to choice when you need a safe, sturdy, and easy-to-use platform for vehicle weighing.",
    },
    features: [
      "Free 1 Year Warranty",
      "Free Shipping & Fasted Delivery",
      "100% Money-back guarantee",
      "24/7 Customer support",
      "Secure payment method",
    ],
    shippingInfo: {
      courier: "2 - 4 days, free shipping",
      localShipping: "up to one week",
      upsGround: "4 - 6 days",
      unishopExport: "3 - 4 days",
    },
    specifications: [
      { label: "Capacity", value: "30 Ton - 100 Ton" },
      { label: "Platform Dimension", value: "3x9m, 3x12m, 3x18m" },
      { label: "Accuracy Class", value: "OIML III" },
      { label: "Operating Temperature", value: "-30°C to +70°C" },
      { label: "Power Supply", value: "AC 220V / 50Hz" },
    ],
    reviews: [
      {
        id: "r1",
        author: "Rahim Ahmed",
        rating: 5,
        date: "2026-01-15",
        comment:
          "Excellent heavy-duty build quality. Installation team was very quick!",
      },
    ],
  },
  {
    id: 2,
    title: "Heavy Duty Platform Weighing Scale for Industrial Logistics",
    subtitle: "Platform",
    image: "/assets/images/platform.png",
    gallery: [
      "/assets/images/platform.png",
      "/assets/images/truck-scale.png",
      "/assets/images/floor-scale.png",
    ],
    category: "Weighing Scale",
    rating: 4.8,
    soldCount: 24,
    sku: "PF-8820",
    availability: "In Stock",
    brand: "utilcell",
    model: "PF-2000",
    certificates: "CE, ISO9001",
    whatsappNumber: "+88 01711-706366",
    description: {
      overview:
        "High-precision industrial platform scale built with reinforced checker plate steel, ensuring consistent accuracy under demanding heavy-load environments.",
      keyFeatures: [
        "Reinforced checker plate steel deck",
        "High accuracy shear beam load cells",
        "Overload protection guard",
      ],
      summary:
        "Reliable platform scale for warehouses and manufacturing facilities.",
    },
    features: [
      "Free 1 Year Warranty",
      "Free Shipping & Fasted Delivery",
      "100% Money-back guarantee",
      "24/7 Customer support",
      "Secure payment method",
    ],
    shippingInfo: {
      courier: "2 - 4 days, free shipping",
      localShipping: "up to 3 days",
      upsGround: "3 - 5 days",
      unishopExport: "2 - 4 days",
    },
    specifications: [
      { label: "Max Capacity", value: "1,000 kg - 5,000 kg" },
      { label: "Deck Material", value: "Checker Plate Steel" },
    ],
    reviews: [],
  },
  {
    id: 3,
    title: "Livestock Livestock Animal Scale with Anti-Movement Software",
    subtitle: "Animal Scale",
    image: "/assets/images/animal-scale.png",
    gallery: ["/assets/images/animal-scale.png", "/assets/images/platform.png"],
    category: "Platform Scale",
    rating: 5,
    soldCount: 18,
    sku: "AN-3010",
    availability: "In Stock",
    brand: "HOLI",
    model: "Vet-Scale Pro",
    certificates: "CE",
    whatsappNumber: "+88 01711-706366",
    description: {
      overview:
        "Specifically engineered for cattle and livestock weighing. Features integrated high-fences and dynamic filtering technology to stabilize weights when animals move.",
      keyFeatures: [
        "Dynamic animal motion stabilization software",
        "Dual side gates for easy entry and exit",
        "Easy-wash stainless steel sensors",
      ],
      summary:
        "Essential livestock weighing solution for farms and veterinary centers.",
    },
    features: [
      "Free 1 Year Warranty",
      "Free Shipping & Fasted Delivery",
      "100% Money-back guarantee",
      "24/7 Customer support",
      "Secure payment method",
    ],
    shippingInfo: {
      courier: "3 - 5 days, free shipping",
      localShipping: "up to 5 days",
      upsGround: "4 - 6 days",
      unishopExport: "3 - 5 days",
    },
    specifications: [
      { label: "Capacity", value: "2,000 kg" },
      { label: "Cage Height", value: "1.2 Meters" },
    ],
    reviews: [],
  },
  {
    id: 4,
    title: "Ultra Low Profile Floor Scale with Diamond Tread Deck",
    subtitle: "Floor Scale",
    image: "/assets/images/floor-scale.png",
    gallery: [
      "/assets/images/floor-scale.png",
      "/assets/images/truck-scale.png",
    ],
    category: "Weighing Scale",
    rating: 4.7,
    soldCount: 31,
    sku: "FL-902",
    availability: "In Stock",
    brand: "utilcell",
    model: "FS-Flat 1500",
    certificates: "CE, OIML",
    whatsappNumber: "+88 01711-706366",
    description: {
      overview:
        "Low-profile floor scale designed for smooth pallet jack loading. Built to sustain daily rigorous industrial usage with minimal maintenance requirements.",
      keyFeatures: [
        "Ultra-low entry height for easy loading",
        "Corrosion-resistant powder coating",
        "Adjustable self-leveling feet",
      ],
      summary: "The optimal floor scale choice for commercial shipping depots.",
    },
    features: [
      "Free 1 Year Warranty",
      "Free Shipping & Fasted Delivery",
      "100% Money-back guarantee",
      "24/7 Customer support",
      "Secure payment method",
    ],
    shippingInfo: {
      courier: "2 - 4 days, free shipping",
      localShipping: "up to 4 days",
      upsGround: "3 - 5 days",
      unishopExport: "2 - 4 days",
    },
    specifications: [
      { label: "Capacity", value: "3,000 kg" },
      { label: "Display", value: "Backlit LED Indicator" },
    ],
    reviews: [],
  },
  {
    id: 5,
    title: "Heavy Duty Digital Crane Scale with Remote Control Display",
    subtitle: "Crane Scale",
    image: "/assets/images/crane-scale.png",
    gallery: [
      "/assets/images/crane-scale.png",
      "/assets/images/bench-scale.png",
    ],
    category: "Weighing Scale",
    rating: 4.9,
    soldCount: 42,
    sku: "CR-771",
    availability: "In Stock",
    brand: "HOLI",
    model: "Crane-X 5T",
    certificates: "CE",
    whatsappNumber: "+88 01711-706366",
    description: {
      overview:
        "Industrial suspended crane scale built with high-grade alloy steel housing and a heavy-duty 360-degree rotating shackle hook.",
      keyFeatures: [
        "360° rotating heavy hook",
        "Infrared wireless remote control included",
        "High visibility LED display screen",
      ],
      summary:
        "Perfect for foundry, steel plants, and overhead crane lifting tasks.",
    },
    features: [
      "Free 1 Year Warranty",
      "Free Shipping & Fasted Delivery",
      "100% Money-back guarantee",
      "24/7 Customer support",
      "Secure payment method",
    ],
    shippingInfo: {
      courier: "1 - 3 days, free shipping",
      localShipping: "up to 2 days",
      upsGround: "2 - 4 days",
      unishopExport: "2 - 3 days",
    },
    specifications: [
      { label: "Capacity", value: "5 Tons / 10 Tons" },
      { label: "Battery Life", value: "Up to 80 Hours" },
    ],
    reviews: [],
  },
  {
    id: 6,
    title: "High Precision Bench Scale for Packaging & Counting",
    subtitle: "Bench Scale",
    image: "/assets/images/bench-scale.png",
    gallery: [
      "/assets/images/bench-scale.png",
      "/assets/images/floor-scale.png",
    ],
    category: "Others Scale",
    rating: 4.6,
    soldCount: 15,
    sku: "BS-104",
    availability: "In Stock",
    brand: "utilcell",
    model: "BenchMaster 300",
    certificates: "CE",
    whatsappNumber: "+88 01711-706366",
    description: {
      overview:
        "Versatile bench scale designed for countertop sorting, packaging, and precise inventory piece counting.",
      keyFeatures: [
        "Stainless steel removable pan",
        "Fast response time (< 1 sec)",
        "Rechargeable internal battery",
      ],
      summary: "Ideal for retail, food processing, and small item logistics.",
    },
    features: [
      "Free 1 Year Warranty",
      "Free Shipping & Fasted Delivery",
      "100% Money-back guarantee",
      "24/7 Customer support",
      "Secure payment method",
    ],
    shippingInfo: {
      courier: "2 - 4 days, free shipping",
      localShipping: "up to 3 days",
      upsGround: "3 - 4 days",
      unishopExport: "2 - 3 days",
    },
    specifications: [
      { label: "Capacity", value: "30 kg - 150 kg" },
      { label: "Pan Size", value: "400 x 500 mm" },
    ],
    reviews: [],
  },
];

export const categories: Categories[] = [
  {
    id: 1,
    name: "All Scale",
  },
  {
    id: 2,
    name: "Weighing Scale",
  },
  {
    id: 3,
    name: "Platform Scale",
  },
  {
    id: 4,
    name: "Others Scale",
  },
];
