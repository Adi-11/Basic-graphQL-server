import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server Up and Running");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Up and running on ${PORT}`);
});
