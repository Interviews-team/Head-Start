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
  name: String,
  posts: [{
    question: String,
    answer: String,
    user_id: String
  }]
});

const pendingSchema = new mongoose.Schema({
  question: String,
  answer:String,
  field: String,
  user_id: String
});

const eventsSchema = new mongoose.Schema({
  title:String,  
  img_path: String,
  description: String,
  url: String
});

//MODELS
const Users = mongoose.model("users", usersSchema);
const Fields = mongoose.model("posts", fieldsSchema);
const Pending = mongoose.model("pending", pendingSchema);
const Events = mongoose.model("events", eventsSchema);

//QUERIES FUNCTIONS
//TESTING
const getUsers = sendUsers => {
  Users.find({}, { name: 1, _id: 0 }, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendUsers(docs);
    }
  });
};

const addUser = (sendUsers, user) => {
  let {name, email, password, mobileNumber, gender, field, role, isLoggedIn} = user
  Users.create({name, email, password, mobileNumber, gender, field, role, isLoggedIn}, err => {
    if(err){
      console.log(err);
    } else {
      getUsers(sendUsers)
    }
  })
}

//AHMAD GHZAWI
//Please write your code below and only below your name



//AHMAD NSOUR
//Please write your code below and only below your name



//MOHAMMAD ALAA ALDEEN
//Please write your code below and only below your name



//HANI ABU ALINAIN
//Please write your code below and only below your name



//MODULE EXPORTS
module.exports = {
  getUsers,
  addUser
};