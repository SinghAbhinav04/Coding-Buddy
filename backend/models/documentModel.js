const mongoose = require("mongoose");

const documentSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        topicName:{
            type:String,
            required:true
        },
        difficulty:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    },
    {timestamps:true}
)

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;