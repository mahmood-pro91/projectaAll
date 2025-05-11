import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

dotenv.config();






const port = process.env.PORT || 3030;
const mangourl = process.env.MONGO_URL;

mongoose.connect(mangourl)
.then(() =>{
    console.log("Connected to MongoDB")
    app.listen(port, () => {
        
        console.log(`Server is running on port ${port}`)
    })
})
    
.catch((error) => console.error("Error connecting to MongoDB : ", error));


app.get('/', (req, res) => {
    res.send('Hello Express World! i am here to adding DB');
});


app.use("/api",route)