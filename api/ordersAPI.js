import {
  createOrder,
  getOrders,
  getOrderbyOrderId,
  getOrdersByUserId,
} from "#db/queries/orderQueries";
import express from "express";
import requireUser from "#middleware/requireUser";
import {
  createOrdersProducts,
  getProductsByOrderId,
} from "#db/queries/junctionT/ordersProductsQueries";
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
router.post("/:id/products", async (req, res) => {
  const { id: order_id } = req.params;
  const { quantity, productId } = req.body;
  if (!quantity || !productId)
    return res.status(400).send("Request required Quantity and Product ID!");
  const isProductExist = await getProductById({ id: productId });
  if (!isProductExist)
    return res.status(400).send("There is no product based on your request!");
  const isOrderExist = await getOrderbyOrderId({ id: order_id });
  if (!isOrderExist) return res.status(404).send("Order is not exist!");
  if (isOrderExist.user_id !== req.user.id)
    return res.status(403).send("Your are not owner or this order!");
  const newOrderAndProduct = await createOrdersProducts({
    order_id,
    productId,
    quantity,
  });
  if (!newOrderAndProduct)
    return res.status(404).send("There is no order based on this ID!");
  return res.status(201).send(newOrderAndProduct);
});
// GET /orders/:id/products
router.get("/:id/products", async (req, res) => {
  const { id } = req.params;
  const isOrderExist = await getOrderbyOrderId({ id });
  if (!isOrderExist)
    return res.status(404).send("There is not order exist based on this ID");
  const productsOfOrder = await getProductsByOrderId({ id });
  res.status(200).send(productsOfOrder);
});

export default router;
