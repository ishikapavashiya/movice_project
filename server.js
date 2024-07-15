require("dotenv").config();
let http = require("http");
let express = require("express");
let dbconnect = require("./DB/DB.connect");
const route = require("./route");
let cors = require("cors")
const cookieParser = require("cookie-parser");
let app = express();


// cookie
app.use(cookieParser());


app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dbconnect();

app.use("/v1", route)

app.get("/", (req, res) => {
    res.render("index");
  });
  
app.set("view engine", "ejs");

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server strated ${process.env.PORT}`);
});