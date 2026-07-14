export const users = [
  { username: "alex", password: "password123" },
  { username: "maria", password: "password123" },
  { username: "john", password: "password123" },
  { username: "sarah", password: "password123" },
  { username: "david", password: "password123" },
  { username: "emma", password: "password123" },
  { username: "michael", password: "password123" },
  { username: "sophia", password: "password123" },
];

export const products = [
  {
    title: "Wireless Headphones",
    description: "Bluetooth headphones with a 20-hour battery life.",
    price: 79.99,
  },
  {
    title: "Water Bottle",
    description: "Insulated stainless steel bottle that holds 32 ounces.",
    price: 24.99,
  },
  {
    title: "Desk Lamp",
    description: "Adjustable LED desk lamp with touch brightness controls.",
    price: 39.99,
  },
  {
    title: "Coffee Mug",
    description: "Simple ceramic mug for coffee, tea, and other hot drinks.",
    price: 14.99,
  },
  {
    title: "Portable Phone Charger",
    description: "Compact power bank with fast USB charging.",
    price: 29.99,
  },
  {
    title: "Laptop Backpack",
    description: "Water-resistant backpack with a padded laptop compartment.",
    price: 54.99,
  },
  {
    title: "Yoga Mat",
    description: "Non-slip exercise mat with a convenient carrying strap.",
    price: 34.99,
  },
  {
    title: "Hardcover Notebook",
    description: "Durable hardcover notebook with 200 lined pages.",
    price: 12.99,
  },
  {
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable sensitivity.",
    price: 27.5,
  },
  {
    title: "Mechanical Keyboard",
    description: "Compact mechanical keyboard with illuminated keys.",
    price: 89.99,
  },
  {
    title: "Phone Stand",
    description: "Adjustable aluminum stand for smartphones and small tablets.",
    price: 17.99,
  },
  {
    title: "USB-C Cable",
    description: "Six-foot USB-C cable for charging and data transfer.",
    price: 9.99,
  },
  {
    title: "Coffee Grinder",
    description: "Electric coffee grinder with multiple grind settings.",
    price: 44.99,
  },
  {
    title: "Cooking Pan",
    description: "Non-stick 12-inch frying pan with a heat-resistant handle.",
    price: 36.5,
  },
  {
    title: "Kitchen Knife",
    description: "Stainless steel chef knife with an ergonomic handle.",
    price: 32.99,
  },
  {
    title: "Cutting Board",
    description: "Wooden cutting board for everyday food preparation.",
    price: 19.99,
  },
  {
    title: "Running Shoes",
    description: "Lightweight running shoes with comfortable cushioned soles.",
    price: 74.99,
  },
  {
    title: "Fitness Tracker",
    description: "Tracks steps, heart rate, sleep, and workout activity.",
    price: 99.99,
  },
  {
    title: "Resistance Bands",
    description: "Set of five exercise bands with different resistance levels.",
    price: 21.99,
  },
  {
    title: "Travel Towel",
    description: "Lightweight quick-dry towel for travel and exercise.",
    price: 16.5,
  },
];

export const orders = [
  { date: "2026-06-01", note: "Leave at the front door", user_id: 1 },
  { date: "2026-06-02", note: null, user_id: 2 },
  { date: "2026-06-03", note: "Call when you arrive", user_id: 3 },
  { date: "2026-06-04", note: "This is a gift", user_id: 4 },
  { date: "2026-06-05", note: null, user_id: 5 },
  { date: "2026-06-06", note: "Deliver after 5 PM", user_id: 6 },
  {
    date: "2026-06-07",
    note: "Leave with the building manager",
    user_id: 7,
  },
  { date: "2026-06-08", note: null, user_id: 8 },
  { date: "2026-06-10", note: "Please use the side entrance", user_id: 1 },
  { date: "2026-06-12", note: null, user_id: 2 },
  { date: "2026-06-14", note: "Ring the doorbell twice", user_id: 3 },
  { date: "2026-06-16", note: "Fragile items", user_id: 4 },
  { date: "2026-06-18", note: null, user_id: 5 },
  { date: "2026-06-20", note: "Do not leave outside", user_id: 6 },
  { date: "2026-06-22", note: null, user_id: 7 },
  { date: "2026-06-24", note: "Text before delivery", user_id: 8 },
  { date: "2026-06-26", note: null, user_id: 1 },
  { date: "2026-06-28", note: "Weekend delivery preferred", user_id: 2 },
  { date: "2026-07-01", note: null, user_id: 3 },
  {
    date: "2026-07-03",
    note: "Leave package behind the gate",
    user_id: 5,
  },
];

