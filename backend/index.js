const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config()



app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "PUT", "DELETE", "OPTIONS", "GET"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.set("trust proxy", 1); // trust first proxy


app.use(cookieParser());
app.use(morgan("common"));
app.use(express.json());
require("./utils/db")();

app.use(
  session({
    name: "cloudversity.sid",
    secret: "helloworld",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure:false,
      maxAge: 1000*60*60*24,
      httpOnly: false,
    },
  })
);

require("./routes/AllRoutes")(app)
app.use((err,req,res,next)=>{
  res.status(500).json({message:err.message,success:false})
})

app.listen(8000, () => console.log(`server started at port 8000`));