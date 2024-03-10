const express = require("express");
const methods = require("../controllers/filesharing")




const routes = express.Router();



routes.post("/api/file" , methods.postlink);

routes.get("/files/:uuid" , methods.generatelink);

routes.get("/files/download/:uuid" , methods.downloadfile);

routes.post("/api/files/send" , methods.sendfilelinkonemail);





module.exports = routes;

