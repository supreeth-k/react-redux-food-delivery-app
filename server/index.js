const express = require("express");
const paymentRoutes = require("./routes/paymentRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const path = require("path");

require("./db");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(checkoutRoutes);
app.use(express.json());
app.use(paymentRoutes);

app.get("/", (req, res) => {
  res.send("Working!");
});

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
