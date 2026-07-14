import db from "#db/client";

export async function createOrdersProducts({ order_id, productId, quantity }) {
  const {
    rows: [orderAndProduct],
  } = await db.query(
    `
        INSERT INTO orders_products (order_id, product_id, quantity)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
    [order_id, productId, quantity],
  );

  return orderAndProduct;
}

export async function getProductIDbyOrder({ user_id, product_id }) {
  const { rows: orderByProductID } = await db.query(
    `
    SELECT o.* FROM orders o
    JOIN orders_products op
    ON op.order_id = o.id
    WHERE o.user_id = $1
    AND op.product_id = $2
    `,
    [user_id, product_id],
  );
  console.log(orderByProductID);
  return orderByProductID;
}

export async function getProductsByOrderId({ id }) {
  const { rows: products } = await db.query(
    `
    SELECT p.*, op.quantity
    FROM orders o
    JOIN orders_products op ON op.order_id = o.id
    JOIN products p ON p.id = op.product_id
    WHERE o.id = $1;
    `,
    [id],
  );
  return products;
}
