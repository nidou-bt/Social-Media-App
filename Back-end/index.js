const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require("./router/user.router");
const authRouter = require("./router/auth.router");
const postRouter = require("./router/post.user");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("DATABase connected!");
});
// middelware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.listen(8080, () => {
  console.log("Backend server is running on!");
});
