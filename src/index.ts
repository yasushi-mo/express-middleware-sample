import express from "express";
import { loggerMiddleware } from "./middlewares/logger.js";

const app = express();
const port = 3000;

// 作成したミドルウェアを適用
// すべてのリクエストに対してこのミドルウェアが実行される
app.use(loggerMiddleware);

// ルートハンドラ
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
