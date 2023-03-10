const express = require("express");
const app = express();
const port = 8081;
app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.listen(port, () => {
  console.log(`app is running at${port}`);
});
