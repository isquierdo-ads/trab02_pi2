const express = require("express");
const app = express();
const port = process.env.PORT || 3306;
const routes = require("./routes");
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send('<h1>FUTEBOL AVENIDA</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
