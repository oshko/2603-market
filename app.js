import express from "express";
import morgan from "morgan";
import userRouter from "#api/userAPI";
import productsAPI from "#api/productAPI";
import orderAPI from "#api/orderAPI";
import getUserFromToken from "#middleware/getUserFromToken";
const app = express();
export default app;

//body parser
app.use(express.json());
//server side rendered form parser
app.use(express.urlencoded({ extended: true }));

//logger
app.use(morgan("combined"));

// user Authentication call
app.use(getUserFromToken);
// index
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Online shop");
});

//Routers
app.use("/users", userRouter);
app.use("/products", productsAPI);
app.use("/orders", orderAPI);

// error handler

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server side error. Please try again later.");
});
