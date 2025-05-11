const mongoose = require("mongoose");

const CowSchema = new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    age:{type:Number,required:false},
    typeOfCow:{type:String,required:true},
    dateOfConception:{type:Date,required:true},
    typeOfConception:{type:String,required:true}
});

module.exports = mongoose.model("Cow",CowSchema);