const express = require("express");
const mongoose = require("mongoose");
const cron =require("node-cron");
const dotenv =require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

//conect to mongo.db
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Define routes 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));    