const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connection estblishes successfully",connect.Connection.name )
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};
module.exports=connectDb