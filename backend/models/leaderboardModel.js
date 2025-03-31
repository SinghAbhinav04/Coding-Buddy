const mongoose = require('mongoose')

const leaderboardSchema = new mongoose.Schema({
    //_id
    users:[
        {
            user_id:{
                type:mongoose.Schema.Types.ObjectId,
            },
            username:{
                type:String,
                required:true,
            },
            rank:{
                type:Number,
                required:true,
            },
            points:{
                type:Number,
                required:true,
            }
        }
    ],
    updatedAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

const leaderboard = mongoose.model("leaderboard",leaderboardSchema)

module.exports= leaderboard