export const orders_products = [
  // Order 1 — 5 distinct products
  { order_id: 1, product_id: 1, quantity: 1 },
  { order_id: 1, product_id: 2, quantity: 2 },
  { order_id: 1, product_id: 12, quantity: 2 },
  { order_id: 1, product_id: 5, quantity: 1 },
  { order_id: 1, product_id: 8, quantity: 1 },

  // Order 2
  { order_id: 2, product_id: 3, quantity: 1 },
  { order_id: 2, product_id: 4, quantity: 2 },

  // Order 3
  { order_id: 3, product_id: 5, quantity: 1 },

  // Order 4
  { order_id: 4, product_id: 6, quantity: 1 },
  { order_id: 4, product_id: 8, quantity: 3 },

  // Order 5
  { order_id: 5, product_id: 7, quantity: 1 },
  { order_id: 5, product_id: 19, quantity: 1 },

  // Order 6
  { order_id: 6, product_id: 9, quantity: 1 },
  { order_id: 6, product_id: 10, quantity: 1 },

  // Order 7
  { order_id: 7, product_id: 13, quantity: 1 },
  { order_id: 7, product_id: 4, quantity: 4 },

  // Order 8
  { order_id: 8, product_id: 17, quantity: 1 },
  { order_id: 8, product_id: 20, quantity: 2 },

  // Order 9
  { order_id: 9, product_id: 11, quantity: 2 },
  { order_id: 9, product_id: 12, quantity: 3 },

  // Order 10
  { order_id: 10, product_id: 14, quantity: 1 },
  { order_id: 10, product_id: 15, quantity: 1 },
  { order_id: 10, product_id: 16, quantity: 1 },

  // Order 11
  { order_id: 11, product_id: 18, quantity: 1 },
  { order_id: 11, product_id: 19, quantity: 2 },

  // Order 12
  { order_id: 12, product_id: 1, quantity: 1 },
  { order_id: 12, product_id: 9, quantity: 1 },

  // Order 13
  { order_id: 13, product_id: 2, quantity: 1 },
  { order_id: 13, product_id: 4, quantity: 2 },
  { order_id: 13, product_id: 8, quantity: 1 },

  // Order 14
  { order_id: 14, product_id: 6, quantity: 1 },

  // Order 15
  { order_id: 15, product_id: 13, quantity: 1 },
  { order_id: 15, product_id: 2, quantity: 2 },

  // Order 16
  { order_id: 16, product_id: 17, quantity: 1 },
  { order_id: 16, product_id: 18, quantity: 1 },
  { order_id: 16, product_id: 20, quantity: 1 },

  // Order 17
  { order_id: 17, product_id: 3, quantity: 1 },
  { order_id: 17, product_id: 10, quantity: 1 },
  { order_id: 17, product_id: 11, quantity: 2 },

  // Order 18
  { order_id: 18, product_id: 5, quantity: 2 },
  { order_id: 18, product_id: 12, quantity: 3 },

  // Order 19
  { order_id: 19, product_id: 7, quantity: 1 },
  { order_id: 19, product_id: 19, quantity: 1 },

  // Order 20
  { order_id: 20, product_id: 14, quantity: 1 },
  { order_id: 20, product_id: 15, quantity: 1 },
  { order_id: 20, product_id: 16, quantity: 2 },
];
