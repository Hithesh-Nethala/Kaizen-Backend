const RegisterSchema=require('../model/FormModel')
const formRegistration=async(req,res)=>{
    try {
        const {username,email,message}=req.body
        let exist=await RegisterSchema.findOne({email:email})
        if(exist){
            return res.status(400).json('User Already Exist!')
        }
        let newData=new RegisterSchema({username,email,message})
        await newData.save();
        return res.status(200).json('Registered Successfully')
    } catch (error) {
        return res.status(500).json('Registration Failed')
    }
}

const userDetails=async(req,res)=>{
    try {
        let exist=await RegisterSchema.find();
        if(!exist){
            return res.status(400).json("No User's Found!")
        }
        return res.status(200).json(exist);
    } catch (error) {
        return res.status(500).json("Getting User's Details Failed!")
    }
}

const IndvUser=async(req,res)=>{
    try {
        let exist=await RegisterSchema.find();
        if(!exist){
            return res.status(400).json("No User's Found!")
        }
        let length=exist.length;
        return res.status(200).json(exist[length-1]);
    } catch (error) {
        return res.status(500).json('Getting User Details Failed!')
    }
}

module.exports={formRegistration,userDetails,IndvUser}