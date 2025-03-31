const mongoose = require("mongoose")

const  discusssionSchema = new mongoose.Schema({

        //_id,
        userId:{  
                 type:mongoose.Schema.Types.ObjectId,
                 ref: 'users',
       },                 
        topicName:{
                type:String,
                required:true,
        },
        comments:{
                type:String,
        },
        replies:[
                {
                      userId:{  
                        type:mongoose.Schema.Types.ObjectId,
                                ref: 'users',
                      },
                      comment:{
                        type:String,
                        required:true,
                      }
                        
                }
        ],
        createdAt:{
                type:Date,
                default:Date.now(),
        }
},{timestamps:true})

const discussionForum = mongoose.model("discussionForum",discusssionSchema);

module.exports = discussionForum;