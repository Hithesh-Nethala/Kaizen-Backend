var mongoose=require('mongoose');

const RegisterSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String
    }
})

module.exports=mongoose.model("Registration",RegisterSchema)