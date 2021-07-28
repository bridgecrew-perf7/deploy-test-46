const PORT = process.env.PORT || 5050;
const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    index: true,
    state: true,
  });
});
app.get("/con", (req, res) => {
  res.status(200).json({
    index: true,
    state: false,
  });
});

app.listen(PORT, () => {
  console.log(`Connected PORT: ${PORT}`);
});
