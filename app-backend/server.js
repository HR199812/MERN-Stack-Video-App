const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const multer = require("multer");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* Connection to MongoDB Compass */
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to Compass is successful");
  })
  .catch((error) => {
    console.log(error);
  });

const videosRouter = require("./routes/video");
const userRouter = require("./routes/user");

app.use("/videos", videosRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
