import User from "../model/user.model.js";

export const createUser = async (req,res) =>{
    try {
        const newUser = new User(req.body);
        const {email} = newUser;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }else{
            const savedUser = await newUser.save(); 
            res.status(200).json(savedUser)
        }

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const getAllUsers = async (req,res) =>{
    try {
        const allUsers = await User.find();
        if(!allUsers || allUsers.length === 0){
            return res.status(400).json({message:"No users found"})
        }else{
            res.status(200).json(allUsers)
        }

        
    }catch(err){
        res.status(500).json({message:err.message})
    }
}