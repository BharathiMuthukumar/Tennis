
import express from 'express';
const app = express();
import   mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import  userRoutes from "./src/routes/user";
app.use(express.json());
mongoose.connect(process.env.URI)

.then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY")
})

app.use("/user", userRoutes)

 
app.listen(process.env.PORT || 3000,()=>  { 
    console.log('Server listening on port 3000')
})