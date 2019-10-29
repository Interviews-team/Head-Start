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

app.post("/add-admin", (req, res) => {
  db.addAdmin(users => res.json(users), req.body);
});

//FIELDS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-fields`, (req, res) => {
  db.getFields(fields => res.json(fields));
});

app.post("/add-field", (req, res) => {
  db.addField(fields => res.json(fields), req.body);
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

app.post("/delete-user-post", (req, res) =>
  db.deleteUserPost(posts => res.json(posts), req.body)
);

app.post("/delete-hr-post", (req, res) =>
  db.deleteHrPost(posts => res.json(posts), req.body)
);

app.post("/delete-tech-post", (req, res) =>
  db.deleteTechPost(posts => res.json(posts), req.body)
);

app.post("/delete-post", (req, res) =>
  db.deletePost(deleted => res.json(deleted), req.body)
);

//COMMENTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-comments`, (req, res) => {
  db.getComments(comments => res.json(comments));
});

app.get(`/get-post-comments/:id`, (req, res) => {
  db.getPostComments(comments => res.json(comments), req.params.id);
});

app.post("/add-comment", (req, res) => {
  db.addComment(status => res.json(status), req.body);
});

//PENDINGS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-pendings`, (req, res) => {
  db.getPendings(pendings => res.json(pendings));
});

app.get("/get-pending-admins", (req, res) =>
  db.getPendingAdmins(pendings => res.json(pendings))
);

app.get("/get-hr-pendings", (req, res) =>
  db.getHrPosts(questions => res.json(questions))
);

app.get("/get-tech-pendings", (req, res) =>
  db.getTechPendings(questions => res.json(questions))
);

app.post("/answer-pending", (req, res) => {
  db.answerPending(answered => res.json(answered), req.body);
});

app.post("/accept-pending", (req, res) => {
  db.acceptPending(accepted => res.json(accepted), req.body);
});

app.post('/delete-pending', (req, res) => {
  db.deletePending(deleted => res.json(deleted), req.body)
})

//EVENTS FUNCTIONS
//Please write your code below and only below your name
app.get(`/get-events`, (req, res) => {
  db.getEvents(events => res.json(events));
});

app.post(`/add-event`, req => {
  db.addEvent(req.body);
});

app.post('/delete-event', (req, res) => {
  db.deleteEvent(events => res.json(events), req.body)
})

app.post('/delete-user', (req, res) => {
  db.deleteUser(users => res.json(users), req.body)
})

//for ask question
//askQuestion={this.askQuestion}
app.post(`/ask-question`, req => db.askQuestion(req.body));

//USER DASHBOARD
// GET POSTS
app.post("/get-user-posts", (req, res) => {
  db.getUserPosts(post => {
    res.json(post);
  }, req.body);
});

// GET COMMENTS
app.post("/get-user-comments", (req, res) => {
  db.getUserComments(comment => {
    res.json(comment);
  }, req.body);
});
//GET PENDINGS
app.post("/get-user-pending-questions", (req, res) => {
  db.getUserPendings(pending => {
    res.json(pending);
  }, req.body);
});
// DELETE COMMENT
app.post("/delete-user-comment", (req, res) => {
  db.deleteUserComment(comments => {
    res.json(comments);
  }, req.body);
});

app.post("/add-post", req => {
  db.addPost(req.body);
});

app.post("/application", req => db.application(req.body));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
