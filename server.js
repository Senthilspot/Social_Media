const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());


//import Auth routes 
require("./Routes/auth.routes")(app)


app.listen(process.env.PORT, () => {
    console.log(`Application is Running on Port ${process.env.PORT}`);
})