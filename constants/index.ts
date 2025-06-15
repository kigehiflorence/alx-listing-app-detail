import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Cozy Cabin",
    rating: 4.5,
    address: {
      city: "Nairobi",
      country: "Kenya",
    },
    image: "/images/cabin.jpg",
    images: ["/images/cabin1.jpg", "/images/cabin2.jpg"],
    description: "A beautiful rustic cabin perfect for weekend getaways.",
    category: ["Wi-Fi", "Kitchen", "Parking", "Pool"],
    price: 120,
    reviews: [
      {
        name: "Alice",
        avatar: "/images/avatar1.png",
        rating: 5,
        comment: "Amazing stay, would visit again!",
      },
    ],
  },
];
