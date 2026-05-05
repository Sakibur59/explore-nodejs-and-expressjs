//Node js requirement
// const http = require("http");
// const { url } = require("inspector");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("hello from node server");
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.end("About us ");
//   }
// });

// server.listen(5000,()=>{
//     console.log("Server is running on port 5000")
// })

//Express Js

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from Express js");
});
app.get("/about", (req, res) => {
  res.send("About us");
});
app.get("/career", (req, res) => {
  res.send("Career");
});
const users = [
  { id: 1, name: "Fardin", email: "fardin@gmail.com" },
  { id: 2, name: "khan", email: "khan@gmail.com" },
  { id: 3, name: "Jannat", email: "jannat@gmail.com" },
];
app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log("🔥 HIT POST /users");
  console.log("BODY:", req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.json(newUser);
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
