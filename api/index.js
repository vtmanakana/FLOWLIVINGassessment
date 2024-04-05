import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDB Connected Successfully');
}).catch((err) => {
    console.error(err);
})  


const app = express();

app.listen(4700, () =>
{
    console.log('Server is running on port 4700!!!');
}
);