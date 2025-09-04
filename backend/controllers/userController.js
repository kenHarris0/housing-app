import express from "express";
import userSchema from "../model/userSchema.js";
import bcrypt from 'bcrypt';

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
    try {
        
        const users = await userSchema.find();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// POST a new user
router.post("/signup", async (req, res) => {
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
        res.status(201).send("User created successfully");

    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/login', async(req, res) => {
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
        res.status(200).send("Login Successfull");
    }
    catch(err){
        res.status(500).send("Internal server Error");
    }   
});

export default router;
