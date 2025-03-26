const mongoose = require("mongoose");
const Problem = require("./problemModel");

const submissionSchema = new mongoose.Schema({
        //_id
        userId:{  
                        type:mongoose.Schema.Types.ObjectId,
                        ref: 'users',
              },
        ProblemId:{
                 type:mongoose.Schema.Types.ObjectId,
                        ref: 'Problem',
        },
        language:{
                type:String,
        },
        code:{
                type:String,
        },
        results:{
                status:{
                        type:String,
                },
                testCasePassed:{
                        type:Number,
                },
                totalTestCases:{
                        type:Number,
                },
                timeTaken:{
                        type:String,
                }
        },
        submittedAt:{
                type:Date,
                default:Date.now(),
        },
},{timestamps:true});

const submission = mongoose.model("submission",submissionSchema);

module.exports = submission;