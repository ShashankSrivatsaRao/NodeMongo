const mongoose=require("mongoose");

const DATABASE= "mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE)
  .then( ()=>{
    console.log("db connected!!");
  })
  .catch(()=>{
    console.log("error in db connect!!");
  });