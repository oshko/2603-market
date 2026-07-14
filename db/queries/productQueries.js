import db from "#db/client";

export async function getProducts() {
  const { rows: products } = await db.query(`
        SELECT * FROM products
        `);

  return products;
}

export async function createProduct({ title, description, price }) {
  const {
    rows: [product],
  } = await db.query(
    `
        INSERT INTO products
        (title, description, price)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
    [title, description, price],
  );
  return product;
}

export async function getProductById({ id }) {
  const {
    rows: [product],
  } = await db.query(
    `
    SELECT * FROM products
    WHERE id = $1
    `,
    [id],
  );
  return product;
}
