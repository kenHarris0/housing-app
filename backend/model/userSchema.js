import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName:  {type : String, required : true, unique: true},
    password:  {type : String, required : true},
    contact:  {type : Number, required : true},
    gender:  {type : String, required : true},
    address:  {type : String, required : true},
});

export default mongoose.model("users", userSchema);