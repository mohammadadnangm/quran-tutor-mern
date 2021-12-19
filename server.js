const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/about", (req, res) => {
  res.send("about us page");
});
app.get("/contact", (req, res) => {
  res.send("contact uspage");
});
app.get("/signin", (req, res) => {
  res.send("signin page");
});
app.get("/signup", (req, res) => {
  res.send("sign up page");
});

app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});
