import express from 'express';
import dotenv from 'dotenv';
import {connect} from 'mongoose';
import user from './routes/user.route.js';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/', user.userRoute);



const port = process.env.PORT || 3001
const db_url = process.env.DB_URL

const start = async () => {
    await connect(db_url);

    app.listen(port, (err) => {
        if(err) {
            console.log(err);
        };
        console.log(`Server working on port ${port}`);
    });
}

start();