import {
  createOrder,
  getOrders,
  getOrderbyOrderId,
  getOrdersByUserId,
} from "#db/queries/orderQueries";
import express from "express";
import requireUser from "#middleware/requireUser";
import {
  createOrderProduct,
  getProductsByOrderId,
} from "#db/queries/ordersProductsQueries";
import { getProductById } from "#db/queries/productQueries";

const router = express.Router();
router.use(requireUser);

router.get("/", async (req, res) => {
  const orders = await getOrders();
  if (!orders) return res.status(200).send("There is no orders!");
  return res.status(200).send(orders);
});
// GET orders/:id/
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const order = await getOrderbyOrderId({ id });
  if (!order) return res.status(404).send("There is no order placed");
  if (order.user_id !== req.user.id)
    return res.status(403).send("You are not owner of this order!");
  res.status(200).send(order);
});
// POST /orders/
router.post("/", async (req, res) => {
  const { date, note } = req.body;
  const { id: user_id } = req.user;
  if (!date) return res.status(400).send("order required Date!");
  const newOrder = await createOrder({ date, note, user_id });
  if (!newOrder)
    return res.status(400).send("Order creation have some issues!");
  return res.status(201).send(newOrder);
});

// POST /orders/:id/products
router.post("/:id/products", async (req, res, next) => {
  try {
    const { id: order_id } = req.params;
    const { productId, quantity } = req.body;

    // 1. Request body must include productId and quantity
    if (productId === undefined || quantity === undefined) {
      return res
        .status(400)
        .send("Request must include productId and quantity.");
    }

    // 2. Order must exist
    const order = await getOrderbyOrderId({ id: order_id });

    if (!order) {
      return res.status(404).send("Order does not exist.");
    }

    // 3. Logged-in user must own the order
    if (order.user_id !== req.user.id) {
      return res.status(403).send("You do not own this order.");
    }

    // 4. Product must exist
    const product = await getProductById({ id: productId });

    if (!product) {
      return res.status(400).send("Product does not exist.");
    }

    // 5. Create orders_products record
    const orderProduct = await createOrderProduct({
      order_id,
      product_id: productId,
      quantity,
    });

    return res.status(201).send(orderProduct);
  } catch (error) {
    next(error);
  }
});

export default router;
