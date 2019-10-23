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

//USERS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-users`, (req, res) => {
  db.getUsers( users => res.json( users ))
});

// app.post(`/add-user`, (req, res) => {
//   db.addUser( users => res.json ( users ), req.body)
// })

//FIELDS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-fields`, (req, res) => {
  db.getFields( fields => res.json( fields ))
});

//POSTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-posts`, (req, res) => {
  db.getPosts( posts => res.json( posts ))
});

//COMMENTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-comments`, (req, res) => {
  db.getComments( comments => res.json( comments ))
});

//PENDINGS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-pendings`, (req, res) => {
  db.getPendings( pendings => res.json( pendings ))
});

//EVENTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-events`, (req, res) => {
  db.getEvents( events => res.json( events ))
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
