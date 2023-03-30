const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
connectDb()
const port = 8081;

app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/user",require("./Routes/userRoutes"))
app.use(errorHandler);
app.listen(port, () => {
  console.log(`app is running at${port}`);
});

// {
//     "name":"atif2",
//     "email":"ati2f@gmail.com",
//     "phone":"redm21i"
// }