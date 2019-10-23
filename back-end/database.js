const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/headStart", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("CONNECTION FAILED");
});
db.once("open", function() {
  console.log("CONNECTION SUCCESS");
});

//SCHEMAS
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobileNumber: String,
  gender: String,
  field: String,
  role: String,
  isLoggedIn: Boolean
});

const fieldsSchema = new mongoose.Schema({
  name: String
});

const postsSchema = new mongoose.Schema({
    question: String,
    answer: String,
    field: String,
    user_id: String
})

const commentsSchema = new mongoose.Schema({
    comment: String,
    post_id: String,
    user_id: String
})

const pendingSchema = new mongoose.Schema({
  question: String,
  field: String,
  user_id: String
});

const eventsSchema = new mongoose.Schema({
  title: String,  
  img_path: String,
  description: String,
  url: String
});

//MODELS
const Users = mongoose.model("users", usersSchema);
const Fields = mongoose.model("fields", fieldsSchema);
const Posts = mongoose.model("posts", postsSchema);
const Comments = mongoose.model("comments", commentsSchema);
const Pendings = mongoose.model("pendings", pendingSchema);
const Events = mongoose.model("events", eventsSchema);

//QUERIES FUNCTIONS

//USERS FUNCTIONS
//Please write your code below and only below your name
const getUsers = sendUsers => {
  Users.find({}, { name: 1, _id: 0 }, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendUsers(docs);
    }
  });
};

// const addUser = (sendUsers, user) => {
//   let {name, email, password, mobileNumber, gender, field, role, isLoggedIn} = user
//   Users.create({name, email, password, mobileNumber, gender, field, role, isLoggedIn}, err => {
//     if(err){
//       console.log(err);
//     } else {
//       getUsers(sendUsers)
//     }
//   })
// }

//FIELDS FUNCTIONS
//Please write your code below and only below your name
const getFields = sendFields => {
  Fields.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendFields(docs);
    }
  });
};

//POSTS FUNCTIONS
//Please write your code below and only below your name
const getPosts = sendPosts => {
  Posts.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendPosts(docs);
    }
  });
};

//COMMENTS FUNCTIONS
//Please write your code below and only below your name
const getComments = sendComments => {
  Comments.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendComments(docs);
    }
  });
};

//PENDINGS FUNCTIONS
//Please write your code below and only below your name
const getPendings = sendPendings => {
  Pendings.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      console.log(docs);
      sendPendings(docs);
    }
  });
};

//EVENTS FUNCTIONS
//Please write your code below and only below your name
const getEvents = sendEvents => {
  Events.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendEvents(docs);
    }
  });
};


//MODULE EXPORTS
module.exports = {
  getUsers,
  getPosts,
  getEvents,
  getComments,
  getPendings,
  getFields
};