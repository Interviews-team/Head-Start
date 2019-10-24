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
  Users.find({}, { password: 0 }, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendUsers(docs);
    }
  });
};

const getLoggedInUser = sendUser => {
  Users.findOne({ isLoggedIn: true }, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DOCCC: ", doc);
      sendUser(doc);
    }
  });
};

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

const userLogout = (sendUser, _id) => {
  Users.updateOne({ _id }, { $set: { isLoggedIn: false } }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      sendUser(doc)
    };
  });
};

const userRegister = (sendUser, newUser) => {
  Users.create(newUser, (err, doc) => {
    if(err){
      console.log(err)
    } else {
      sendUser(doc)
    }
  })
}

const userUpdate = (sendUser, {_id, name, email, mobileNumber, field}) => {
  Users.updateOne({ _id }, { $set: { name, email, mobileNumber, field } }, (err, doc) => {
    if (err) {
      console.log(err)
    } else {
      console.log('UPDATED: ', doc);
      sendUser(doc)
    };
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

const getHrPosts = sendPosts => {
  Posts.find({ field: "HR" }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      sendPosts(docs);
    }
  });
};

const getTechnicalPosts = sendPosts => {
  Posts.find({ field: { $ne: "HR" } }, (err, docs) => {
    if (err) {
      console.log(err);
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

const getPostComments = (sendComments, post_id) => {
  Comments.find({ post_id }, (err, docs) => {
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

//USER DASHBOARD
// GET POSTS
let getUserPosts = (cb, obj) => {
  console.log(obj)
  Posts.find({ user_id: obj._id },
    function (err, posts) {
      if (err) {
        console.log('err')
        cb('err')
      }
      else {
        console.log(posts)
        cb(posts)
      }
    })
 }
 // DELETE POST
 let deleteUserPost = (cb, obj) => {
  console.log("OBJ: ", obj.id)
  Posts.remove({ _id: obj.id },
    // Posts.find({ user_id: obj._id },
    function (err, posts) {
      if (err) {
        console.log('err')
        cb('err')
      }
      else {
        console.log(posts)
        cb(posts)
      }
    }
    )}
 // GET COMMENT
 let getUserComments = (cb, obj) => {
  console.log(obj)
  Comments.find({ user_id: obj._id },
    function (err, comments) {
      if (err) {
        console.log('err')
        cb('err')
      }
      else {
        console.log(comments)
        cb(comments)
      }
    })
 }
 // DELETE COMMENT
 let deleteUserComment = (cb, obj) => {
  console.log("OBJ: ", obj.id)
  Comments.remove({ _id: obj.id },
    // Comment.find({ user_id: obj._id },
    function (err, comments) {
      if (err) {
        console.log('err')
        cb('err')
      }
      else {
        console.log(comments)
        cb(comments)
      }
    }
    )}
 

//MODULE EXPORTS
module.exports = {
  getUsers,
  userCheckLogin,
  userLogout,
  getLoggedInUser,
  userRegister,
  userUpdate,

  getPosts,
  getHrPosts,
  getTechnicalPosts,

  getEvents,

  getComments,
  getPostComments,

  getPendings,

  getFields,

  //USER DASHBOARD
  getUserPosts,
  deleteUserPost,
  getUserComments,
  deleteUserComment
};
