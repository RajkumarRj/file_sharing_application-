const express = require("express");
const router = require("./routes/filesharing")

const mongo = require("mongoose");

const app = express();
app.use(express.json());

mongo.connect("mongodb://localhost:27017/file_sharing")
.then(()=> console.log("database connected "))
.catch((err)=>console.log(err));



app.use(router);



app.listen(5000, ()=>{
    console.log("server is up and running");
})