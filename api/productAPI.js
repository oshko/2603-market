import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "#db/queries/productQueries";
import requireBody from "#middleware/requireBody";
import { getProductIDbyOrder } from "#db/queries/ordersProductsQueries";
import requireUser from "#middleware/requireUser";
const router = express.Router();

// products
router.get("/", async (req, res) => {
  const products = await getProducts();
  res.status(200).send(products);
});

// create product
router.post(
  "/",
  requireBody(["title", "description", "price"]),
  async (req, res) => {
    const { title, description, price } = req.body;
    const product = await createProduct({ title, description, price });
    res.status(201).send(product);
  },
);

// poducts by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await getProductById({ id });
  if (!product) return res.status(404).send("There is no such product!");
  return res.status(200).send(product);
});

router.get("/:id/orders", requireUser, async (req, res) => {
  const { id: product_id } = req.params;
  const { id: user_id } = req.user;
  const productsByOrder = await getProductIDbyOrder({ user_id, product_id });
  if (!productsByOrder || productsByOrder.length === 0)
    return res.status(404).send("There is no order based on this product ID!");
  return res.status(200).send(productsByOrder);
});

export default router;
