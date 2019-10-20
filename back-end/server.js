const express = require("express");
const cors = require("cors");
const db = require('./database')

const app = express();
app.use(cors());
app.use((request, response, next) => {
  response.header(`Access-Control-Allow-Origin`, `*`);
  response.header(
    `Access-Control-Allow-Headers`,
    `Origin, X-Requested-with, Content-Type, Accept`
  );
  next();
});
app.use(express.json());

app.get("/", (request, response) => response.json("test working"));

//SERVER AND DATABASE RESPONSE AND BEHAVIOR EXAMPLE
// app.get("/get_data", (request, response) => {
//   db.getRepos( repos => response.json( repos ))
// });

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
