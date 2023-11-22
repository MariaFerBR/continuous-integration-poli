import express from "express";
import { v4 } from "uuid";

const app = express();

const info = [];

app.use(express.json());

app.get("/continuous", (_req, res) => {
  res.send("integration :)");
});

app.get("/get-information", (_req, res) => {
  res.status(200).json(info);
});

app.post("/create-information", (req, res) => {
  const { title } = req.body;
  if (!title) return res.sendStatus(400);

  const newInfo = { ...req.body, id: v4() };
  info.push(newInfo);
  res.status(200).json(newInfo);
});

export default app;