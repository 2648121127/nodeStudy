
 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
     name:{type:String},
     avatar:{type:String},
     title:{type:String},
     categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
     scores:{
         difficult:{type:Number},
         skills:{type:Number},
         attack:{type:Number},
         survive:{type:Number},
     },
     skills:[{
         icon:{type:Sting},
         name:{type:Sting},
         description:{type:Sting},
         tips:{type:Sting},
     }],
     items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
     items2:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
     usageTips:{type:Sting},
     battleTips:{type:Sting},
     teamTips:{type:Sting},
     partners:{type:Sting},

 })

 module.exports = mongoose.model('Hero',schema)