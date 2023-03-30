const mongoose=require('mongoose')
const contactSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    name:{
        type:String,
        required:[true,"pleade add you name"]
    },
    email:{
        type:String,
        required:[true,"please add your eamil"]
    },
    phone:{
        type:String,
        required:[true,"please add your phone num "]
    },

}, {timestamps:true}
);
module.exports=mongoose.model ("Contact",contactSchema)