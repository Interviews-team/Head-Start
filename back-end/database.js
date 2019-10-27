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
});

const commentsSchema = new mongoose.Schema({
  comment: String,
  post_id: String,
  user_id: String
});

const pendingSchema = new mongoose.Schema({
  question: String,
  field: String,

  name: String,
  email: String,
  mobileNumber: String,
  gender: String,
  field: String,
  role: String,
  user_id: String,

  status: String
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
//GET ALL USERS
const getUsers = sendUsers => {
  Users.find({}, { password: 0 }, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendUsers(docs);
    }
  });
};

//GET LOGGED IN USER'S DATA
const getLoggedInUser = sendUser => {
  Users.findOne({ isLoggedIn: true }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      sendUser(doc);
    }
  });
};

//CHECK FOR THE LOGGED IN USER
const userCheckLogin = (sendUser, { email, password }) => {
  Users.findOne(
    { $and: [{ email }, { password }] },
    { password: 0 },
    (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        if (doc !== null) {
          Users.updateOne(
            { _id: doc._id },
            { $set: { isLoggedIn: true } },
            err => {
              if (err) {
                console.log(err);
              } else {
                sendUser(doc);
              }
            }
          );
        } else {
          sendUser(doc);
        }
      }
    }
  );
};

//LOGOUT THE LOGGED IN USER
const userLogout = (sendUser, _id) => {
  Users.updateOne({ _id }, { $set: { isLoggedIn: false } }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      sendUser(doc);
    }
  });
};

//REGISTER NEW USER
const userRegister = (sendUser, newUser) => {
  Users.create(newUser, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      sendUser(doc);
    }
  });
};

//UPDATE USER DATA
const userUpdate = (sendUser, { _id, name, email, mobileNumber, field }) => {
  Users.updateOne(
    { _id },
    { $set: { name, email, mobileNumber, field } },
    (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        sendUser(doc);
      }
    }
  );
};

const addAdmin = (sendUsers, admin) => {
  Users.create(admin, err => {
    if (err) {
      console.log(err);
    } else {
      getUsers(sendUsers);
    }
  });
};

//FIELDS FUNCTIONS
//GET ALL FIELDS
const getFields = sendFields => {
  Fields.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendFields(docs);
    }
  });
};

const addField = (sendFields, { field }) => {
  Fields.create({ name: field }, err => {
    if (err) {
      console.log(err);
    } else {
      getFields(sendFields);
    }
  });
};

//POSTS FUNCTIONS
//GET ALL POSTS
const getPosts = sendPosts => {
  Posts.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendPosts(docs);
    }
  });
};

//GET ALL HR POSTS
const getHrPosts = sendPosts => {
  Posts.find({ field: "HR" }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      sendPosts(docs);
    }
  });
};

//GET ALL TECHNICAL QUESTIONS
const getTechnicalPosts = sendPosts => {
  Posts.find({ field: { $ne: "HR" } }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      sendPosts(docs);
    }
  });
};

//GET POSTS RELATED FOR A SPECIFIC USER
const getUserPosts = (sendPosts, { _id }) => {
  Posts.find({ user_id: _id }, (err, docs) => {
    if (err) {
      console.log("err");
    } else {
      sendPosts(docs);
    }
  });
};

const addPost = post => {
  Posts.create(post, err => {
    if (err) console.log(err);
  });
};

const deleteUserPost = (sendPosts, { _id, user_id }) => {
  Posts.deleteOne({ _id }, err => {
    if (err) {
      console.log(err);
    } else {
      getUserPosts(sendPosts, { _id: user_id });
    }
  });
};

const deleteHrPost = (sendPosts, { _id }) => {
  Posts.deleteOne({ _id }, err => {
    if (err) {
      console.log(err);
    } else {
      getHrPosts(sendPosts);
    }
  });
};

const deleteTechPost = (sendPosts, { _id }) => {
  Posts.deleteOne({ _id }, err => {
    if (err) {
      console.log(err);
    } else {
      getTechnicalPosts(sendPosts);
    }
  });
};

const deletePost = (sendPost, { _id }) => {
  Posts.deleteOne({ _id }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      sendPost(doc);
    }
  });
};

//COMMENTS FUNCTIONS
//GET ALL COMMENTS
const getComments = sendComments => {
  Comments.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendComments(docs);
    }
  });
};

//GET ALL COMMENTS RELATED TO SPECIFIC POST
const getPostComments = (sendComments, post_id) => {
  Comments.find({ post_id }, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendComments(docs);
    }
  });
};

