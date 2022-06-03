
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title:{type:Array},
    description :{type:Array},
    img_url:{type:String},
    project_url:{type:String},
    tag:{type:Array}
},{ timestamps:true})

module.exports=mongoose.model("ProjectStore", projectSchema); 