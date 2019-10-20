const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/DATABASE_NAME", {
//   useNewUrlParser: true
// });
const db = mongoose.connection;

db.on("error", function() {
  console.log("CONNECTION FAILED");
});
db.once("open", function() {
  console.log("CONNECTION SUCCESS");
});

//SCHEMA
// const SCHEMA_NAME = new mongoose.Schema({
//   e.g
//   title: String,
//   status: String,
//   language: String
// });

//MODEL
// const MODEL_NAME = mongoose.model("COLLECTION_NAME", SCHEMA_NAME);

//QUERIES FUNCTIONS
//e.g
// const getRepos = sendReposFunction => {
//   Repositories.find({}, (err, docs) => {
//     if (err) {
//       console.log("ERR:", err);
//     } else {
//       sendReposFunction(docs);
//     }
//   });
// };

// //MODULE EXPORTS
// module.exports = {
//   getRepos
// };