//GET ALL COMMENTS BY SPECIFIC USER
const getUserComments = (sendComments, { _id }) => {
  Comments.find({ user_id: _id }, (err, docs) => {
    if (err) {
      console.log("err");
    } else {
      sendComments(docs);
    }
  });
};

//DELETE SPECIFIC COMMENT COMMENTED BY THIS USER
const deleteUserComment = (sendComments, { _id, user_id }) => {
  Comments.deleteOne({ _id }, err => {
    if (err) {
      console.log(err);
    } else {
      getUserComments(sendComments, { _id: user_id });
    }
  });
};

const addComment = (sendStatus, comment) => {
  Comments.create(comment, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      sendStatus(doc);
    }
  });
};

//PENDINGS FUNCTIONS
//GET ALL PENDINGS
const getPendings = sendPendings => {
  Pendings.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      sendPendings(docs);
    }
  });
};

const answerPending = (
  sendPending,
  { _id, question, answer, field, user_id }
) => {
  Pendings.updateOne({ _id }, { $set: { status: "answered" } }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      Posts.create({ question, answer, field, user_id }, err => {
        if (err) {
          console.log(err);
        } else {
          sendPending(doc);
        }
      });
    }
  });
};

const acceptPending = (sendPending, { _id, user_id, role }) => {
  Pendings.updateOne({ _id }, { $set: { status: "accepted" } }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      Users.updateOne({ _id: user_id }, { $set: {role} }, err => {
        if (err) {
          console.log(err);
        } else {
          sendPending(doc);
        }
      });
    }
  });
};

const deletePending = (sendDeleted, {_id}) => {
  Pendings.deleteOne({_id}, (err, doc) => {
    if(err){
      console.log(err);
    }else{
      sendDeleted(doc)
    }
  })
}

//GET ALL QUESTIONS PENDING FOR SPECIFIC USER
const getUserPendings = (sendPendings, { _id }) => {
  Pendings.find(
    { $and: [{ question: { $ne: null } }, { user_id: _id }] },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        sendPendings(docs);
      }
    }
  );
};

const getHrPendings = sendPendings => {
  Pendings.find(
    {
      $and: [
        { question: { $ne: null } },
        { field: "HR" },
        { status: { $ne: "answered" } }
      ]
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        sendPendings(docs);
      }
    }
  );
};

const getTechPendings = sendPendings => {
  Pendings.find(
    {
      $and: [
        { question: { $ne: null } },
        { field: { $ne: "HR" } },
        { status: { $ne: "answered" } }
      ]
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        sendPendings(docs);
      }
    }
  );
};

const getPendingAdmins = sendPendings => {
  Pendings.find(
    {
      $and: [{ question: null }, { status: { $ne: "accepted" } }]
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        sendPendings(docs);
      }
    }
  );
};

//SUBMITTED APPLICATION
const application = ({ _id, name, email, mobileNumber, field, role }) => {
  Pendings.create(
    {
      name,
      email,
      mobileNumber,
      field,
      role,
      user_id: _id,
      status: "Pending..."
    },
    err => {
      if (err) console.log(err);
    }
  );
};

//EVENTS FUNCTIONS
//GET ALL EVENTS
const getEvents = sendEvents => {
  Events.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendEvents(docs);
    }
  });
};

//ADD NEW EVENT
const addEvent = event => {
  Events.create(event, err => {
    if (err) console.log(err);
  });
};

//QUESTION FUNCTIONS
const getQuestion = sendQuestion => {
  Pendings.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendQuestion(docs);
    }
  });
};
const askQuestion = question => {
  console.log("QUESTION: ", question);
  Pendings.create(question, err => {
    if (err) console.log(err);
  });
};

//MODULE EXPORTS
module.exports = {
  getUsers,
  userCheckLogin,
  userLogout,
  getLoggedInUser,
  userRegister,
  userUpdate,
  addAdmin,

  getPosts,
  getHrPosts,
  getTechnicalPosts,
  addPost,
  deleteUserPost,
  deleteHrPost,
  deleteTechPost,
  deletePost,

  getEvents,

  getComments,
  getPostComments,
  addComment,

  getPendings,
  getPendingAdmins,
  application,
  getHrPendings,
  getTechPendings,
  answerPending,
  acceptPending,
  deletePending,

  getFields,
  addEvent,
  getQuestion,
  askQuestion,

  addField,

  getUserPosts,
  getUserComments,
  deleteUserComment,
  getUserPendings
};
