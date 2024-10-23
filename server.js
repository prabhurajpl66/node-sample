const http = require("node:http");
const url = require("url");
var userList = require("./data/user.data.json");
var productList = require("./data/product.data.json");

const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl == "/") {
    res.write("Welcome to node.js");
    res.end();
  } else if (reqUrl == "/users") {
    const Users = await getData();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(Users));
  } else if (reqUrl == "/products") {
    const Products = await getProducts();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(Products));
  }
});

async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(userList), 5000);
  });
}

async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productList), 500);
  });
}

server.listen(3000, () => {
  console.log("server started.......");
});
