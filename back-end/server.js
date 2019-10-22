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

app.get("/", (req, res) => res.json("test working"));

//SERVER AND DATABASE RESPONSE AND BEHAVIOR
//TESTING
app.get(`/get-users`, (req, res) => {
  db.getUsers( users => res.json( users ))
});

// app.post(`/add-user`, (req, res) => {
//   db.addUser( users => res.json ( users ), req.body)
// })

app.get(`/get-posts`, (req, res) => {
  db.getPosts( posts => res.json( posts ))
});

app.get(`/get-comments`, (req, res) => {
  db.getComments( comments => res.json( comments ))
});

app.get(`/get-events`, (req, res) => {
  db.getEvents( events => res.json( events ))
});

app.get(`/get-pendings`, (req, res) => {
  db.getPendings( pendings => res.json( pendings ))
});

app.get(`/get-fields`, (req, res) => {
  db.getFields( fields => res.json( fields ))
});

//AHMAD GHZAWI
//Please write your code below and only below your name



//AHMAD NSOUR
//Please write your code below and only below your name



//MOHAMMAD ALAA ALDEEN
//Please write your code below and only below your name



//HANI ABU ALINAIN
//Please write your code below and only below your name



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
