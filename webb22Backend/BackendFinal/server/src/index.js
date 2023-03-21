const express = require("express");
const server = express();
const cors = require("cors");
const { authenticationRoute } = require("./routes/authenticationRoute");
const cookieParser = require("cookie-parser");

server.use(express.json());

server.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);
server.use(cookieParser());

server.use("/authentication", authenticationRoute);

server.listen(5050);
