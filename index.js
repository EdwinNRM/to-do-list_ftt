require("dotenv").config();

const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

connectToDb();

const app = express();
const port = process.env.PORT;

//comando de engine de renderização
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () =>
  console.log(`servidor rodando em http://localhost:${port}`)
);
