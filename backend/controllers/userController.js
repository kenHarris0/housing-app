import userSchema from "../model/userSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();


// GET all users
const user_get = async (req, res) => {
    try {
        const users = await userSchema.find();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

// POST a new user
const user_signup =  async (req, res) => {
    try {
        const { userName, password, contact, gender, address } = req.body;
        const existingUser = await userSchema.findOne({userName});
        if(existingUser){
            return res.status(400).send("Username already exists");
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        await userSchema.insertOne({
            userName,
            password: hashedPassword,
            contact,
            gender,
            address
        });

    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const user_login =  async(req, res) => {
    const {userName, password} = req.body;

    try{
        const user = await userSchema.findOne({userName});
        if(!user){
            return res.status(404).send("User Not found");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).send("Invalid Password");
        } 
        const accessToken = jwt.sign({id : user._id, username : user.userName}, process.env.Access_Token);
        res.status(200).json({accessToken: accessToken});
    }
    catch(err){
        res.status(500).send("Internal server Error");
        console.error(err);
    }   
};


export default {
  user_get,
  user_signup,
  user_login
};