const express = require('express')
const cors = require('cors')
const connectMongoDB = require('./connection.js')

const authRoutes = require("./routes/authRoutes.js");
const courseRoutes = require("./routes/courseRoutes.js");
const problemRoutes = require("./routes/problemRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const leaderboardRoutes = require("./routes/leaderboardRoutes.js");
const aiRoutes = require("./routes/aiRoutes.js");
const compilerRoutes = require("./routes/compilerRoutes");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type', 'Authorization'],  
}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Forwarding Routes
app.use("/api/auth", authRoutes)    ;
app.use("/api/courses", courseRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/compiler", compilerRoutes);





app.get("/",(req,res)=>{
    res.send("hey")
})

app.listen(3000,()=>{
    console.log("Server started")
})