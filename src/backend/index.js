import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

const app =express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/')
.then( ()=> console.log('connected to db Atlas'))
.catch( (err) => console.log(`Database connection error:`,{err}))


app.listen(5000, () => {
    console.log('port 5000');
});