import express from "express";
// test commit
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    version: "1.0.0",
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
