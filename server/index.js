const express = require("express");
const bodyParser = require("body-parser");
const bc = require("./controllers/book_controller.js");

const app = express();

app.use(bodyParser.json());

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:id", bc.update);
app.delete("/api/books/:id", bc.delete);

app.post("/api/books");

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});
