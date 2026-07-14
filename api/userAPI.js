import express from "express";
import requiredBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";
import { createUser, getUserByUserNamePassword } from "#db/queries/userQueries";

const router = express.Router();

router.post(
  "/register",
  requiredBody(["username", "password"]),
  async (req, res) => {
    const { username, password } = req.body;
    const user = await createUser({ username, password });
    if (!user) return res.status(400).send("Failed to create User");
    const token = createToken({ id: user.id });
    return res.status(201).send(token);
  },
);

router.post(
  "/login",
  requiredBody(["username", "password"]),
  async (req, res) => {
    const { username, password } = req.body;
    const user = await getUserByUserNamePassword({ username, password });
    if (!user)
      return res.status(401).send("Please check you username and password!");
    const token = createToken({ id: user.id });
    return res.status(200).send(token);
  },
);

export default router;
