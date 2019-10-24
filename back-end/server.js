const express = require("express");
const cors = require("cors");
const db = require("./database");

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
  db.getUsers(users => res.json(users));
});

app.get(`/get-logged-in`, (req, res) => {
  db.getLoggedInUser(user => res.json(user));
});

app.post(`/login-user`, (req, res) => {
  db.userCheckLogin(user => {
    res.json(user);
  }, req.body);
});

app.put("/logout/:id", (req, res) => {
  db.userLogout(updated => {
    res.json(updated);
  }, req.params.id);
});

app.post("/register-user", (req, res) => {
  db.userRegister(registered => {
    res.json(registered);
  }, req.body);
});

app.post("/update-user", (req, res) => {
  db.userUpdate(updated => {
    res.json(updated);
  }, req.body);
});

//FIELDS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-fields`, (req, res) => {
  db.getFields(fields => res.json(fields));
});

//POSTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-posts`, (req, res) => {
  db.getPosts(posts => res.json(posts));
});

app.get(`/get-hr-posts`, (req, res) => db.getHrPosts(posts => res.json(posts)));

app.get(`/get-technical-posts`, (req, res) =>
  db.getTechnicalPosts(posts => res.json(posts))
);

//COMMENTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-comments`, (req, res) => {
  db.getComments(comments => res.json(comments));
});

app.get(`/get-post-comments/:id`, (req, res) => {
  db.getPostComments(comments => res.json(comments), req.params.id);
});

//PENDINGS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-pendings`, (req, res) => {
  db.getPendings(pendings => res.json(pendings));
});

//EVENTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-events`, (req, res) => {
  db.getEvents(events => res.json(events));
});

app.post(`/addEvent`, (req, res) => {
  let event = req.body;
  db.addEvent(event => {
    res.json(event);
  }, event);
});

//for ask question
//askQuestion={this.askQuestion}
app.post(`/askQuestion`, (req, res) => {
  db.askQuestion(question => {
    res.json(question);
  }, req.body);
});

const PORT = process.env.PORT || 9500;
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
