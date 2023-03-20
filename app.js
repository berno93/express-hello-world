const { request, response } = require("express");

const path = require("path");

const express = require("express");

const PORT = 3000;

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("views engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

//route principale

app.get("/home", (request, response, next) => {
  console.log(request);

  res.render("index.html", { title: "/home" });
});

//route dog

app.get("/home/:dog", (request, response, next) => {
  console.log(request);

  response.sendFile(path.join(__dirname, "views", "dog.html"));
});

//route cat

app.get("/home/:cat", (request, response, next) => {
  console.log(request);

  response.sendFile(path.join(__dirname, "views", "cat.html"));
});

app.listen(PORT, () => {
  console.log(`==> server launched on port : ${PORT}`);
});
