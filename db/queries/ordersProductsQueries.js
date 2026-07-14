import db from "#db/client";

export async function createOrderProduct({ order_id, product_id, quantity }) {
  const {
    rows: [orderProduct],
  } = await db.query(
    `
      INSERT INTO orders_products (order_id, product_id, quantity)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
    [order_id, product_id, quantity],
  );

  return orderProduct;
}

export async function getOrdersByUserAndProduct({ user_id, product_id }) {
  const { rows: orders } = await db.query(
    `
      SELECT o.*
      FROM orders o
      JOIN orders_products op
        ON op.order_id = o.id
      WHERE o.user_id = $1
        AND op.product_id = $2
      ORDER BY o.date DESC, o.id DESC;
    `,
    [user_id, product_id],
  );

  return orders;
}

export async function getProductsByOrderId({ id }) {
  const { rows: products } = await db.query(
    `
      SELECT
        p.*,
        op.quantity
      FROM orders_products op
      JOIN products p
        ON p.id = op.product_id
      WHERE op.order_id = $1
      ORDER BY p.id;
    `,
    [id],
  );

  return products;
}
