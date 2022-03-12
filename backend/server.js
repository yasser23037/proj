const express = require(`express`);
require("dotenv").config()
const connectDb = require('./config/connectDb');
const helemt = require ("helmet");
const morgan = require("morgan");
const multer = require("multer");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const router = express.Router();
const path = require("path");

const app = express();


connectDb();

app.use("/images", express.static(path.join(__dirname, "public/images")));


app.use(express.json());
app.use(morgan("common"));




const port = 5000



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);






app.listen(port,()=>console.log(`port is running on port ${process.env.PORT}`))