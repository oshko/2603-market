export const users = [
  { username: "alex", password: "password123" },
  { username: "maria", password: "password123" },
  { username: "john", password: "password123" },
  { username: "sarah", password: "password123" },
];

export const products = [
  {
    title: "Wireless Headphones",
    description: "Bluetooth headphones with a 20-hour battery.",
    price: 79.99,
  },
  {
    title: "Water Bottle",
    description: "Insulated stainless steel water bottle.",
    price: 24.99,
  },
  {
    title: "Desk Lamp",
    description: "Adjustable LED desk lamp with touch controls.",
    price: 39.99,
  },
  {
    title: "Coffee Mug",
    description: "Large ceramic coffee mug.",
    price: 14.99,
  },
  {
    title: "Phone Charger",
    description: "Portable fast-charging power bank.",
    price: 29.99,
  },
  {
    title: "Laptop Backpack",
    description: "Water-resistant backpack with a laptop compartment.",
    price: 54.99,
  },
  {
    title: "Yoga Mat",
    description: "Non-slip exercise mat with a carrying strap.",
    price: 34.99,
  },
  {
    title: "Notebook",
    description: "Hardcover notebook with 200 lined pages.",
    price: 12.99,
  },
];

export const orders = [
  {
    date: "2026-07-01",
    note: "Leave at the door",
    user_id: 1,
  },
  {
    date: "2026-07-02",
    note: null,
    user_id: 2,
  },
  {
    date: "2026-07-03",
    note: "Call when you arrive",
    user_id: 1,
  },
  {
    date: "2026-07-04",
    note: "Gift order",
    user_id: 3,
  },
  {
    date: "2026-07-05",
    note: null,
    user_id: 4,
  },
  {
    date: "2026-07-06",
    note: "Deliver after 5 PM",
    user_id: 2,
  },
];

export const orders_products = [
  // Alex's first order
  { order_id: 1, product_id: 1, quantity: 1 },
  { order_id: 1, product_id: 2, quantity: 2 },

  // Maria's first order
  { order_id: 2, product_id: 3, quantity: 1 },
  { order_id: 2, product_id: 4, quantity: 2 },

  // Alex's second order
  { order_id: 3, product_id: 5, quantity: 1 },

  // John's order
  { order_id: 4, product_id: 6, quantity: 1 },
  { order_id: 4, product_id: 8, quantity: 3 },

  // Sarah's order
  { order_id: 5, product_id: 7, quantity: 1 },
  { order_id: 5, product_id: 2, quantity: 1 },

  // Maria's second order
  { order_id: 6, product_id: 1, quantity: 1 },
  { order_id: 6, product_id: 5, quantity: 2 },
];
