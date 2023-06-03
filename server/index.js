import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

//varriables
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

async function start () {
    try {
        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rxkbfby.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
        app.listen(PORT, (error) => {
            console.log(`server work on port ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
}

start();

