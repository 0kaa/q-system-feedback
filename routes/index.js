import { Router } from "express";
const router = Router();

// Define a GET route
router.get("/hello", (req, res) => {
  return res.json({
    message: "Hello, GET sssroute!",
  });
});

// Define a POST route
router.post("/hello", (req, res) => {
  const data = req.body;
  res.send(`Hello, POST route! You sent: ${JSON.stringify(data)}`);
});

export default router;
