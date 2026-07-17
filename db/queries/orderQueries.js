import db from "#db/client";

// This needs to done after junction table done!
export async function getOrders() {
  const { rows: orders } = await db.query(
    `
    SELECT * FROM orders
    `,
  );
  return orders;
}

export async function getOrdersByUserId({ id }) {
  const {
    rows: [order],
  } = await db.query(
    `
        SELECT orders.*
        FROM orders
        JOIN users ON orders.user_id = users.id
        WHERE users.id = $1;
        `,
    [id],
  );
  return order;
}

export async function getOrderbyOrderId({ id }) {
  const {
    rows: [order],
  } = await db.query(
    `
    SELECT * FROM orders
    WHERE id = $1
    `,
    [id],
  );
  return order;
}

export async function createOrder({ date, note, user_id }) {
  const sql = `
    INSERT INTO orders (date, note, user_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `;

  const {
    rows: [order],
  } = await db.query(sql, [date, note, user_id]);
  return order;
}
