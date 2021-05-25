const express = require("express");
const app = express();
const port = process.env.PORT || 3306;
const routes = require("./routes");
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.send('<p style="color: blue; font-size: 46px;> FUTEBOL AVENIDA </p>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
