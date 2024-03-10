const mongoose = require("mongoose");


const dbschema = new mongoose.Schema({
    filename:{
        type:String,
        required:true,
    },
    path:{
        type: String,
        required:true,
    },

    size:{
        type:Number,
        required:true, 
    },

    sender:{
        type:String,
        
        default:""
    },

    receiver:{
        type:String,
        default:""
    }

})


module.exports = mongoose.model("files",dbschema);