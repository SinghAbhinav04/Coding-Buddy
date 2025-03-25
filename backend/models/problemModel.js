const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            default:null,
            required:true
        },
        description:{
            type: String,
            default: null,
        },
        difficultyLevel:{
            type:String,
            required:true
        },
        topicName:{
            type:String,
            required:true
        },
        testCases:[
            {
                input:{
                    type:String
                },
                expectedOutput:{
                    type:String
                }
            }
        ],
        createdAt:{
            type:Date,
            default:Date.now
        },
    },
    {timestamps:true}
);

const Problem = mongoose.model("Problem",problemSchema);

module.exports=Problem;