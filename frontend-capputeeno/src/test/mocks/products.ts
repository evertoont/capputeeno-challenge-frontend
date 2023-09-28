import { Product, ProductInCart } from "@/types/products";

export const productMock: Product = {
  id: "fbabad54-decb-4eed-8418-597d4a2b1a2d",
  name: "Camiseta Ramones",
  price_in_cents: 5539,
  image_url: "https://via.placeholder.com/150",
  category: "t-shirts",
  description:
    "Aut dolor eum aspernatur maxime in suscipit perspiciatis aut iusto. Eum odio ducimus nam quos quia esse quibusdam totam iure. Voluptates est sit laboriosam. Et unde illum aliquid debitis quia fugit est nisi provident.",
};

export const productsMock: Product[] = [
  {
    id: "fbabad54-decb-4eed-8418-597d4a2b1a2d",
    name: "Camiseta Ramones",
    price_in_cents: 5539,
    image_url: "https://via.placeholder.com/150",
    category: "t-shirts",
    description:
      "Aut dolor eum aspernatur maxime in suscipit perspiciatis aut iusto. Eum odio ducimus nam quos quia esse quibusdam totam iure. Voluptates est sit laboriosam. Et unde illum aliquid debitis quia fugit est nisi provident.",
  },
  {
    id: "5a5f8ebc-f915-4511-b43d-b5abd66ab6ee",
    name: "Caneca The Grounds",
    price_in_cents: 4850,
    image_url: "https://via.placeholder.com/150",
    category: "mugs",
    description:
      "Ex error dignissimos magnam nihil veniam dolor. Mollitia sit ex sint. Id est tenetur fuga laboriosam.",
  },
];

export const productInCartMock: ProductInCart = {
  id: "fbabad54-decb-4eed-8418-597d4a2b1a2d",
  name: "Camiseta Ramones",
  price_in_cents: 5539,
  image_url: "https://via.placeholder.com/150",
  category: "t-shirts",
  description:
    "Aut dolor eum aspernatur maxime in suscipit perspiciatis aut iusto. Eum odio ducimus nam quos quia esse quibusdam totam iure. Voluptates est sit laboriosam. Et unde illum aliquid debitis quia fugit est nisi provident.",
  quantity: 1,
};

export const productsInCartMock: ProductInCart[] = [
  {
    id: "fbabad54-decb-4eed-8418-597d4a2b1a2d",
    name: "Camiseta Ramones",
    price_in_cents: 5539,
    image_url: "https://via.placeholder.com/150",
    category: "t-shirts",
    description:
      "Aut dolor eum aspernatur maxime in suscipit perspiciatis aut iusto. Eum odio ducimus nam quos quia esse quibusdam totam iure. Voluptates est sit laboriosam. Et unde illum aliquid debitis quia fugit est nisi provident.",
    quantity: 1,
  },
  {
    id: "5a5f8ebc-f915-4511-b43d-b5abd66ab6ee",
    name: "Caneca The Grounds",
    price_in_cents: 4850,
    image_url: "https://via.placeholder.com/150",
    category: "mugs",
    description:
      "Ex error dignissimos magnam nihil veniam dolor. Mollitia sit ex sint. Id est tenetur fuga laboriosam.",
    quantity: 2,
  },
];
