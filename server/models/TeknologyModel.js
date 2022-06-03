
const mongoose = require('mongoose');
const teknologySchema = new mongoose.Schema({
    whatAmIUsing:{type:Array},
    whatAmILearning :{type:Array}
},{ timestamps:true})

module.exports=mongoose.model("TeknologyStore", teknologySchema); 