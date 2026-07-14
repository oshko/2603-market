import db from "#db/client";
import { users, products, orders, orders_products } from "#db/seedData";
import { createUser } from "#db/queries/userQueries";
import { createProduct } from "#db/queries/productQueries";
import { createOrder } from "#db/queries/orderQueries";
import { createOrdersProducts } from "#db/queries/ordersProductsQueries";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  //seeding users
  for (const user of users) {
    await createUser(user);
  }
  // seeding products
  for (const product of products) {
    await createProduct(product);
  }
  // seeding orders
  for (const order of orders) {
    await createOrder(order);
  }

  // seeding orders and products
  for (const orderProduct of orders_products) {
    await createOrdersProducts(orderProduct);
  }
}
