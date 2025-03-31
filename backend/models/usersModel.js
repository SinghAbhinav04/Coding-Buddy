const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
        // _id
        userName:{
                type:String,
                required:true,
                unique:true,
        },
        email:{
                type:String,
                required:true,
                unique:true,
        },
        password:{
                type:String,
                required:true,
        },
        firstName:{
                type:String,
                required:true,
        },
        lastName:{
                type:String,
        },
        
        profile:{
                role:{
                        type:String,
                        required:true,
                },
                progress:[
                        {
                               courseID:{
                                type:mongoose.Schema.Types.ObjectId,
                                ref:"Course",
                               } ,
                               completion:{
                                type:Number,
                               },
                               problemsSolved:{
                                type:Number,
                               },
                               docsRead:{
                                type:Number,
                               },
                               points:{
                                type:Number,
                               },
                        }
                ],
                rank:{
                        type:Number,
                }
        },
        createdAt:{
                type:Date,
                default:Date.now(),
        },
},{timestamps:true});

const users = mongoose.model("users",usersSchema);

module.exports = users;